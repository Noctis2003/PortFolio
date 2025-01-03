"use server";
import handler from "./sendmail";
async function sendMail(formdata:FormData) {
   
    const text = formdata.get("text") as string;
    console.log(text);
    await handler(text);
  }
    export default sendMail;