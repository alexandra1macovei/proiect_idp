from flask import Flask, render_template, request, make_response
from redis import Redis
import os
import socket
import random
import json

option_a = os.getenv('OPTION_A', "omleta cu oua si cascaval")
option_b = os.getenv('OPTION_B', "omleta simpla")
option_c = os.getenv('OPTION_C', "oua ochiuri cu bacon")
option_d = os.getenv('OPTION_D', "paine prajita si cascaval pane")
option_e = os.getenv('OPTION_E', "supa de pui a la grec")
option_f = os.getenv('OPTION_F', "supa de pui")
option_g = os.getenv('OPTION_G', "ciorba de perisoare")
option_h = os.getenv('OPTION_H', "ciorba de burta")
option_i = os.getenv('OPTION_I', "piept de pui cu cartofi prajiti")
option_j = os.getenv('OPTION_J', "salata Caesar")
option_k = os.getenv('OPTION_K', "pui Crispy cu cartofi prajiti")
option_l = os.getenv('OPTION_L', "cartofi gratinati")
option_m = os.getenv('OPTION_M', "salata greceasca")
option_n = os.getenv('OPTION_N', "cartofi taranesti cu frigarui de pui")
option_o = os.getenv('OPTION_O', "cartofi la cuptor cu pulpe de pui")
option_p = os.getenv('OPTION_P', "tort Snickers")
option_r = os.getenv('OPTION_R', "tarta cu mere")
option_q = os.getenv('OPTION_Q', "crema de zahar ars")
option_s = os.getenv('OPTION_S', "papanasi")
option_t = os.getenv('OPTION_T', "clatite cu dulceata")
option_u = os.getenv('OPTION_U', "clatite cu finetti si topping de ciocolata")
option_v = os.getenv('OPTION_V', "salata de fructe")
option_w = os.getenv('OPTION_W', "mousse de ciocolata")
option_x = os.getenv('OPTION_X', "cheesecake")
option_y = os.getenv('OPTION_Y', "orez cu lapte")
option_z = os.getenv('OPTION_Z', "tort de ciocolata")

hostname = socket.gethostname()

app = Flask(__name__)

def get_redis():
    if not hasattr(g, 'redis'):
        g.redis = Redis(host="redis", db=0, socket_timeout=5)
    return g.redis

@app.route("/", methods=['POST','GET'])
def hello():
    voter_id = request.cookies.get('voter_id')
    if not voter_id:
        voter_id = hex(random.getrandbits(64))[2:-1]

    vote = None

    if request.method == 'POST':
        redis = get_redis()
        vote = request.form['vote']
        data = json.dumps({'voter_id': voter_id, 'vote': vote})
        redis.rpush('votes', data)

    resp = make_response(render_template(
        'index.html',
        option_a=option_a,
        option_b=option_b,
        option_c=option_c,
        option_d=option_d,
        option_e=option_e,
        option_f=option_f,
        option_g=option_g,
        option_h=option_h,
        option_i=option_i,
        option_j=option_j,
        option_k=option_k,
        option_l=option_l,
        option_m=option_m,
        option_n=option_n,
        option_o=option_o,
        option_p=option_p,
        option_r=option_r,
        option_q=option_q,
        option_s=option_s,
        option_t=option_t,
        option_u=option_u,
        option_v=option_v,
        option_w=option_w,
        option_x=option_x,
        option_y=option_y,
        option_z=option_z,
        hostname=hostname,
        vote=vote,
    ))
    resp.set_cookie('voter_id', voter_id)
    return resp


if __name__ == "__main__":
    app.run(port=80)
