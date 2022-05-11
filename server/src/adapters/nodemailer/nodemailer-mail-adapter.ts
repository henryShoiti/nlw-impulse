import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "cb595d815d04b0",
    pass: "41216b3978eb06"
  }
});


export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject, body}:SendMailData){
      await transport.sendMail({
    from:"Equipe Feedget <oi@feedget.com>",
    to:"Henry Shoiti <henryshoiti200@gmail.com>",
    subject,
    html:body, 
  })
  }
}