import bcryptjs from "bcryptjs";

const hash = "$2b$08$pAGK3lpadDjsJRfylmQmX.9DVT4TfyE8/OIHXa7BbV2UHWfAwCsmK";
const plain = "123456";

const match = await bcryptjs.compare(plain, hash);
console.log("Coincide:", match);
