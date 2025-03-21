import { OpenAI } from "openai";
import Job from "../models/Job.js";
import { io } from "../server.js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const recommendJobs = async (req, res) => {
  try {
    const userSkills = req.body.skills;
    const prompt = `Suggest job roles based on these skills: ${userSkills.join(
      ", "
    )}`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // ✅ Use "gpt-4-turbo" instead of "gpt-4"
      messages: [{ role: "user", content: prompt }],
    });

    res.json({ recommendations: response.choices[0].message.content });
  } catch (error) {
    console.error("Error generating job recommendations:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Create Job
export const createJob = async (req, res) => {
  try {
    const { title, description, company } = req.body;

    if (!title || !description || !company) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const existingJob = await Job.findOne({ title, description, company });
    if (existingJob) {
      return res.status(400).json({ message: "Job already exists" });
    }

    const job = new Job({ title, description, company, postedBy: req.user.id });
    await job.save();

    io.emit("newJob", job);
    res.status(201).json(job);
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get All Jobs
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("postedBy", "name email");
    if (jobs.length === 0) {
      return res.status(404).json({ message: "No jobs available" });
    }
    res.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get Job by ID
export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate(
      "postedBy",
      "name email"
    );
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.json(job);
  } catch (error) {
    console.error("Error fetching job:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete Job
export const deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    if (job.postedBy.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    await job.deleteOne();
    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).json({ message: "Server error" });
  }
};
