// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res
    .status(200)
    .json({ results: [{ id: 1 }, { user_name: "sonnguyen1108" }] });
}
