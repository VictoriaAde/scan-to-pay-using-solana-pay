### Run the development server:

```bash
npm install

and

npm run dev

```
### Install ngrok
for security, Solana Pay requires https URLs. The common ways to run https locally are a bit fiddly here too because remember it's our phone that's making the request. The easiest way to get this working is using a tool called ngrok.

Ngrok will provide us a HTTPS URL accessible from anywhere, that points at our localhost:3000 port. That'll make transaction requests super easy to test! If you've used ngrok before then feel free to skim over this setup.

Sign up at https://ngrok.com  and make sure you verify your email. This is required before we can serve our app.

Next visit https://ngrok.com/download and follow the instructions to install ngrok.

Once you have it installed, log in to ngrok.com and get your auth token.

Run that command and you'll have ngrok configured and ready to go.

Now make sure your app is running npm run dev and then in another terminal run ngrok http 3000. This will spin up an ngrok URL pointing at your localhost:3000 You should see something like:

```
Introducing Cloud Edges for all ngrok users: https://ngrok.com/r/cloud-edges    
                                                                                
Session Status                online                                            
Account                       Victoria Adedayo (Plan: Free)                     
Version                       3.3.1                                             
Region                        Europe (eu)                                       
Latency                       283ms                                             
Web Interface                 http://127.0.0.1:4040                             
Forwarding                    https://711b-197-211-53-116.ngrok-free.app -> http
                                                                                
Connections                   ttl     opn     rt1     rt5     p50     p90       
                              241     0       0.00    0.00    0.72    19.45     
                                                                                
```

That big Forwarding URL should now be serving your app! If you visit it you should see your store, and if you make updates locally you should see them reflected immediately. Now your app is running on a public https URL and transaction requests will work!
