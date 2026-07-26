import mongoose from "mongoose"

const vaultentryschema = new mongoose.Schema({
    sitename: { type: String, required: true},
    siteurl: { type: String, required: true },
    username_email: { type: String, required: true },
    password: { type: String, required: true }
}, { timestamps: true });

const vaultentry = mongoose.model('vaultEntry', vaultentryschema);

export default vaultentry;