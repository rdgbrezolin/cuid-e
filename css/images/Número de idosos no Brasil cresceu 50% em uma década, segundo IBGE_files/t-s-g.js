if (typeof _tv_U == "undefined") {
	var _tv_U = "undefined";
	if (typeof _tv_ss == _tv_U) {
		var _tv_ss = (function() {
			var i, S = document.getElementsByTagName("script");
			for (i = S.length - 1; i >= 0; i--) {
				if (typeof S[i] == "object" && (S[i].getAttribute("src") + "").match(/t\-s\-g\.js$/)) {
					return S[i].getAttribute("src");
				}
			}
		})();
	}
	var _tv_C = {
		s: "",
		pt: "",
		hn: "",
		pn: "",
		qs: "",
		rf: "",
		rr: "",
		up: 0,
		GA: 1,
		ru: "http://tslt.terra.com.mx/TD.asp?",
		ii: new Array(),
		cV: function(v, d) {
			if (typeof v == _tv_U || v == null) {
				if (typeof d == _tv_U || d == null) {
					v = "";
				} else {
					v = d;
				}
			}
			return v;
		},
		tL: function(a) {
			if (typeof a != "string") {
				return a;
			}
			return a.toLowerCase();
		},
		cS: function(a, b) {
			if (typeof a != "string") {
				return "";
			}
			var c = a.indexOf(b, 0);
			if (c > 0) {
				return a.substring(0, c);
			} else {
				return a;
			}
		},
		vCC: function(v, c, d) {
			if (v) {
				c = _tv_C.tL(c);
				if (c.match(/^(ar|br|cl|co|cr|do|ec|en|es|gt|hn|mx|ni|pa|pe|sv|tv|us|uy|ve)$/)) {
					c = c == "tv" ? (v > 1 ? "es" : d) : c;
				} else {
					c = d;
				}
			} else {
				c = c.match(/^(cr|do|en|gt|hn|ni|pa|sv)$/) ? "us" : (c == "uy" ? "ar" : c);
			}
			return c;
		},
		cC: function(c) {
			c = c.replace(/^[\s\/]+|[\s\/]+$/g, "");
			var e = c.split(".");
			if (e.length < 3) {
				for (var j = 0; j < 3 - e.length; j++) {
					c += ".";
				}
				e = c.split(".");
			}
			for (var j = 0; j < e.length; j++) {
				e[j] = e[j].replace(/^[\s]+|[\s]+$/g, "");
				if (j < 3 && e[j] == "") {
					e[j] = _tv_U;
				}
			}
			var C = _tv_C.vCC(1, e[0], "");
			if (!C) {
				var h = _tv_C.hn.split(".");
				C = _tv_C.vCC(1, h[h.length - 1], _tv_U);
			}
			e[0] = C;
			return (e.join(".")).replace(/[\.]+/g, ".").replace(/[\.]+$/g, "");
		},
		eD: function(d) {
			var e;
			e = escape(unescape(d));
			e = e.replace(/&/g, "%26");
			e = e.replace(/\+/g, "%2B");
			e = e.replace(/\//g, "%2F");
			e = e.replace(/=/g, "%3D");
			e = e.replace(/\?/g, "%3F");
			e = e.replace(/@/g, "%40");
			return e;
		},
		aE: function(a, b, c) {
			var o = "";
			if (b.indexOf("  ", 0) != 0) {
				o = "on";
			} else {
				b = b.substring(2, b.length);
			}
			if (a.addEventListener) {
				if (a.removeEventListener) {
					try {
						a.removeEventListener(b, c, false);
					} catch (e) {}
				}
				a.addEventListener(b, c, false);
			} else if (a.attachEvent) {
				if (a.detachEvent) {
					try {
						a.detachEvent(o + b, c);
					} catch (e) {}
				}
				a.attachEvent(o + b, c);
			} else {
				with(a) eval("a." + o + b + "=" + c)
			}
		},
		gU: function(q, i, o) {
			var r = "",
				q = q ? q : _tv_C.qs;
			if (q) {
				q = q.substring(q.indexOf("?") + 1);
				var a = q.split("&");
				for (var j = 0; j < a.length; j++) {
					var p = a[j].split("=");
					if (p[0] == i) {
						r = (o ? "&" + o + "=" : "") + p[1];
						break;
					}
				}
			}
			return r;
		},
		sR: function(r) {
			r = unescape(r);
			var gi = "";
			if (r.search(/idrop[s]?.terra./) >= 0) {
				var q = r.search(/\?/);
				if (q >= 0) {
					var qs = r.substring(q);
					gi = _tv_C.gU(qs, "gid", "");
					gi = gi ? "/" + gi : "";
				}
			}
			return "&ref=" + _tv_C.eD(_tv_C.cS(r, "?") + gi);
		},
		gW: function(W) {
			var W = w,
				p = w.parent,
				l = w.location;
			if (p && p.location != l && p.location.host == l.host) {
				W = p;
				return _tv_C.gW(W)
			}
			return W
		},
		iM: function() {
			var w = window,
				W = "",
				r = "";
			var l = (w && w.location) ? w.location : document.location,
				S = _tv_C.cV(_tv_ss, ""),
				A, B, C, D, E;
			A = S.indexOf("//");
			B = A > -1 ? A + 2 : 0;
			C = S.indexOf("/", B);
			D = C > -1 ? C : S.length;
			E = _tv_C.tL(S.substring(B, D));
			_tv_C.pt = _tv_C.tL(l.protocol);
			_tv_C.hn = "player.video.terra.";
			_tv_C.pn = "/objectembed";
			_tv_C.qs = _tv_C.tL(l.search);
			_tv_C.s = _tv_C.tL((S != null && S && S.match(/^http[s]?:\/\/s[0-9]\.trrsf\.com(\.br)?\//i) && S.match(/\/metrics\/v2\//) && S.match(/\.js$/i)) ? S : (_tv_C.hn == E ? "internal" : "other"));
			if (_tv_C.pt == "https:") {
				_tv_C.ru = _tv_C.ru.replace("http", "https");
			}
			try {
				W = _tv_C.gW(w)
			} catch (e) {
				W = W ? W : w
			}
			r = W.document ? W.document.referrer : "";
			if (r) {
				_tv_C.rr = r;
				_tv_C.rf = _tv_C.sR(r);
			}
			if (typeof _tv_PV != _tv_U) {
				_tv_PV.i();
			}
		}
	};
	var _tv_PV = {
		jsv: 1.0,
		sr: "",
		sd: "",
		rp: 0,
		i: function() {
			var s, h = document.getElementsByTagName("head")[0],
				v = new Array("1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "2.0");
			for (var i = 0; i < v.length; i++) {
				if (document.createElement && ((s = document.createElement("script")))) {
					s.setAttribute("language", "JavaScript" + v[i]);
					s.text = "_tv_PV.jsv=" + v[i] + ";";
					h.appendChild(s);
				}
			}
			if (window.screen) {
				_tv_PV.sr = screen.width + "*" + screen.height;
				_tv_PV.sd = (_tv_C.tL(navigator.appName) == "microsoft internet explorer") ? screen.colorDepth : screen.pixelDepth;
			}
		},
		rPV: function(b, o) {
			if (!b && _tv_PV.rp) return;
			_tv_PV.rp += 1;
			var i = new Image();
			i.src = _tv_C.ru + "bstat=ts01&type=PVW&typever=3&host=" + o.plt + _tv_C.hn + _tv_CA[o.country] + "&url=" + _tv_C.pn + _tv_C.rf + "&jsver=" + _tv_PV.jsv + "&scrres=" + _tv_PV.sr + "&estat=" + Math.random().toString().substring(2, 7);
			if (_tv_C.ii) {
				_tv_C.ii[_tv_C.ii.length] = i;
			}
		}
	};
	var _tv_TTV = {
		i: 1,
		c: "",
		pN: "",
		cP: function(p) {
			function fCC(cc) {
				return String.fromCharCode(cc);
			}

			function sC(b, e) {
				var s = "";
				for (var i = b; i <= e; i++) {
					s += fCC(i);
				}
				return s;
			}

			function r(s, rs, c) {
				var rx = new RegExp(rs, "g");
				return s.replace(rx, c);
			}
			p = _tv_C.tL(p);
			p = r(p, "[" + sC(224, 229) + "]", "a");
			p = r(p, fCC(230), "ae");
			p = r(p, fCC(231), "c");
			p = r(p, "[" + sC(232, 235) + "]", "e");
			p = r(p, "[" + sC(236, 239) + "]", "i");
			p = r(p, fCC(241), "n");
			p = r(p, "[" + sC(242, 246) + fCC(248) + "]", "o");
			p = r(p, "[" + sC(249, 252) + "]", "u");
			p = r(p, "[" + fCC(253) + fCC(255) + "]", "y");
			p = p.replace(/[^\w.\/]/g, "_");
			return p;
		},
		vB: function(v) {
			return (typeof v == _tv_U ? 0 : (typeof v == "string" ? (_tv_C.tL(v) == "true" ? 1 : 0) : v ? 1 : 0));
		},
		rVE: function(o, ov) {
			var o = _tv_C.cV(o, {});
			var e = _tv_C.cV(o.event, "");
			if (e) {
				var cc = _tv_C.vCC(0, _tv_C.vCC(1, ov.country, "nd"), ""),
					aC = new Array(),
					GA;
				aC["ar"] = ["2"];
				aC["br"] = ["1"];
				aC["cl"] = ["3"];
				aC["co"] = ["4"];
				aC["ec"] = ["10"];
				aC["es"] = ["8"];
				aC["mx"] = ["5"];
				aC["pe"] = ["6"];
				aC["us"] = ["7"];
				aC["ve"] = ["11"];
				aC["nd"] = ["12"];
				GA = "UA-54936151-" + aC[cc][0];
				if (gaTerraS) {
					if (_tv_C.GA) {
						_tv_C.GA = 0;
						gaTerraS("create", GA, "auto");
					}
					gaTerraS("send", "event", "streaming", "event", e);
				}
			}
		},
		rVI: function(o, oc) {
			if (!_tv_PV.rp && o.country) {
				_tv_PV.rPV(0, o);
			}
			var to = o.timeout;
			o.contenttitle = to ? to : o.contenttitle;
			var u = o.mediaurl,
				d = o.duration,
				t = unescape(o.contentid + "|" + o.contenttitle),
				vt = (_tv_TTV.vB(o.ispreroll) ? "Advertising" : (_tv_TTV.vB(o.islive) ? "Live" : "On Demand")),
				cp = unescape(o.contentproviderid + "|" + o.contentprovidertitle),
				s = unescape(o.sourceid + "|" + o.sourcetitle),
				c = o.category,
				ch = o.country + "." + unescape(o.uvsystem),
				id = o.uvsystemid,
				cd = unescape(o.uvtag),
				e = o.isembeded,
				D = o.device;
			ch = _tv_C.cC(ch);
			var chA = ch.split(".");
			if (typeof id == _tv_U || !id) id = "0";
			if (typeof cd == _tv_U) cd = "";
			u = u ? _tv_C.cS(u, "?") : "";
			d = Math.round(d);
			if (!u) return;
			var pl = o.plyrv ? _tv_C.cS(o.plyrv, ";") : "";
			pl = ((pl.substring(0, 1)).toUpperCase() + pl.substring(1)) + " Player" + (_tv_TTV.vB(o.ispip) ? " PIP" : "");
			var pgnm = "",
				lctn = window.location,
				R = "";
			if ((unescape(document.URL)).match(/^file\:\//i)) {
				pgnm = "localfile";
			} else {
				var hst = _tv_C.tL(lctn.hostname),
					pth = unescape(_tv_C.tL(lctn.pathname)),
					hstA, pthA, leA, T = "";
				if (pth.match(/\/iframe\.html$/)) {
					var P, p, q, H;
					R = _tv_C.tL((o.referrer && o.referrer != hst + pth) ? o.referrer : _tv_C.rr);
					if (R) {
						P = R.indexOf("//", 0);
						P = P >= 0 ? P + 2 : 0;
						p = R.indexOf("/", P + 1);
						H = R.substring(P, (p < 0 ? R.length : p));
						if (H != hst) {
							hst = H;
							if (p > 0) {
								q = R.search(/[\?\#]/);
								pth = R.substring(p, (q < 0 ? R.length : q));
							} else {
								pth = "";
							}
							R = "";
						} else {
							R = "?ref=";
						}
					} else {
						R = "?ref=";
					}
				}
				hstA = (hst.replace(/^\/+/, "")).split(".");
				hst = "";
				pth = pth.replace(/\/(index|default)\.(htm|html|shtml|asp|aspx|php|cfm|jsp)$/, "/");
				for (var i = 0; i < hstA.length; i++) {
					if (hstA[i].match(/^(ar|br|cl|co|cr|do|ec|en|es|gt|hn|mx|ni|pa|pe|sv|tv|us|uy|ve)$/)) {
						hst = ":" + (hstA[i] == "tv" ? "es" : hstA[i]) + hst;
					} else {
						hst += (hstA[i].match(/^(www|terra|com)$/) ? "" : ":" + hstA[i]);
					}
				}
				hst = hst ? hst.substring(1) : "us";
				pthA = pth.split("/");
				leA = pthA.length;
				if (leA > 0) {
					T = pthA[leA - 1];
					if (T.match(/,00\.html$/)) {
						T = "";
					} else {
						T = T.replace(/\+/g, " ").replace(/^(0|1),,[eio0-9\-]*,00\-*|\.html$/g, "").replace(/,[a-f0-9]*vgnvcm[a-f0-9]*rcrd$/, "");
					}
					pthA[leA - 1] = T;
				}
				if (pth != ":") {
					pth = (pthA.join(":")).replace(/\s/g, "+");
				}
				pth = pth.replace(/^:+|:+$/g, "");
				pgnm = ((hst + (pth ? ":" + pth : "")).replace(/[\+\_]/g, " ").replace(/(^|\s|\:|\_|-)([a-z])/g, function(m, p1, p2) {
					return p1 + p2.toUpperCase();
				}).replace(/ /g, "") + R).substring(0, 255);
			}
			_tv_TTV.pN = pgnm;
			var cc = _tv_C.vCC(0, _tv_C.vCC(1, chA[0], "nd"), ""),
				aC = new Array(),
				GA;
			aC["ar"] = ["2"];
			aC["br"] = ["1"];
			aC["cl"] = ["3"];
			aC["co"] = ["4"];
			aC["ec"] = ["10"];
			aC["es"] = ["8"];
			aC["mx"] = ["5"];
			aC["pe"] = ["6"];
			aC["us"] = ["7"];
			aC["ve"] = ["11"];
			aC["nd"] = ["12"];
			GA = "UA-54936151-" + aC[cc][0];
			if (gaTerraS) {
				if (_tv_C.GA) {
					_tv_C.GA = 0;
					gaTerraS("create", GA, "auto");
				}
				gaTerraS("send", "event", "streaming", (to ? "timeout" : "play"), unescape(o.contenttitle), { /*"page":_tv_C.tL("/"+(chA[0]).substring(0,2)+"/"+c+"/"+chA[1]+"/"+chA[2]+"/"+id+"/"+cd+"/"+O.type+"/"+O.id),"title":pgnm,*/
					"dimension1": chA[1],
					"dimension2": chA[2],
					"dimension3": cd,
					"dimension4": c,
					"dimension5": id,
					"dimension9": "terra",
					"dimension13": "streaming-client-side",
					"dimension15": chA[0],
					"dimension20": _tv_C.s,
					"dimension22": D == 2 ? "tablet" : (D == 3 ? "device" : (D == 5 ? "mobile-vas" : (D == 6 ? "mobile" : "desktop"))),
					"dimension26": pgnm,
					"dimension27": t,
					"dimension28": vt,
					"dimension29": cp,
					"dimension30": s,
					"dimension31": o.origin,
					"dimension32": typeof e == _tv_U ? "Unspecified" : (_tv_TTV.vB(e) ? "Embeded" : "Not Embeded"),
					"dimension33": pl,
					"metric1": o.watingTime,
					"dimension53": o.creativeId,
					"dimension54": o.wrapperAdSystem,
					"dimension55": o.wrapperId,
					"dimension56": o.adCount
				});
			}
			if (to) {
				return;
			}
			var p = _tv_C.pt == "https:" ? "&0=1" : "",
				type = (_tv_TTV.vB(o.ispreroll) ? "vad" : (_tv_TTV.vB(o.islive) ? "vlv" : "vod")),
				srv = o.country == "br" ? "vbr" : "vlt";
			var m = new Image();
			m.src = _tv_C.ru + "bstat=t1;pv:1:0" + p + "&h=" + o.plt + _tv_C.hn + _tv_CA[o.country] + "&p=" + _tv_C.eD(_tv_C.pn + _tv_C.qs) + _tv_C.rf.replace("&ref=", "&r=") + "&js=" + _tv_PV.jsv + "&sr=" + _tv_PV.sr + "&1=" + o.contentid + ";" + type + ";" + srv + ";" + ch + "&estat=" + Math.random().toString().substring(2, 7);
			if (_tv_C.ii) {
				_tv_C.ii[_tv_C.ii.length] = m;
			}
			var x = o.plyrv.indexOf(";", 0),
				n = _tv_TTV.cP(chA[1] + "." + chA[2] + "." + o.contenttitle);
			oc.setLabels({
				ns_st_mp: pl,
				ns_st_mv: (x >= 0 ? o.plyrv.substring(x + 1) : "")
			});
			var clip = {
				ns_st_cn: 1,
				c3: "terra-" + o.country,
				c4: chA[1],
				c6: chA[1] + "|" + chA[2],
				name: n,
				ns_st_ci: o.contentid,
				ns_st_pr: o.contenttitle,
				ns_st_cl: (d * 1000),
				ns_st_ty: (_tv_TTV.vB(o.ispreroll) ? "pre-roll" : (_tv_TTV.vB(o.islive) ? "liv" : "vod")),
				ns_st_ad: (_tv_TTV.vB(o.ispreroll) ? 1 : 0),
				ns_st_li: (_tv_TTV.vB(o.islive) ? 1 : 0),
				ns_st_pn: 1,
				ns_st_tp: 1
			};
			oc.setClip(clip);
			oc.notify(oc.StreamSense.PlayerEvents.PLAY, {}, 0);
			if (o.country == "es") {
				var U = unescape(document.URL.toLowerCase());
				var q = U.indexOf("?");
				var v = q >= 0 ? _tv_C.gU(U.substring(q), "contentid", "") : "";
				U = v ? U.substring(0, q) + "?contentid=" : U;
				if (_tv_TTV.i) {
					_tv_IBP.gg1.ggPM(51, (U + v), unescape(document.referrer.toLowerCase()));
					_tv_TTV.i = 0;
				}
				var T = o.contentthumb,
					C = vt == "Advertising" ? cp : s;
				T = T.replace("#thumb#", "cnt" + o.contentid + "_h70_aNoChange_TerraTV.jpg");
				_tv_IBP.gg1.ggPM(15, u, (vt == "Advertising" ? "preroll" : "content"), "<category>" + (C.split("|")[1]) + "</category><title>" + o.contenttitle + "</title><imgurl>" + T + "</imgurl><uurl>" + (U + (v && vt == "Advertising" ? o.contentid : v)) + "</uurl><length>" + d + "</length>" + (vt == "Live" ? "<livestream>yes</livestream>" : ""));
			}
		},
		rVF: function(o, om, oc) {
			function I(v) {
				return parseInt(v);
			}
			var f = o.mediaurl,
				K = 1000;
			f = f ? _tv_C.cS(f, "?") : "";
			var c = f.lastIndexOf("/") + 1;
			if (c > 0) {
				f = f.substring(0, c);
			}
			if (!(f && om)) return;
			if (o.minbitrate) {
				var br = I(o.bitrate * K),
					mbr = I(o.minbitrate * K),
					Mbr = I(o.maxbitrate * K),
					brs = I(o.bitrateswitches);
			} else {
				var br = mbr = Mbr = I(o.bitrate * K),
					brs = 0;
			}
			var S = br > 0 ? br + ";" + mbr + ";" + Mbr + ";" + brs : "";
			f += o.contentid + ".vid";
			var u = f,
				d = Math.round(o.duration),
				cp = Math.round(o.position),
				T = unescape(o.contentid + "|" + o.contenttitle);
			d = _tv_TTV.vB(o.islive) ? cp : d;
			var p = Math.round((cp * 100) / d);
			if (d > 0) {
				var b = (_tv_TTV.vB(o.ispreroll) ? "1" : "0") + (_tv_TTV.vB(o.islive) ? "1" : "0") + (_tv_TTV.vB(o.isadult) ? "1" : "0") + (_tv_TTV.vB(o.isclosed) ? "1" : "0") + (_tv_TTV.vB(o.iswide) ? "1" : "0") + (_tv_TTV.vB(o.isrelated) ? "1" : "0") + "0" + (_tv_TTV.vB(o.isembeded) ? "1" : "0");
				var I = "&mply=" + o.plyrv + "&mtget=" + _tv_C.eD(u) + "&mid=" + o.contentid + "&mtit=" + _tv_C.eD(o.contenttitle) + "&mvchn=" + (o.sourceid != "partner" ? o.sourceid + ";" + _tv_C.eD(o.sourcetitle) : o.sourceid + "-" + o.contentproviderid + ";" + _tv_C.eD(o.sourcetitle + ":" + o.contentprovidertitle)) + "&mcntprv=" + o.contentproviderid + ";" + _tv_C.eD(o.contentprovidertitle) + "&mflgs=" + b + "&minf=" + d + ";" + S + "&mprgs=" + p + ";" + o.bufferingcount + ";" + o.bufferingtimefirst + ";" + o.bufferingtimetotal + "&mbw=" + o.minbandwidth + ";" + o.maxbandwidth + ";" + o.avgbandwidth + ";" + o.availbandwidth;
				var i = new Image();
				i.src = _tv_C.ru.replace("tslt", "rt") + "bstat=ts01&type=MM&typever=11&host=" + o.plt + _tv_C.hn + _tv_CA[o.country] + "&url=" + _tv_C.pn + I + _tv_C.rf + "&estat=" + Math.random().toString().substring(2, 7);
				if (_tv_C.ii) {
					_tv_C.ii[_tv_C.ii.length] = i;
				}
				var t = unescape(o.contentid + "|" + o.contenttitle),
					ch = _tv_C.cC(o.country + "." + unescape(o.uvsystem)),
					id = o.uvsystemid,
					cd = unescape(o.uvtag),
					e = o.isembeded;
				var chA = ch.split(".");
				if (typeof id == _tv_U || !id) id = "0";
				var C = 0;
				if (b.charAt(1) == "1") {
					if (cp > 21600) {
						cp = 21600;
					}
					C = 1;
				} else {
					if (cp - d > 1) {
						cp = d;
					}
					if (cp > 14400) {
						cp = 14400;
					}
					if (Math.abs(d - cp) < 2) C = 1;
				}
				var cc = _tv_C.vCC(0, _tv_C.vCC(1, chA[0], "nd"), ""),
					pl = o.plyrv ? _tv_C.cS(o.plyrv, ";") : "",
					D = o.device;
				pl = ((pl.substring(0, 1)).toUpperCase() + pl.substring(1)) + " Player" + (_tv_TTV.vB(o.ispip) ? " PIP" : "");
				if (gaTerraS) {
					gaTerraS("send", "event", "streaming", "stop", unescape(o.contenttitle), { /*"page":_tv_C.tL("/"+(chA[0]).substring(0,2)+"/"+c+"/"+chA[1]+"/"+chA[2]+"/"+id+"/"+cd+"/"+O.type+"/"+O.id),"title":_tv_TTV.pN,*/
						"dimension1": chA[1],
						"dimension2": chA[2],
						"dimension3": cd,
						"dimension4": o.category,
						"dimension5": id,
						"dimension9": "terra",
						"dimension13": "streaming-client-side",
						"dimension15": chA[0],
						"dimension20": _tv_C.s,
						"dimension22": D == 2 ? "tablet" : (D == 3 ? "device" : (D == 5 ? "mobile-vas" : (D == 6 ? "mobile" : "desktop"))),
						"dimension26": _tv_TTV.pN,
						"dimension27": t,
						"dimension28": (_tv_TTV.vB(o.ispreroll) ? "Advertising" : (_tv_TTV.vB(o.islive) ? "Live" : "On Demand")),
						"dimension29": unescape(o.contentproviderid + "|" + o.contentprovidertitle),
						"dimension30": unescape(o.sourceid + "|" + o.sourcetitle),
						"dimension31": o.origin,
						"dimension32": typeof e == _tv_U ? "Unspecified" : (_tv_TTV.vB(e) ? "Embeded" : "Not Embeded"),
						"dimension33": pl,
                        "metric1": o.watingTime,
					    "dimension53": o.creativeId,
                        "dimension54": o.wrapperAdSystem,
                        "dimension55": o.wrapperId,
                        "dimension56": o.adCount
					});
				}
				oc.notify(oc.StreamSense.PlayerEvents.END, {
					ns_st_pe: 1
				}, cp * 1000);
				if (o.country == "es") {
					_tv_IBP.gg1.ggPM(7, cp);
				}
				return null;
			}
		},
		uV: function(o, oc) {
			var t = unescape(o.contentid + "|" + o.contenttitle),
				ch = _tv_C.cC(o.country + "." + unescape(o.uvsystem)),
				id = o.uvsystemid,
				cd = unescape(o.uvtag),
				e = o.isembeded,
				cp = Math.round(o.position),
				p = 300,
				v = "view-",
				V, D = o.device;
			var chA = ch.split(".");
			var cc = _tv_C.vCC(0, _tv_C.vCC(1, chA[0], "nd"), ""),
				pl = o.plyrv ? _tv_C.cS(o.plyrv, ";") : "";
			pl = ((pl.substring(0, 1)).toUpperCase() + pl.substring(1)) + " Player" + (_tv_TTV.vB(o.ispip) ? " PIP" : "");
			if (_tv_TTV.vB(o.islive)) {
				if (cp > 21600) {
					cp = 21600;
				}
			} else if (cp > 14400) {
				cp = 14400;
			}
			if (cp >= o.regpos) {
				if (cp >= 10 && o.regpos == 0) {
					v += "10s";
					o.regpos = 30;
				} else if (cp >= 30 && o.regpos == 30) {
					v += "30s";
					o.regpos = 60;
				} else if (cp >= 60 && o.regpos == 60) {
					v += "1m";
					o.regpos = p;
				} else if (cp >= p) {
					V = Math.floor(cp / p);
					v += (V * 5) + "m";
					o.regpos = (V + 1) * p;
				}
				if (gaTerraS && v != "view-") {
					gaTerraS("send", "event", "streaming", v, unescape(o.contenttitle), { /*"page":_tv_C.tL("/"+(chA[0]).substring(0,2)+"/"+c+"/"+chA[1]+"/"+chA[2]+"/"+id+"/"+cd+"/"+O.type+"/"+O.id),"title":_tv_TTV.pN,*/
						"dimension1": chA[1],
						"dimension2": chA[2],
						"dimension3": cd,
						"dimension4": o.category,
						"dimension5": id,
						"dimension9": "terra",
						"dimension13": "streaming-client-side",
						"dimension15": chA[0],
						"dimension20": _tv_C.s,
						"dimension22": D == 2 ? "tablet" : (D == 3 ? "device" : (D == 5 ? "mobile-vas" : (D == 6 ? "mobile" : "desktop"))),
						"dimension26": _tv_TTV.pN,
						"dimension27": t,
						"dimension28": (_tv_TTV.vB(o.ispreroll) ? "Advertising" : (_tv_TTV.vB(o.islive) ? "Live" : "On Demand")),
						"dimension29": unescape(o.contentproviderid + "|" + o.contentprovidertitle),
						"dimension30": unescape(o.sourceid + "|" + o.sourcetitle),
						"dimension31": o.origin,
						"dimension32": typeof e == _tv_U ? "Unspecified" : (_tv_TTV.vB(e) ? "Embeded" : "Not Embeded"),
						"dimension33": pl,
                        "metric1": o.watingTime,
					    "dimension53": o.creativeId,
                        "dimension54": o.wrapperAdSystem,
                        "dimension55": o.wrapperId,
                        "dimension56": o.adCount
					});
				}
			}
		},
		rVA: function() {
			var i = 1;
			for (i; i <= _tv_m.length - 1; i++) {
				_tv_m[i] = _tv_m[i] ? _tv_TTV.rVF(_tv_v[i], _tv_m[i], _tv_c[i]) : _tv_m[i];
			}
		},
		rVC: function(e, o, ov) {
			function df(s) {
				return {
					mediaurl: "",
					plyrv: "",
					filename: "",
					contentid: 0,
					duration: 0,
					position: 0,
					regpos: 0,
					timeout: "",
					contenttitle: "",
					category: "entretenimiento_digital_tv",
					uvsystem: "",
					uvsystemid: 0,
					uvtag: "",
					sourceid: 0,
					sourcetitle: "",
					isembeded: 0,
					ispreroll: 0,
					islive: 0,
					isadult: 0,
					isclosed: 0,
					iswide: 0,
					isrelated: 0,
					ispip: 0,
					contentproviderid: 0,
					contentprovidertitle: "",
					country: "",
					countryR: "",
					device: 0,
					plt: "",
					contentthumb: "",
					referrer: "",
					origin: "",
					minbitrate: 0,
					bitrate: 0,
					maxbitrate: 0,
					bitrateswitches: 0,
					bufferingcount: 0,
					bufferingtimefirst: 0,
					bufferingtimetotal: 0,
					minbandwidth: 0,
					maxbandwidth: 0,
					avgbandwidth: 0,
					availbandwidth: 0
				}
			}
			switch (e) {
				case 1:
					ov = df();
					ov.mediaurl = o.mediaurl ? o.mediaurl : "";
					ov.plyrv = o.plyrv ? o.plyrv : "";
					ov.filename = o.filename ? o.filename : "";
					ov.contentid = o.contentid ? o.contentid : 0;
					ov.duration = o.duration ? o.duration <= 0 ? 1 : o.duration : 1;
					ov.position = o.position ? o.position : 0;
					ov.regpos = o.regpos ? o.regpos : 0;
					ov.timeout = o.timeout ? o.timeout : "";
					ov.contenttitle = o.contenttitle ? o.contenttitle : 0;
					ov.category = o.category ? o.category : "entretenimiento_digital_tv";
					ov.uvsystem = o.uvsystem ? o.uvsystem : "";
					ov.uvsystemid = o.uvsystemid ? o.uvsystemid : 0;
					ov.uvtag = o.uvtag ? o.uvtag : "";
					ov.sourceid = o.sourceid ? o.sourceid : 0;
					ov.sourcetitle = o.sourcetitle ? o.sourcetitle : "";
					ov.isembeded = o.isembeded ? o.isembeded : 0;
					ov.ispreroll = o.ispreroll ? o.ispreroll : 0;
					ov.islive = o.islive ? o.islive : 0;
					ov.isadult = o.isadult ? o.isadult : 0;
					ov.isclosed = o.isclosed ? o.isclosed : 0;
					ov.iswide = o.iswide ? o.iswide : 0;
					ov.isrelated = o.isrelated ? o.isrelated : 0;
					ov.ispip = o.ispip ? o.ispip : 0;
					ov.contentproviderid = o.contentproviderid ? o.contentproviderid : 0;
					ov.contentprovidertitle = o.contentprovidertitle ? o.contentprovidertitle : "";
					ov.country = _tv_C.vCC(1, o.country, "nd");
					ov.countryR = _tv_C.vCC(0, ov.country, "nd");
					ov.device = o.device ? o.device : 0;
					ov.plt = ov.device == 2 ? "tablet." : (ov.device == 3 ? "connecteddevices." : (ov.device == 5 ? "mvas." : (ov.device == 6 ? "m." : "")));
					ov.contentthumb = o.contentthumb ? o.contentthumb : "";
					ov.referrer = o.referrer ? o.referrer : "";
					ov.origin = o.origin ? o.origin : "";					
					ov.watingTime = o.watingTime ? o.watingTime : 0;
                    ov.creativeId = o.creativeId ? o.creativeId : "";
					ov.wrapperAdSystem = o.wrapperAdSystem ? o.wrapperAdSystem : "";
					ov.wrapperId = o.wrapperId ? o.wrapperId : "";
					ov.adCount = o.adCount ? o.adCount : 0;

                    try{
                        ov.watingTime = parseInt(ov.watingTime);

                        if(ov.watingTime < 0){
                            ov.watingTime = 0;
                        }
                    }catch(e){
                        ov.watingTime = 0;
                    }
				case 2:
					ov.position = o.position ? o.position : ov.position > 0 ? ov.position : 0;
					ov.minbitrate = o.minbitrate ? o.minbitrate : 0;
					ov.bitrate = o.bitrate ? o.bitrate : 0;
					ov.maxbitrate = o.maxbitrate ? o.maxbitrate : 0;
					ov.bitrateswitches = o.bitrateswitches ? o.bitrateswitches : 0;
					ov.bufferingcount = o.bufferingcount ? o.bufferingcount : 0;
					ov.bufferingtimefirst = o.bufferingtimefirst ? o.bufferingtimefirst : 0;
					ov.bufferingtimetotal = o.bufferingtimetotal ? o.bufferingtimetotal : 0;
					ov.minbandwidth = o.minbandwidth ? o.minbandwidth : 0;
					ov.maxbandwidth = o.maxbandwidth ? o.maxbandwidth : 0;
					ov.avgbandwidth = o.avgbandwidth ? o.avgbandwidth : 0;
					ov.availbandwidth = o.availbandwidth ? o.availbandwidth : 0;
			}
			return ov;
		},
		oMC: function(n, o) {
			_tv_m[n] = 1;
			_tv_c[n] = _tv_CS();
			_tv_c[n].StreamSense({}, (_tv_C.pt == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/p?c1=2&c2=3000033&ns_site=terra-" + o.country);
			_tv_c[n].setPlaylist({
				ns_st_pl: "Video Player " + n
			});
		}
	};

	function terra_stats_nTTV(e, o, n) {
		if (o.contentid && (o.contentid == 422436 || o.contentid == 404692)) {
			return;
		}
		var cc = _tv_TTV.c ? _tv_TTV.c : (o.country + "");
		n = _tv_C.cV(n, 0);
		switch (e) {
			case 1:
				if (_tv_m[n]) {
					if (_tv_v[n].contentid != o.contentid) {
						terra_stats_nTTV(2, o, n);
						terra_stats_nTTV(1, o, n);
					}
				} else {
					_tv_v[n] = _tv_TTV.rVC(1, o, _tv_v[n]);
					_tv_TTV.oMC(n, _tv_v[n]);
					_tv_TTV.rVI(_tv_v[n], _tv_c[n]);
				}
				break;
			case 2:
				if (_tv_m[n]) {
					_tv_v[n] = _tv_TTV.rVC(2, o, _tv_v[n]);
					_tv_m[n] = _tv_TTV.rVF(_tv_v[n], _tv_m[n], _tv_c[n]);
				}
				break;
			case 3:
				if (_tv_m[n]) {
					_tv_v[n].position = o.position ? Math.round(o.position) : _tv_v[n].position > 0 ? _tv_v[n].position : 0;
					_tv_TTV.uV(_tv_v[n], _tv_c[n]);
				}
				break;
			case 4:
				if (_tv_m[n]) {
					_tv_TTV.rVE(o, _tv_v[n]);
				}
				break;
			case 5:
				_tv_v[n] = _tv_TTV.rVC(1, o, _tv_v[n]);
				_tv_TTV.rVI(_tv_v[n], {});
		}
		return 1;
	};
	_tv_C.iM();
	try {
		if (window != window.top) {
			_tv_C.aE(window, "beforeunload", _tv_TTV.rVA);
		} else {
			_tv_C.aE(window, "unload", _tv_TTV.rVA);
		}
	} catch (e) {
		_tv_C.aE(window, "unload", _tv_TTV.rVA);
	}
}
var _tv_v = new Array(),
	_tv_m = new Array(),
	_tv_c = new Array(),
	_tv_CA = new Array();
_tv_CA["ar"] = "com.ar";
_tv_CA["br"] = "com.br";
_tv_CA["cl"] = "cl";
_tv_CA["co"] = "com.co";
_tv_CA["ec"] = "com.ec";
_tv_CA["en"] = "com";
_tv_CA["es"] = "es";
_tv_CA["mx"] = "com.mx";
_tv_CA["pe"] = "com.pe";
_tv_CA["us"] = "com";
_tv_CA["ve"] = "com.ve";
_tv_CA["--"] = "com";
_tv_CA["cr"] = "com.cr";
_tv_CA["do"] = "com.do";
_tv_CA["gt"] = "com.gt";
_tv_CA["hn"] = "com.hn";
_tv_CA["ni"] = "com.ni";
_tv_CA["pa"] = "com.pa";
_tv_CA["sv"] = "com.sv";
_tv_CA["uy"] = "com.uy";
var _tv_CS = function() {
	var ns_ = ns_ || {};
	ns_.StreamSense = ns_.StreamSense || function() {
		function e(e, t) {
			var n = new Image;
			n.src = e, t && setTimeout(t, 0)
		}

		function t(e, t, n) {
			n && setTimeout(n, 0)
		}

		function n(t, n) {
			var r = t || "",
				s = i,
				o = "undefined",
				u = window.comScore || window.sitestat || function(t) {
					var n = "comScore=",
						r = document,
						i = r.cookie,
						s = "",
						u = "indexOf",
						a = "substring",
						f = "length",
						l = 2048,
						c, h = "&ns_",
						p = "&",
						d, v, m, g, y = window,
						b = y.encodeURIComponent || escape;
					if (i[u](n) + 1)
						for (m = 0, v = i.split(";"), g = v[f]; m < g; m++) d = v[m][u](n), d + 1 && (s = p + unescape(v[m][a](d + n[f])));
					t += h + "_t=" + +(new Date) + h + "c=" + (r.characterSet || r.defaultCharset || "") + "&c8=" + b(r.title) + s + "&c7=" + b(r.URL) + "&c9=" + b(r.referrer), t[f] > l && t[u](p) > 0 && (c = t[a](0, l - 8).lastIndexOf(p), t = (t[a](0, c) + h + "cut=" + b(t[a](c + 1)))[a](0, l)), e(t), typeof ns_p === o && (ns_p = {
						src: t
					}), ns_p.lastMeasurement = t
				};
			if (typeof n !== o) {
				var a = [],
					f = window.encodeURIComponent || escape;
				for (var l in n) n.hasOwnProperty(l) && a.push(f(l) + "=" + f(n[l]));
				r += "&" + a.join("&")
			}
			return u(r)
		}

		function r(e, t) {
			var n, r = 2048,
				i = document,
				s = window,
				o = s.encodeURIComponent || escape,
				u = [],
				f = a.LABELS_ORDER,
				l = e.split("?"),
				c = l[0],
				h = l[1],
				p = h.split("&");
			for (var d = 0, v = p.length; d < v; d++) {
				var m = p[d].split("="),
					g = unescape(m[0]),
					y = unescape(m[1]);
				t[g] = y
			}
			var b = {};
			for (var d = 0, v = f.length; d < v; d++) {
				var w = f[d];
				t.hasOwnProperty(w) && (b[w] = !0, u.push(o(w) + "=" + o(t[w])))
			}
			for (var w in t) {
				if (b[w]) continue;
				t.hasOwnProperty(w) && u.push(o(w) + "=" + o(t[w]))
			}
			return n = c + "?" + u.join("&"), n = n + (n.indexOf("&c8=") < 0 ? "&c8=" + o(i.title) : "") + (n.indexOf("&c7=") < 0 ? "&c7=" + o(i.URL) : "") + (n.indexOf("&c9=") < 0 ? "&c9=" + o(i.referrer) : ""), n.length > r && n.indexOf("&") > 0 && (last = n.substr(0, r - 8).lastIndexOf("&"), n = (n.substring(0, last) + "&ns_cut=" + o(n.substring(last + 1))).substr(0, r)), n
		}
		var i = function() {
				var e = {
					uid: function() {
						var e = 1;
						return function() {
							return +(new Date) + "_" + e++
						}
					}(),
					filter: function(e, t) {
						var n = {};
						for (var r in t) t.hasOwnProperty(r) && e(t[r]) && (n[r] = t[r]);
						return n
					},
					extend: function(e) {
						var t = arguments.length,
							n;
						e = e || {};
						for (var r = 1; r < t; r++) {
							n = arguments[r];
							if (!n) continue;
							for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i])
						}
						return e
					},
					getLong: function(e, t) {
						var n = Number(e);
						return e == null || isNaN(n) ? t || 0 : n
					},
					getInteger: function(e, t) {
						var n = Number(e);
						return e == null || isNaN(n) ? t || 0 : n
					},
					getBoolean: function(e, t) {
						var n = String(e).toLowerCase() == "true";
						return e == null ? t || !1 : n
					},
					isNotEmpty: function(e) {
						return e != null && e.length > 0
					},
					regionMatches: function(e, t, n, r, i) {
						if (t < 0 || r < 0 || t + i > e.length || r + i > n.length) return !1;
						while (--i >= 0) {
							var s = e.charAt(t++),
								o = n.charAt(r++);
							if (s != o) return !1
						}
						return !0
					}
				};
				return e.filterMap = function(e, t) {
					for (var n in e) t.indexOf(n) == -1 && delete e[n]
				}, e
			}(),
			s = function() {
				var e = ["play", "pause", "end", "buffer", "keep-alive", "hb", "custom", "ad_play", "ad_pause", "ad_end", "ad_click"];
				return {
					PLAY: 0,
					PAUSE: 1,
					END: 2,
					BUFFER: 3,
					KEEP_ALIVE: 4,
					HEART_BEAT: 5,
					CUSTOM: 6,
					AD_PLAY: 7,
					AD_PAUSE: 8,
					AD_END: 9,
					AD_CLICK: 10,
					toString: function(t) {
						return e[t]
					}
				}
			}(),
			o = function() {
				var e = [s.END, s.PLAY, s.PAUSE, s.BUFFER];
				return {
					IDLE: 0,
					PLAYING: 1,
					PAUSED: 2,
					BUFFERING: 3,
					toEventType: function(t) {
						return e[t]
					}
				}
			}(),
			u = {
				ADPLAY: s.AD_PLAY,
				ADPAUSE: s.AD_PAUSE,
				ADEND: s.AD_END,
				ADCLICK: s.AD_CLICK
			},
			a = {
				STREAMSENSE_VERSION: "4.1309.13",
				STREAMSENSEMEDIAPLAYER_VERSION: "4.1309.13",
				STREAMSENSEVIDEOVIEW_VERSION: "4.1309.13",
				DEFAULT_HEARTBEAT_INTERVAL: [{
					playingtime: 6e4,
					interval: 1e4
				}, {
					playingtime: null,
					interval: 6e4
				}],
				KEEP_ALIVE_PERIOD: 12e5,
				PAUSED_ON_BUFFERING_PERIOD: 500,
				PAUSE_PLAY_SWITCH_DELAY: 500,
				DEFAULT_PLAYERNAME: "streamsense",
				C1_VALUE: "19",
				C10_VALUE: "js",
				NS_AP_C12M_VALUE: "1",
				NS_NC_VALUE: "1",
				PAGE_NAME_LABEL: "name",
				LABELS_ORDER: ["c1", "c2", "ns_site", "ns_vsite", "ns_ap_an", "ns_ap_pn", "ns_ap_pv", "c12", "name", "ns_ak", "ns_ap_ec", "ns_ap_ev", "ns_ap_device", "ns_ap_id", "ns_ap_csf", "ns_ap_bi", "ns_ap_pfm", "ns_ap_pfv", "ns_ap_ver", "ns_ap_sv", "ns_type", "ns_radio", "ns_nc", "ns_ap_ui", "ns_ap_gs", "ns_st_sv", "ns_st_pv", "ns_st_it", "ns_st_id", "ns_st_ec", "ns_st_sp", "ns_st_sq", "ns_st_cn", "ns_st_ev", "ns_st_po", "ns_st_cl", "ns_st_el", "ns_st_pb", "ns_st_hc", "ns_st_mp", "ns_st_mv", "ns_st_pn", "ns_st_tp", "ns_st_pt", "ns_st_pa", "ns_st_ad", "ns_st_li", "ns_st_ci", "ns_ap_jb", "ns_ap_res", "ns_ap_c12m", "ns_ap_install", "ns_ap_updated", "ns_ap_lastrun", "ns_ap_cs", "ns_ap_runs", "ns_ap_usage", "ns_ap_fg", "ns_ap_ft", "ns_ap_dft", "ns_ap_bt", "ns_ap_dbt", "ns_ap_dit", "ns_ap_as", "ns_ap_das", "ns_ap_it", "ns_ap_uc", "ns_ap_aus", "ns_ap_daus", "ns_ap_us", "ns_ap_dus", "ns_ap_ut", "ns_ap_oc", "ns_ap_uxc", "ns_ap_uxs", "ns_ap_lang", "ns_ap_miss", "ns_ts", "ns_st_ca", "ns_st_cp", "ns_st_er", "ns_st_pe", "ns_st_ui", "ns_st_bc", "ns_st_bt", "ns_st_bp", "ns_st_pc", "ns_st_pp", "ns_st_br", "ns_st_ub", "ns_st_vo", "ns_st_ws", "ns_st_pl", "ns_st_pr", "ns_st_ep", "ns_st_ty", "ns_st_cs", "ns_st_ge", "ns_st_st", "ns_st_dt", "ns_st_ct", "ns_st_de", "ns_st_pu", "ns_st_cu", "ns_st_fee", "c7", "c8", "c9"]
			},
			f = function() {
				var e = function() {
					function h(e, t) {
						var n = t[e];
						n != null && (c[e] = n)
					}
					var e = this,
						t = 0,
						n = 0,
						r = 0,
						u = 0,
						a = 0,
						f = 0,
						l, c;
					i.extend(this, {
						reset: function(t) {
							t != null && t.length > 0 ? i.filterMap(c, t) : c = {}, c.ns_st_cl = "0", c.ns_st_pn = "1", c.ns_st_tp = "1", e.setClipId("1"), e.setPauses(0), e.setStarts(0), e.setBufferingTime(0), e.setBufferingTimestamp(-1), e.setPlaybackTime(0), e.setPlaybackTimestamp(-1)
						},
						setLabels: function(t, n) {
							t != null && i.extend(c, t), e.setRegisters(c, n)
						},
						getLabels: function() {
							return c
						},
						setLabel: function(t, n) {
							var r = {};
							r[t] = n, e.setLabels(r, null)
						},
						getLabel: function(e) {
							return c[e]
						},
						getClipId: function() {
							return l
						},
						setClipId: function(e) {
							l = e
						},
						setRegisters: function(e, i) {
							var s = e.ns_st_cn;
							s != null && (l = s, delete e.ns_st_cn), s = e.ns_st_bt, s != null && (r = Number(s), delete e.ns_st_bt), h("ns_st_cl", e), h("ns_st_pn", e), h("ns_st_tp", e), h("ns_st_ub", e), h("ns_st_br", e);
							if (i == o.PLAYING || i == null) s = e.ns_st_sq, s != null && (n = Number(s), delete e.ns_st_sq);
							i != o.BUFFERING && (s = e.ns_st_pt, s != null && (a = Number(s), delete e.ns_st_pt));
							if (i == o.PAUSED || i == o.IDLE || i == null) s = e.ns_st_pc, s != null && (t = Number(s), delete e.ns_st_pc)
						},
						createLabels: function(r, o) {
							var u = o || {};
							u.ns_st_cn = e.getClipId(), u.ns_st_bt = String(e.getBufferingTime());
							if (r == s.PLAY || r == null) u.ns_st_sq = String(n);
							if (r == s.PAUSE || r == s.END || r == s.KEEP_ALIVE || r == s.HEART_BEAT || r == null) u.ns_st_pt = String(e.getPlaybackTime()), u.ns_st_pc = String(t);
							return i.extend(u, e.getLabels()), u
						},
						incrementPauses: function() {
							t++
						},
						incrementStarts: function() {
							n++
						},
						getBufferingTime: function() {
							var e = r;
							return u >= 0 && (e += +(new Date) - u), e
						},
						setBufferingTime: function(e) {
							r = e
						},
						getPlaybackTime: function() {
							var e = a;
							return f >= 0 && (e += +(new Date) - f), e
						},
						setPlaybackTime: function(e) {
							a = e
						},
						getPlaybackTimestamp: function() {
							return f
						},
						setPlaybackTimestamp: function(e) {
							f = e
						},
						getBufferingTimestamp: function() {
							return u
						},
						setBufferingTimestamp: function(e) {
							u = e
						},
						getPauses: function() {
							return t
						},
						setPauses: function(e) {
							t = e
						},
						getStarts: function() {
							return n
						},
						setStarts: function(e) {
							n = e
						}
					}), c = {}, e.reset()
				};
				return e
			}(),
			l = function() {
				var e = function() {
					var e = this,
						t = null,
						n, r = 0,
						u = 0,
						a = 0,
						l = 0,
						c = 0,
						h, p = 0,
						d = !1;
					i.extend(this, {
						reset: function(t) {
							t != null && t.length > 0 ? i.filterMap(h, t) : h = {}, e.setPlaylistId(+(new Date) + "_" + p), e.setBufferingTime(0), e.setPlaybackTime(0), e.setPauses(0), e.setStarts(0), e.setRebufferCount(0), d = !1
						},
						setLabels: function(t, n) {
							t != null && i.extend(h, t), e.setRegisters(h, n)
						},
						getLabels: function() {
							return h
						},
						setLabel: function(t, n) {
							var r = {};
							r[t] = n, e.setLabels(r, null)
						},
						getLabel: function(e) {
							return h[e]
						},
						getClip: function() {
							return t
						},
						getPlaylistId: function() {
							return n
						},
						setPlaylistId: function(e) {
							n = e
						},
						setRegisters: function(e, t) {
							var i = e.ns_st_sp;
							i != null && (r = Number(i), delete e.ns_st_sp), i = e.ns_st_bc, i != null && (a = Number(i), delete e.ns_st_bc), i = e.ns_st_bp, i != null && (l = Number(i), delete e.ns_st_bp), i = e.ns_st_id, i != null && (n = i, delete e.ns_st_id), t != o.BUFFERING && (i = e.ns_st_pa, i != null && (c = Number(i), delete e.ns_st_pa));
							if (t == o.PAUSED || t == o.IDLE || t == null) i = e.ns_st_pp, i != null && (u = Number(i), delete e.ns_st_pp)
						},
						createLabels: function(t, o) {
							var f = o || {};
							f.ns_st_bp = String(e.getBufferingTime()), f.ns_st_sp = String(r), f.ns_st_id = String(n), a > 0 && (f.ns_st_bc = String(a));
							if (t == s.PAUSE || t == s.END || t == s.KEEP_ALIVE || t == s.HEART_BEAT || t == null) f.ns_st_pa = String(e.getPlaybackTime()), f.ns_st_pp = String(u);
							if (t == s.PLAY || t == null) e.didFirstPlayOccurred() || (f.ns_st_pb = "1", e.setFirstPlayOccurred(!0));
							return i.extend(f, e.getLabels()), f
						},
						incrementStarts: function() {
							r++
						},
						incrementPauses: function() {
							u++, t.incrementPauses()
						},
						setPlaylistCounter: function(e) {
							p = e
						},
						incrementPlaylistCounter: function() {
							p++
						},
						addPlaybackTime: function(n) {
							if (t.getPlaybackTimestamp() >= 0) {
								var r = n - t.getPlaybackTimestamp();
								t.setPlaybackTimestamp(-1), t.setPlaybackTime(t.getPlaybackTime() + r), e.setPlaybackTime(e.getPlaybackTime() + r)
							}
						},
						addBufferingTime: function(n) {
							if (t.getBufferingTimestamp() >= 0) {
								var r = n - t.getBufferingTimestamp();
								t.setBufferingTimestamp(-1), t.setBufferingTime(t.getBufferingTime() + r), e.setBufferingTime(e.getBufferingTime() + r)
							}
						},
						getBufferingTime: function() {
							var e = l;
							return t.getBufferingTimestamp() >= 0 && (e += +(new Date) - t.getBufferingTimestamp()), e
						},
						setBufferingTime: function(e) {
							l = e
						},
						getPlaybackTime: function() {
							var e = c;
							return t.getPlaybackTimestamp() >= 0 && (e += +(new Date) - t.getPlaybackTimestamp()), e
						},
						setPlaybackTime: function(e) {
							c = e
						},
						getStarts: function() {
							return r
						},
						setStarts: function(e) {
							r = e
						},
						getPauses: function() {
							return u
						},
						setPauses: function(e) {
							u = e
						},
						getRebufferCount: function() {
							return a
						},
						incrementRebufferCount: function() {
							a++
						},
						setRebufferCount: function(e) {
							a = e
						},
						didFirstPlayOccurred: function() {
							return d
						},
						setFirstPlayOccurred: function(e) {
							d = e
						}
					}), t = new f, h = {}, e.reset()
				};
				return e
			}(),
			c = function() {
				var t = function(t, u) {
					function B(e) {
						N = e
					}

					function j(e) {
						var t = 0;
						if (N != null)
							for (var n = 0; n < N.length; n++) {
								var r = N[n],
									i = r.playingtime;
								if (!i || e < i) {
									t = r.interval;
									break
								}
							}
						return t
					}

					function F() {
						U();
						var e = j(g.getClip().getPlaybackTime());
						if (e > 0) {
							var t = C > 0 ? C : e;
							T = setTimeout(R, t)
						}
						C = 0
					}

					function I() {
						U();
						var e = j(g.getClip().getPlaybackTime());
						C = e - g.getClip().getPlaybackTime() % e, T != null && U()
					}

					function q() {
						C = 0, L = 0, k = 0
					}

					function R() {
						k++;
						var e = ct(s.HEART_BEAT, null);
						et(e), C = 0, F()
					}

					function U() {
						T != null && (clearTimeout(T), T = null)
					}

					function z() {
						X(), S = setTimeout(W, a.KEEP_ALIVE_PERIOD)
					}

					function W() {
						var e = ct(s.KEEP_ALIVE, null);
						et(e), m++, z()
					}

					function X() {
						S != null && (clearTimeout(S), S = null)
					}

					function V() {
						J(), f.isPauseOnBufferingEnabled() && st(o.PAUSED) && (w = setTimeout($, a.PAUSED_ON_BUFFERING_PERIOD))
					}

					function $() {
						if (O == o.PLAYING) {
							g.incrementRebufferCount(), g.incrementPauses();
							var e = ct(s.PAUSE, null);
							et(e), m++, O = o.PAUSED
						}
					}

					function J() {
						w != null && (clearTimeout(w), w = null)
					}

					function K() {
						x != null && (clearTimeout(x), x = null)
					}

					function Q(e) {
						return e == o.PLAYING || e == o.PAUSED
					}

					function G(e) {
						return e == s.PLAY ? o.PLAYING : e == s.PAUSE ? o.PAUSED : e == s.BUFFER ? o.BUFFERING : e == s.END ? o.IDLE : null
					}

					function Y(e, t, n) {
						K();
						if (at(e))
							if (n) setTimeout(function() {
								Y(e, t)
							}, n);
							else {
								var r = lt(),
									s = p,
									u = ut(t),
									a = s >= 0 ? u - s : 0;
								rt(lt(), t), it(e, t), ft(e);
								for (var f = 0, l = P.length; f < l; f++) P[f](r, e, t, a);
								Z(t), g.setRegisters(t, e), g.getClip().setRegisters(t, e);
								var c = ct(o.toEventType(e), t);
								i.extend(c, t), st(v) && (et(c), O = v, m++)
							}
					}

					function Z(e) {
						var t = e.ns_st_mp;
						t != null && (M = t, delete e.ns_st_mp), t = e.ns_st_mv, t != null && (_ = t, delete e.ns_st_mv), t = e.ns_st_ec, t != null && (m = Number(t), delete e.ns_st_ec)
					}

					function et(t, n) {
						n === undefined && (n = !0), n && nt(t);
						var i = f.getPixelURL();
						if (y) {
							if (!tt()) {
								var s = H.am,
									o = H.et,
									u = s.newApplicationMeasurement(y, o.HIDDEN, t, i);
								y.getQueue().offer(u)
							}
						} else i && e(r(i, t))
					}

					function tt() {
						var e = y.getAppContext(),
							t = y.getSalt(),
							n = y.getPixelURL();
						return e == null || t == null || t.length == 0 || n == null || n.length == 0
					}

					function nt(e) {
						D = ct(null), i.extend(D, e)
					}

					function rt(e, t) {
						var n = ut(t);
						e == o.PLAYING ? (g.addPlaybackTime(n), I(), X()) : e == o.BUFFERING && (g.addBufferingTime(n), J())
					}

					function it(e, t) {
						var n = ut(t),
							r = ot(t);
						d = r, e == o.PLAYING ? (F(), z(), g.getClip().setPlaybackTimestamp(n), st(e) && (g.getClip().incrementStarts(), g.getStarts() < 1 && g.setStarts(1))) : e == o.PAUSED ? st(e) && g.incrementPauses() : e == o.BUFFERING ? (g.getClip().setBufferingTimestamp(n), E && V()) : e == o.IDLE && q()
					}

					function st(e) {
						return e != o.PAUSED || O != o.IDLE && O != null ? e != o.BUFFERING && O != e : !1
					}

					function ot(e) {
						var t = -1;
						return e.hasOwnProperty("ns_st_po") && (t = Number(e.ns_st_po)), t
					}

					function ut(e) {
						var t = -1;
						return e.hasOwnProperty("ns_ts") && (t = Number(e.ns_ts)), t
					}

					function at(e) {
						return e != null && lt() != e
					}

					function ft(e) {
						v = e, p = +(new Date)
					}

					function lt() {
						return v
					}

					function ct() {
						var e, t;
						arguments.length == 1 ? (e = o.toEventType(v), t = arguments[0]) : (e = arguments[0], t = arguments[1]);
						var n = {};
						return t != null && i.extend(n, t), n.hasOwnProperty("ns_ts") || (n.ns_ts = String(+(new Date))), e != null && !n.hasOwnProperty("ns_st_ev") && (n.ns_st_ev = s.toString(e)), f.isPersistentLabelsShared() && y && i.extend(n, y.getLabels()), i.extend(n, f.getLabels()), ht(e, n), g.createLabels(e, n), g.getClip().createLabels(e, n), n.hasOwnProperty("ns_st_mp") || (n.ns_st_mp = M), n.hasOwnProperty("ns_st_mv") || (n.ns_st_mv = _), n.hasOwnProperty("ns_st_ub") || (n.ns_st_ub = "0"), n.hasOwnProperty("ns_st_br") || (n.ns_st_br = "0"), n.hasOwnProperty("ns_st_pn") || (n.ns_st_pn = "1"), n.hasOwnProperty("ns_st_tp") || (n.ns_st_tp = "1"), n.hasOwnProperty("ns_st_it") || (n.ns_st_it = "c"), n.ns_st_sv = a.STREAMSENSE_VERSION, n.ns_type = "hidden", n
					}

					function ht(e, t) {
						var n = t || {};
						n.ns_st_ec = String(m);
						if (!n.hasOwnProperty("ns_st_po")) {
							var r = d,
								i = ut(n);
							if (e == s.PLAY || e == s.KEEP_ALIVE || e == s.HEART_BEAT || e == null && v == o.PLAYING) r += i - g.getClip().getPlaybackTimestamp();
							n.ns_st_po = String(r)
						}
						return e == s.HEART_BEAT && (n.ns_st_hc = String(k)), n
					}

					function pt(e) {
						var t = ut(e);
						t < 0 && (e.ns_ts = String(+(new Date)))
					}

					function dt(e, t, n) {
						t = t || {}, t.ns_st_ad = 1, e >= s.AD_PLAY && e <= s.AD_CLICK && f.notify(e, t, n)
					}

					function vt(e, t) {
						f.notify(s.CUSTOM, e, t)
					}
					var f = this,
						c, h = null,
						p = 0,
						d = 0,
						v, m = 0,
						g = null,
						y, b = !0,
						w, E = !0,
						S, x, T, N = a.DEFAULT_HEARTBEAT_INTERVAL,
						C = 0,
						k = 0,
						L = 0,
						A = !1,
						O, M, _, D, P, H = {};
					i.extend(this, {
						reset: function(e) {
							g.reset(e), g.setPlaylistCounter(0), g.setPlaylistId(+(new Date) + "_1"), g.getClip().reset(e), e != null && !e.isEmpty() ? i.filterMap(c, e) : c = {}, m = 1, k = 0, I(), q(), X(), J(), K(), v = o.IDLE, p = -1, O = null, M = a.DEFAULT_PLAYERNAME, _ = a.STREAMSENSE_VERSION, D = null
						},
						notify: function() {
							var e, t, n, r;
							t = arguments[0], arguments.length == 3 ? (n = arguments[1], r = arguments[2]) : (n = {}, r = arguments[1]), e = G(t);
							var o = i.extend({}, n);
							pt(o), o.hasOwnProperty("ns_st_po") || (o.ns_st_po = String(r));
							if (t == s.PLAY || t == s.PAUSE || t == s.BUFFER || t == s.END) f.isPausePlaySwitchDelayEnabled() && at(e) && Q(v) && Q(e) ? Y(e, o, a.PAUSE_PLAY_SWITCH_DELAY) : Y(e, o);
							else {
								var u = ct(t, o);
								i.extend(u, o), et(u, !1), m++
							}
						},
						getLabels: function() {
							return c
						},
						setLabels: function(e) {
							e != null && (c == null ? c = e : i.extend(c, e))
						},
						getLabel: function(e) {
							return c[e]
						},
						setLabel: function(e, t) {
							t == null ? delete c[e] : c[e] = t
						},
						setPixelURL: function(e) {
							if (e == null || e.length == 0) return null;
							var t = e.indexOf("?");
							if (t >= 0) {
								if (t < e.length - 1) {
									var n = e.substring(t + 1).split("&");
									for (var r = 0, i = n.length; r < i; r++) {
										var s = n[r],
											o = s.split("=");
										o.length == 2 ? f.setLabel(o[0], o[1]) : o.length == 1 && f.setLabel(a.PAGE_NAME_LABEL, o[0])
									}
									e = e.substring(0, t + 1)
								}
							} else e += "?";
							return h = e, h
						},
						getPixelURL: function() {
							return h ? h : typeof ns_p != "undefined" && typeof ns_p.src == "string" ? h = ns_p.src.replace(/&amp;/, "&").replace(/&ns__t=\d+/, "") : typeof ns_pixelUrl == "string" ? h.replace(/&amp;/, "&").replace(/&ns__t=\d+/, "") : null
						},
						isPersistentLabelsShared: function() {
							return b
						},
						setPersistentLabelsShared: function(e) {
							b = e
						},
						isPauseOnBufferingEnabled: function() {
							return E
						},
						setPauseOnBufferingEnabled: function(e) {
							E = e
						},
						isPausePlaySwitchDelayEnabled: function() {
							return A
						},
						setPausePlaySwitchDelayEnabled: function(e) {
							A = e
						},
						setClip: function(e, t) {
							v == o.IDLE && (g.getClip().reset(), g.getClip().setLabels(e, null), t && g.incrementStarts())
						},
						setPlaylist: function(e) {
							v == o.IDLE && (g.incrementPlaylistCounter(), g.reset(), g.getClip().reset(), g.setLabels(e, null))
						},
						importState: function(e) {
							reset();
							var t = i.extend({}, e);
							g.setRegisters(t, null), g.getClip().setRegisters(t, null), Z(t), m++
						},
						exportState: function() {
							return D
						},
						getVersion: function() {
							return a.STREAMSENSE_VERSION
						},
						addListener: function(e) {
							P.push(e)
						},
						removeListener: function(e) {
							P.splice(P.indexOf(e), 1)
						},
						getClip: function() {
							return g.getClip()
						},
						getPlaylist: function() {
							return g
						}
					}), i.extend(this, {
						adNotify: dt,
						customNotify: vt,
						viewNotify: function(e, t) {
							e = e || f.getPixelURL(), e && n(e, t)
						}
					}), ns_.comScore && (H = ns_.comScore.exports, y = H.c()), c = {}, m = 1, v = o.IDLE, g = new l, w = null, E = !0, T = null, k = 0, q(), S = null, x = null, A = !1, O = null, d = 0, P = [], f.reset(), t && f.setLabels(t), u && f.setPixelURL(u)
				};
				return function(e) {
					function s(e, n) {
						return t[r] || u(e, n)
					}

					function o() {
						r = -1;
						for (var e = 0; e <= n; e++)
							if (t.hasOwnProperty(e)) {
								r = e;
								break
							}
						return ns_.StreamSense.activeIndex = r, r
					}

					function u(e, r) {
						return e = e || null, r = r || null, e && typeof e == "object" && (r = e, e = null), t[++n] = new ns_.StreamSense(r, e), o(), t[n]
					}

					function a() {
						var e = !1,
							n = r;
						if (typeof arguments[0] == "number" && isFinite(arguments[0])) n = arguments[0];
						else if (arguments[0] instanceof ns_.StreamSense)
							for (var i in t)
								if (t[i] === arguments[0]) {
									n = i;
									break
								}
						return t.hasOwnProperty(n) && (e = t[n], delete t[n], e.reset(), o()), e
					}

					function f(e) {
						return e = e || {}, s().setPlaylist(e), s().getPlaylist()
					}

					function l(e, t, n) {
						return e = e || {}, typeof t == "number" && (e.ns_st_cn = t), s().setClip(e, n), s().getClip()
					}

					function c(e, t, n) {
						return typeof e == "undefined" ? !1 : (n = n || null, t = t || {}, s().notify(e, t, n))
					}

					function h(e) {
						typeof e != "undefined" && s().setLabels(e)
					}

					function p() {
						return s().getLabels()
					}

					function d(e) {
						typeof e != "undefined" && s().getPlaylist().setLabels(e)
					}

					function v() {
						return s().getPlaylist().getLabels()
					}

					function m(e) {
						typeof e != "undefined" && s().getClip().setLabels(e)
					}

					function g() {
						return s().getClip().getLabels()
					}

					function y(e) {
						return s().reset(e || {})
					}

					function b(e) {
						return s().getPlaylist().reset(e || {})
					}

					function w(e) {
						return s().getClip().reset(e || {})
					}

					function E(e) {
						return e = e || {}, s().viewNotify(null, e)
					}

					function S(e, t) {
						return arguments.length > 2 && (e = arguments[1], t = arguments[2]), e = e || {}, typeof t == "number" && (e.ns_st_po = t), s().customNotify(e, t)
					}

					function x() {
						return s().exportState()
					}

					function T(e) {
						s().importState(e)
					}
					var t = {},
						n = -1,
						r = -1;
					i.extend(e, {
						activeIndex: r,
						newInstance: u,
						"new": u,
						destroyInstance: a,
						destroy: a,
						newPlaylist: f,
						newClip: l,
						notify: c,
						setLabels: h,
						getLabels: p,
						setPlaylistLabels: d,
						getPlaylistLabels: v,
						setClipLabels: m,
						getClipLabels: g,
						resetInstance: y,
						resetPlaylist: b,
						resetClip: w,
						viewEvent: E,
						customEvent: S,
						exportState: x,
						importState: T
					})
				}(t), t
			}();
		return c.AdEvents = u, c.PlayerEvents = s, c
	}();
	return ns_;
};
var _tv_IBP = {
	gg1: {},
	ibope: function() { /*** Copyright (c) 2009-2010 Glanceguide, Inc.  All rights reserved. * http://www.glanceguide.com* Decompiling, reverse engineering, copying or unauthorized redistribution is prohibited.    ** Load and use gg.js or gg.swf***/
		var cE = '3.5';
		var dm = {};
		var df = true;
		var cL = '';
		var cP = "";
		var cR = "http://www.glanceguide.com/conerror.php";
		var cQ = 60000;
		var ggPageLoaded = false;
		var jsuserid;
		var _ggeom = 1;
		var au = 2;
		var O = false;
		var bStr = navigator.userAgent;
		var bLoc = bStr.indexOf("Firefox");
		if (bStr != null && bLoc >= 0) {
			bJ = true;
			bVer = bStr.substring(bLoc + 8, bLoc + 9);
			if (Number(bVer) >= 3) O = true;
		}
		bLoc = bStr.indexOf("MSIE");
		if (bStr != null && bLoc >= 0) {
			bVer = bStr.substring(bLoc + 5, bLoc + 6);
			if (Number(bVer) >= 6) O = true;
		}
		if (window.addEventListener) window.addEventListener('load', pageLoaded, false);
		else if (window.attachEvent) window.attachEvent('onload', pageLoaded);

		function pageLoaded() {
			ggPageLoaded = true;
			for (var i = 0; i < ggjs.length; i++) ggjs[i].ggJsLoaded();
		};

		function ggSWFLoaded(ggSwfId) {
			ggjs[ggSwfId].ggSwfLoaded();
		};
		var ggjs = [];

		function gg() {
			var ggJsMet = null;
			var ggFlashMet = null;
			var ggLoaded = false;
			var ggSwfId = null;
			var cN = [];
			var I;
			this.ggInitialize = function(cB, uid, di) {
				var name;
				var fpar = "";
				dm = cB;
				df = di;
				for (name in dm) fpar += "<" + name + ">" + dm[name] + "</" + name + ">";
				if (df && FlashDetect.versionAtLeast(8)) {
					I = "gen3flvplayer";
					ggSwfId = new Date().getTime() + (((Math.random() * Math.random() * 10000) | 0) * 1000);
					var divName = '_flash_proxy_' + ggSwfId;
					var aH = document.createElement("div");
					aH.id = divName;
					document.body.appendChild(aH);
					if (cB.sfcode == undefined || cB.sfcode.length != 2) cP = 'http://secure-us.imrworldwide.com/novms/gn/3/ggce302.swf';
					else cP = "http://secure-" + cB.sfcode + '.imrworldwide.com/novms/gn/3/ggce302.swf';;
					var P = new SWFObject(cP, "ggSwfId" + ggSwfId, 1, 1, "8");
					P.addParam('allowscriptaccess', 'always');
					P.addVariable("width", 1);
					P.addVariable("height", 1);
					P.addVariable("ggSwfId", ggSwfId);
					ggjs[ggSwfId] = this;
					cN.push(I);
					cN.push(uid);
					cN.push(fpar);
					P.write(divName);
					setTimeout(ggSwfLoadFailed, cQ);
				} else try {
					I = "genjsplayer";
					ggJsMet = new Metrics();
					ggJsMet.init(I, uid, cL, fpar);
				} catch (av) {}
			};
			this.ggPM = function(eventType, d, f, j, k) {
				eventType = String(eventType);
				d = String(d);
				f = String(f);
				j = String(j);
				k = String(k);
				try {
					if (ggJsMet != null && ggPageLoaded) ggJsMet.C(eventType, new Date().getTime(), d, f, j, k);
					else {
						if (ggLoaded) ggFlashMet.ggProcessMetric(eventType, new Date().getTime(), d, f, j, k);
						else {
							cN.push(eventType);
							cN.push(new Date().getTime());
							cN.push(d);
							cN.push(f);
							cN.push(j);
							cN.push(k);
						}
					}
				} catch (av) {}
			};
			this.ggJsLoaded = function() {
				if (ggJsMet == null) return;
				for (var i = 0; i < cN.length; i += 6) ggJsMet.C(cN[i], cN[i + 1], cN[i + 2], cN[i + 3], cN[i + 4], cN[i + 5]);
				cN = [];
			};
			this.ggSwfLoaded = function() {
				ggFlashMet = (navigator.appName.indexOf("Microsoft") != -1) ? window["ggSwfId" + ggSwfId] : document["ggSwfId" + ggSwfId];
				ggFlashMet.ggInitialize(cN[0], cN[1], cN[2]);
				if (cN.length > 3) {
					for (var i = 3; i < cN.length; i += 6) ggFlashMet.ggProcessMetric(cN[i], cN[i + 1], cN[i + 2], cN[i + 3], cN[i + 4], cN[i + 5]);
				}
				cN = [];
				ggLoaded = true;
			};

			function ggSwfLoadFailed() {
				if (ggJsMet != null || ggLoaded) return;
				var p = new Image(1, 1);
				p.src = cR + '?CONERROR=GGLOADFAIL,' + (new Date().getTimezoneOffset() / -60) + ',' + new Date().getTime() + ',gg.js timed out waiting to load gg.swf';
			}
		};

		function Metrics() {
			var _address;
			var _version = "3.53";
			var cd;
			var ca;
			var _currentMsgSize = 0;
			var aE;
			var aZ = false;
			var az = false;
			var at = 0;
			var bb = 0;
			var aA = 5;
			var cK = 0;
			var cr = "";
			var cl = 1300;
			var cJ, cu, cI;
			var ci = 0,
				aP, aU, aT, aS;
			var _ggtrackid;
			var _ggplayername;
			var dr = 0;
			var iaguc = "";
			var iagua = "";
			var scxpc = "";
			var scxpa = "";
			var cZ = "";
			var _pageUrl = "";
			var intCount = 0;
			var aY = false;
			var bG = 10;
			var bi = "0";
			var bV = 0;
			var o = 0;
			var aX;
			var aW;
			var cV = new Array();
			var playState = 0;
			var videoType;
			var ai = -1;
			var ae = 0;
			var am = 0;
			var ab = 0;
			var aC = 0;
			var B = 0;
			var L = 0;
			var cU = new Object;
			var aQ = 2;
			cU.CS = new Array(2);
			cU.PA = new Array(2);
			cU.PL = new Array(2);
			cU.SA = new Array(2);
			cU.FA = new Array(2);
			cU.SI = new Array(2);
			cU.SR = new Array(2);
			cU.SK = new Array(2);
			cU.CI = new Array(2);
			cU.DI = new Array(2);
			cU.ER = new Array(2);
			cU.SV = new Array(2);
			cU.SH = new Array(2);
			cU.PB = new Array(2);
			cU.II = new Array(2);
			cU.VL = new Array(2);
			cU.PM = new Array(2);
			cU.FP = new Array(2);
			cU.MI = new Array(2);
			cU.Title = new Array(2);
			var _jmet = this;
			this.bT = function() {
				return cU;
			};
			this.getgp = function() {
				return cV;
			};
			this.bL = function() {
				return _pageUrl;
			};
			this.dk = function() {
				return o;
			};

			function bf(i) {
				cU["CS"][i] = 0;
				cU["PA"][i] = 0;
				cU["PL"][i] = 0;
				cU["SA"][i] = 0;
				cU["FA"][i] = 0;
				cU["FP"][i] = 0;
				cU["SI"][i] = 0;
				cU["MI"][i] = 0;
				cU["SR"][i] = 0;
				cU["SK"][i] = 0;
				cU["CI"][i] = 0;
				cU["DI"][i] = 0;
				cU["ER"][i] = 0;
				cU["SV"][i] = 0;
				cU["SH"][i] = 0;
				cU["PB"][i] = 0;
				cU["II"][i] = 0;
				cU["VL"][i] = 0;
				cU["PM"][i] = 0;
			};

			function numorder(a, b) {
				var a1 = Number(a);
				var b1 = Number(b);
				if (a1 < b1) return -1;
				else if (a1 == b1) return 0;
				return 1;
			};

			function ba() {
				bX = cr.split(",");
				var i = 0;
				for (i = 0; i < bX.length; i++)
					if (isNaN(bX[i])) {
						var x = bX[i].split("%");
						if (isNaN(x[0])) bX[i] = 0;
						else bX[i] = Number(x[0]) * cU["VL"][bV] / 100;
					}
				bX.sort(numorder);
				i = bX.length;
				while (--i > 0) {
					while (bX[i] == bX[i - 1]) {
						bX.splice(i - 1, 1);
					}
				}
				if (bX[0] == 0) bX.splice(0, 1);
			};

			function M(name, cora) {
				var st;
				if (cora == 1) st = aW;
				else st = aX;
				var r = -1;
				var K = -1;
				r = st.indexOf("<" + name + ">");
				if (r >= 0) {
					r += name.length + 2;
					K = st.indexOf("</" + name + ">", r);
				}
				if (r >= 0 && K > r) return st.substring(r, K);
				return null;
			};

			function getut(A) {
				var cX;
				if (au == 1) cX == "";
				else {
					cX = "";
					if (cV.prod.indexOf("iag") >= 0) {
						if (o) cX = iagua;
						else cX = iaguc;
						if (A == 2) cX += "&pr=iag.cp,cep";
						else if (A == 1) cX = "";
						else cX += "&pr=iag.cp,soc";
					}
					if (cV.prod.indexOf("vc") >= 0) {
						if (A == 1) cX = "&ig=1";
						else {
							var x2 = M("censuscategory", o);
							if (x2 != null && x2 != "") cX += "&cg=" + escape(x2);
							if (o) cX += "&c3=st,a";
							cX += "&tl=" + escape("dav" + A + "-" + cU["Title"][o].substr(0, 128));
						}
					} else if (cV.prod.indexOf("sc") >= 0) {
						var x2 = M("censuscategory", o);
						if (x2 != null && x2 != "") cX += "&cg=" + escape(x2);
						if (o) cX += "&c3=st,a";
						cX += "&ou=" + escape(_pageUrl.substr(0, 128));
						if (A == 0) {
							if (cU["VL"][o] > 0) cX += "&sd=" + Math.round(cU["VL"][o]);
						} else {
							var du = Math.round(cU["PM"][o]);
							cX += "&du=" + du;
						}
						if (A != 1)
							if (o) cX += scxpa;
							else cX += scxpc;
						cX += "&tl=" + escape("dav" + A + "-" + cU["Title"][o].substr(0, 128));
					}
					cX += "&tp=gg";
				}
				return cX;
			};

			function dp(bD, curval, ac) {
				var x2 = M("iag_" + bD, ac);
				if (x2 != null && x2 != "") return "&pr=iag." + bD + "," + escape(x2);
				if (curval == null) return "";
				return curval;
			};

			function dn(ac, p1, p2, p3, p4) {
				var s;
				if (cV.prod.indexOf("iag") >= 0) s = "";
				else return;
				var sid, tfid, bcr, pgm, epi, seg, pd, oad, brn, cte, ap;
				if (ac) {
					iagua = "";
					if (cV.iagads == 2) return;
				} else {
					iaguc = "";
					if (cV.iagcontent == 2) return;
				}
				if (cV.sid != undefined) sid = "&pr=iag.sid," + cV.sid;
				if (cV.tfid != undefined) tfid = "&pr=iag.tfid," + cV.tfid;
				bcr = "&pr=iag.bcr," + cV.clientid;
				if (ac == 0 || p2 != "preroll") {
					var x2 = M("iagcategory", 0);
					if (x2 == null || x2 == "") x2 = M("category", 0);
					if (x2 != null && x2 != "") pgm = "&pr=iag.pgm," + escape(x2);
					else pgm = "&pr=iag.pgm,general";
					x2 = M("title", 0);
					if (x2 != null && x2 != "") epi = "&pr=iag.epi," + escape(x2);
					else epi = "&pr=iag.epi," + escape(cU["Title"][0].substr(0, 255));
					seg = "&pr=iag.seg,";
					if (p4 > 1) seg += escape(p4);
					else seg += "1";
					x2 = M("pd", 0);
					if (x2 == null) x2 = cV.pd;
					if (x2 != null && x2 != "") pd = "&pr=iag.pd," + escape(x2);
					else pd = "";
					x2 = M("oad", 0);
					if (x2 != null && x2 != "") oad = "&pr=iag.oad," + escape(x2);
					else oad = "";
					pgm = dp("pgm", pgm, 0);
					epi = dp("epi", epi, 0);
				}
				if (ac) {
					brn = "&pr=iag.brn," + cV.clientid;
					cte = "&pr=iag.cte," + escape(p1);
					if (p2 == "midroll") ap = "&pr=iag.ap,mid";
					else if (p2 == "postroll") ap = "&pr=iag.ap,post";
					else ap = "&pr=iag.ap,pre";
					bcr = dp("bcr", bcr, ac);
					brn = dp("brn", brn, ac);
					pgm = dp("pgm", pgm, ac);
					epi = dp("epi", epi, ac);
					seg = dp("seg", seg, ac);
					pd = dp("pd", pd, ac);
					oad = dp("oad", oad, ac);
					iagua = sid + tfid + bcr + pgm + epi + seg + pd + brn + ap + cte;
				} else iaguc = sid + tfid + bcr + pgm + epi + seg + pd + oad;
			};

			function ds(ac, p1, p2, p3, p4) {
				var s;
				if (cV.prod.indexOf("sc") >= 0) s = "";
				else return;
				if (ac) scxpa = "";
				else scxpc = "";
				var st;
				if (ac == 1) st = aW;
				else st = aX;
				var r = 0;
				var done = false;
				var K;
				var dq;
				var name, val;
				while (done == false) {
					r = st.indexOf("<ggxp_", r);
					if (r < 0) {
						done = true;
						break;
					}
					K = st.indexOf(">", r);
					if (K < 0) {
						done = true;
						break;
					}
					name = st.substring(r + 6, K);
					dq = st.indexOf("</", K + 1);
					if (dq < 0) {
						done = true;
						break;
					}
					val = st.substring(K + 1, dq);
					r = dq + 7;
					var name2 = escape(name);
					if (name2.indexOf("%") < 0) {
						if (name.length > 32) name = name.substring(0, 31);
						if (val.length > 128) val = val.substring(0, 127);
						s += "&" + name + "=" + escape(val);
					}
				}
				if (ac) scxpa = s;
				else scxpc = s;
			};

			function report(A) {
				var cX = getut(A);
				ca.report(aL(), A, cX);
				_currentMsgSize = 0;
				aQ = A;
			};

			function cO() {
				if (aQ != 2) {
					var cX = getut(2);
					ca.bp(cX);
				}
			};
			this.bC = function() {
				var T;
				try {
					T = window.top.document.hasFocus();
				} catch (av) {
					T = aE;
				}
				if (T == true) az = true;
				if (playState == 1) {
					if (T == true) cU["FA"][bV] += 1;
					cU["FP"][bV] += 1;
				}
			};

			function bu() {
				var ao = false;
				try {
					var bU = window.top.document.hasFocus();
				} catch (av) {
					ao = true;
				}
				if (ao) {
					if (window.top.addEventListener) window.top.addEventListener('focus', aO, false);
					else if (window.top.attachEvent) window.top.attachEvent('onfocus', aO);
					if (window.top.addEventListener) window.top.addEventListener('blur', aG, false);
					else if (window.top.attachEvent) window.top.attachEvent('onblur', aG);
				}
				return ao;
			};

			function aO() {
				aE = true;
			};

			function aG() {
				aE = false;
			};

			function bs() {
				az = false;
				cU["FA"][0] = cU["FA"][1] = 0;
				cU["FP"][0] = cU["FP"][1] = 0;
			};

			function U(Q) {
				var vs = "";
				var D;
				var i = bV;
				if (cU["FP"][i] > 0 && az == true) D = Math.round(cU["FA"][i] * 100 / cU["FP"][i]);
				else D = 100;
				if (Q != null && Q != "") vs = Q;
				else vs = cU["PL"][i];
				vs += "," + D;
				if (Number(cU["PM"][i]) < Q) cU["PM"][i] = Q;
				return vs;
			};

			function aL() {
				var t = 'NA';
				if (at > 0 || bb > 0) {
					t = (Math.round((at * 100) / (at + bb))) + '%';
					if (aZ) t = 'u' + t;
				}
				return t;
			};

			function loadXMLString(txt) {
				try {
					xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
					xmlDoc.async = "false";
					xmlDoc.loadXML(txt);
					return (xmlDoc);
				} catch (e) {
					try {
						bv = new DOMParser();
						xmlDoc = bv.parseFromString(txt, "text/xml");
						return (xmlDoc);
					} catch (e) {
						alert(e.message)
					}
				}
				return (null);
			};
			this.init = function(I, userId, ggAddress, fpar) {
				bi = userId;
				var fxml = loadXMLString("<vi>" + fpar + "</vi>");
				var xn = fxml.firstChild.firstChild;
				var lim = 0;
				while (xn != undefined && lim < 20) {
					if (xn.firstChild != null) cV[xn.nodeName] = xn.firstChild.nodeValue;
					xn = xn.nextSibling;
					lim++;
				}
				if (au != 1) {
					if (cV.sfcode == undefined || cV.sfcode.length != 2) ggAddress = "http://secure-us.imrworldwide.com/cgi-bin/m?";
					else ggAddress = "http://secure-" + cV.sfcode + ".imrworldwide.com/cgi-bin/m?";
					ggAddress += "ci=" + cV.clientid;
					if (cV.cisuffix != undefined && cV.cisuffix != "") ggAddress += cV.cisuffix;
					if (cV.vcid != undefined && cV.vcid != "") ggAddress += "&c6=vc," + cV.vcid;
					if (cV.aJ != undefined && cV.aJ != "") ggAddress += "&c4=mn," + escape(cV.aJ);
					ggAddress += "&cc=1";
				}
				_address = ggAddress;
				if (cV.prod == undefined) cV.prod = "vc";
				this._ggtrackid = cV.clientid;
				if (cV.vcid != null) this._ggtrackid += "." + cV.vcid;
				if (I == 'genjsplayer') cd = new GenJsPlayerEventProcessor();
				else cd = new EventProcessor();
				this._ggplayername = "gj3";
				if (cV["msgmax"] != null && cV["msgmax"] > 0) cl = cV["msgmax"];
				if (cV["msgint"] != null && cV["msgint"] != "") cr = cV["msgint"];
				if (cV["focusint"] != null && cV["focusint"] >= 0) aA = cV["focusint"];
				if (O) {
					if (window.addEventListener) window.addEventListener('unload', cO, false);
					else if (window.attachEvent) window.attachEvent('onbeforeunload', cO);
				}
				ca = new cz(_version, userId, _address, true, true, _jmet);
				if (aA != 0) {
					aZ = bu();
					cu = setInterval(this.bC, aA * 1000);
				}
				this.C('1', new Date().getTime(), window.location.href, document.referrer);
			};
			this.aD = function(i, ts) {
				var V = "";
				var m = 0;
				var D = 1;
				var i = bV;
				if (cU["CS"][i] != 0 && cU["PA"][i] > 0 && cU["VL"][i] > 0) {
					if (cU["PA"][i] >= cU["VL"][i]) m = 99;
					else if (cU["VL"][i] > 0) m = Math.round(cU["PA"][i] * 100 / cU["VL"][i]);
					else m = 66;
					if (cU["FP"][i] > 0 && az == true) {
						D = cU["FA"][i] / cU["FP"][i];
						m = Math.round(m * .8 + m * D * 0.2);
					}
					if (cU["MI"][i] > 0 && cU["SI"][i] <= 0) m -= 10;
					else if (cU["SI"][i] > 0) m += 5;
					if (cU["SR"][i] > 0);
					m += 10;
					if (cU["SH"][i] > 0 || cU["SV"][i] > 0 || cU["PB"][i] > 0 || cU["CI"][i] > 0) m = 99;
					if (cU["II"][i] > 0) m += 10;
					if (cU["ER"][i] > 0 && cU["ER"][i] <= 5) m = cU["ER"][i] * 20;
					if (m > 99) m = 99;
					V = ts + "," + 50 + "," + m + "," + Math.round(D * 100) + "|||";
					cU["CS"][i] = 0;
				}
				if (ae > 0) {
					V = ts + "," + "25" + "," + ae + "," + am + "," + ab + "|||" + V;
					ae = 0;
					am = 0;
					ab = 0;
				}
				return V;
			};
			this.C = function(eventType, date, d, f, j, k) {
				var l = null;
				var bd = 0;
				var v;
				var i, g, R;
				var aF, aB;
				var functionType = eventType;
				if (ci == functionType && aP == d && aU == f && aT == j && aS == k) return;
				ci = functionType;
				aP = d;
				aU = f;
				aT = j;
				aS = k;
				aY = false;
				if (eventType.indexOf("cust:") == 0) l = cd.genericEvent(eventType, date, d, f, j, k);
				else l = cd.cs(eventType, date, d, f, j, k);
				if (l == null || l == "") return;
				var al = l.split(",");
				functionType = Number(al[1]);
				d = al[2];
				f = al[3];
				o = bV;
				switch (functionType) {
					case 1:
						cZ = l;
						if (aP != null) _pageUrl = aP;
						return;
					case 51:
						if (cZ != null) {
							cZ = date + ",1," + aP;
							if (aU != null && aU != "") cZ += "," + aU;
							if (aP != null) _pageUrl = aP;
							return;
						} else l = date + ",51," + aP;
						if (aU != null) l += "," + aU;
						_pageUrl = aP;
						break;
					case 2:
						break;
					case 3:
					case 15:
						intCount = 0;
						dr = 0;
						if (f == "preroll" || f == "postroll" || f == "midroll" || f == "ad") {
							i = 1;
							aW = l;
						} else {
							i = 0;
							aX = l;
						}
						videoType = f;
						bV = i;
						o = i;
						bf(i);
						if (functionType == 15) {
							cU["CS"][i] = 1;
							playState = 1;
						}
						var H = unescape(M("length", bV));
						if (H != null && !isNaN(H)) H = Number(H);
						else H = 30;
						cU["VL"][bV] = H;
						var tit = M("title", bV);
						if (tit != null && tit != "") cU["Title"][bV] = tit;
						else cU["Title"][bV] = d;
						if (bV == 0) ba();
						L = 0;
						dn(i, d, f, j, k);
						ds(i, d, f, j, k);
						break;
					case 4:
						intCount = 0;
						g = d;
						if (isNaN(g) || g == 0) g = cU["PL"][bV];
						else g = Number(d);
						i = g - cU["PL"][bV];
						cU["PA"][bV] += i;
						cU["PL"][bV] = g;
						if (Number(cU["PM"][bV]) < g) cU["PM"][bV] = g;
						v = this.aD(bV, date);
						bV = 0;
						playState = 0;
						L = 0;
						break;
					case 5:
						intCount++;
						g = d;
						L = 0;
						if (isNaN(g)) {
							v = genError("InvPlayParam", d);
							break;
						} else g = Number(d);
						if (g != 0 || cU["PA"][bV] == 0) cU["PL"][bV] = g;
						cU["CS"][bV] = 1;
						playState = 1;
						ca.af(U(g));
						break;
					case 6:
						intCount++;
						g = d;
						if (isNaN(g)) {
							v = genError("InvPauseParam", d);
							break;
						} else g = Number(d);
						i = g - cU["PL"][bV];
						if (i > 0) cU["PA"][bV] += i;
						cU["PL"][bV] = g;
						cU["CS"][bV] = 1;
						playState = 0;
						ca.af(U(g));
						break;
					case 7:
						cU["CS"][bV] = 1;
						dr++;
						if (L == 1 && dr > 5) return;
						g = d;
						if (isNaN(g)) {
							v = genError("InvStopParam", d);
							break;
						} else g = Number(d);
						i = Number(g) - cU["PL"][bV];
						if (i > 0) {
							cU["PA"][bV] += i;
						}
						cU["PL"][bV] = g;
						if (Number(cU["PM"][bV]) < g) cU["PM"][bV] = g;
						if (cU["PA"][bV] > 0) v = this.aD(bV, date);
						playState = 0;
						L = 1;
						cU["PA"][bV] = 0;
						cU["FA"][bV] = 0;
						cU["FP"][bV] = 0;
						if (bV == 0) ba();
						break;
					case 8:
						intCount++;
						g = d;
						if (isNaN(g)) {
							v = genError("InvSeekParam1", d);
							break;
						} else g = Number(d);
						R = f;
						if (isNaN(R)) {
							v = genError("InvSeekParam", f);
							break;
						} else R = Number(f);
						i = g - cU["PL"][bV];
						if (i > 0) {
							cU["PA"][bV] += i;
						}
						cU["PL"][bV] = R;
						cU["CS"][bV] = 1;
						ca.af(U(R));
						break;
					case 9:
						if (d || d.toLowerCase().indexOf("on") || d == 1) cU["MI"][bV] += 1;
						else cU["MI"][bV] -= 1;
						break;
					case 10:
						if (d || d.toLowerCase().indexOf("on") || d == 1) cU["SR"][bV] += 1;
						bs();
						break;
					case 11:
						if (!isNaN(d)) {
							if (ai < 0) ai = d;
							else {
								if (d > ai) cU["SI"][bV] += 1;
								ai = d;
							}
						}
						break;
					case 12:
						cU["DI"][bV] += 1;
						break;
					case 13:
					case 14:
						break;
					case 16:
					case 22:
						cU["CI"][bV] += 1;
						break;
					case 17:
						cU["SH"][bV] += 1;
						break;
					case 18:
						cU["SV"][bV] += 1;
						break;
					case 19:
					case 20:
						cU["PB"][bV] += 1;
						break;
					case 21:
						cU["II"][bV] += 1;
						break;
					case 23:
						cU["ER"][bV] += 1;
						break;
					case 24:
						break;
					case 25:
						ae += 1;
						am += Number(d);
						if (ab < Number(d)) ab = d;
						return;
					case 49:
						if (isNaN(d)) return;
						g = Number(d);
						if (g <= 1 || playState != 1) return;
						ca.af(U(g));
						if (bV != 0 || bX.length == 0) return;
						var act = cU["PA"][bV] + (g - cU["PL"][bV]);
						if (act < bX[0]) return;
						cU["PA"][bV] += (g - cU["PL"][bV]);
						cU["PL"][bV] = d;
						v = this.aD(bV, date);
						bX.splice(0, 1);
						break;
					default:
						break;
				}
				var G = 10;
				if (isNaN(cU["VL"][bV])) G = 10;
				else G = cU["VL"][bV] / 60 * bG;
				if (G > 100) G = 100;
				if (G < 20) G = 20;
				if (aY == true) return;
				if (intCount > G)
					if (!(functionType == 3 || functionType == 15 || functionType == 4 || functionType == 7)) return;
				if (intCount > 5000) return;
				if (v != null) l = v + l;
				if (cZ != "") {
					l = cZ + "|||" + l;
					cZ = "";
				}
				if (o != 1) aF = Number(cV.trackcontent);
				else aF = Number(cV.trackads);
				switch (aF) {
					case 0:
						return;
					case 2:
					case 3:
						aB = M("ggignr", o);
						if (aB != null && aB == "1") return;
						break;
					default:
						break;
				}
				bd = ca.ct(l, aL());
				_currentMsgSize += bd;
				var tpld = aC;
				if (functionType == 7) {
					if (bV == 0) B = 1;
					report(2);
					tpld = 0;
				} else if (functionType == 49) {
					report(1);
					tpld = 0;
				} else if (functionType == 15) {
					report(0);
					tpld = 0;
					B = 0;
				} else if (functionType == 3) {
					if (aC == 5) {
						report(0);
						tpld = 0;
						B = 0;
					} else tpld = 3;
				} else if (functionType == 4) {
					if (B == 0) {
						report(1);
					}
					B = 0;
					tpld = 0;
				} else if (functionType == 5) {
					if (aC == 3) {
						report(0);
						tpld = 0;
					} else if (d == 0) {
						if (B == 1 && bV == 0) {
							cU["PM"][bV] = 0;
							report(0);
							tpld = 0;
							B = 0;
						} else tpld = 5;
					} else tpld = 0;
				} else if (functionType == 6 && d != 0) tpld = 0;
				else if (functionType == 8 && f != 0) tpld = 0;
				aC = tpld;
				if (Number(_currentMsgSize) >= Number(cl)) report(1);
			};
			this.bS = function(eventType, date, d, f, j, k) {
				this.C('cust:' + eventType, date, d, f, j, k);
			}
		};

		function _CookieManager() {
			var CSEPARATOR = '|||';
			var cS = '_ggCvar';
			var bP = '_ggMCvar';
			var TIMEOUT = 45000;
			var _userId = null;
			var cf = 0;
			var cG = 365 * 24 * 60 * 60 * 1000;
			this.bw = function(userId) {
				_userId = be(32);
				return _userId;
			};
			this.bz = function() {};
			this.clearMessageCookie = function() {};
			this.bE = function() {
				cf++;
				return cf;
			};
			this.aR = function() {
				return _userId;
			};

			function createCookie(name, value) {};

			function deleteCookie(name) {};

			function readCookie(name) {};

			function be(ak) {
				var out = "";
				var c = "";
				for (var i = 0; i < ak; i++) {
					c = Math.floor(Math.random() * 36).toString(36);
					out += Math.floor(Math.random() * 2) ? c.toUpperCase() : c.toLowerCase();
				}
				return out;
			}
		};

		function cy(version, userId, bM, ggtrackid, ggplayername) {
			var ax = 'END"/></GGC>';
			var aa = '|||';
			var bO = '^|^^';
			var bY = '';
			var bj = Math.floor(Math.random() * 100000) + 1;
			var _xmlHeader = '<GGC><H value="' + version + ',' + (new Date().getTimezoneOffset() / -60) + ',' + userId + '.' + bj + "," + ggtrackid + "," + ggplayername + '"/><L value="';
			this.bA = function(currentMessage) {
				if (bY == '') bY = _xmlHeader + currentMessage + aa;
				else bY += currentMessage + aa;
				return bY;
			};
			this.bg = function(t) {
				if (bY == '') return bY;
				var bl = bY + ax;
				bY = '';
				return bl;
			};
			this.bx = function(aN) {
				if (bY == '') bY = _xmlHeader;
				if (aN != "") bY += new Date().getTime() + ",49," + aN + aa;
				return bY + new Date().getTime() + ",2" + aa + ax;
			}
		};

		function cz(version, userId, address, aI, an, metricsObj) {
			var cT = 'logthisjs.php';
			var _address = address;
			var bF = 'logthisjs.php';
			var bh = 'postjs.php';
			var cg;
			var cc = new _CookieManager();
			var ce = null;
			var bc = 'NA';
			var cp = false;
			var cf = cc.bE();
			var cH;
			var cb = "GET";
			var _metricsObj = metricsObj;
			cg = new cw(address, address + bF, address + bh, cb);
			if (aI != null) cp = aI;
			cp = false;
			cc.bw(userId);
			cc.bz();
			if (userId == null) userId = "0";
			ce = new cy(version, userId, cf, _metricsObj._ggtrackid, _metricsObj._ggplayername);
			var ay = new bo();
			var ag;
			var ah;
			var ax = '|||END"/></GGC>';
			var bq = 'END"/></GGC>';
			var bK = "^|^^";
			var dj = "|||";
			var bm;
			var cv = 0;
			if (_ggeom == 0) ah = 0;
			else ah = 2;
			var viewst = "";
			var ag = String.fromCharCode(56) + String.fromCharCode(103) + String.fromCharCode(36) + String.fromCharCode(15) + String.fromCharCode(126) + String.fromCharCode(3) + String.fromCharCode(71) + String.fromCharCode(91) + String.fromCharCode(100) + String.fromCharCode(7) + String.fromCharCode(17) + String.fromCharCode(31) + String.fromCharCode(95) + String.fromCharCode(28) + String.fromCharCode(64) + String.fromCharCode(14);
			bm = ay.aw(ag, bq);
			this.report = function(t, A, cX) {
				bc = t;
				var F = ce.bg(t);
				F = "<m v=" + ah + " c=" + cc.aR() + ">" + ay.aw(ag, F) + "<%2Fm>";
				cg.report(F, cX);
				if (A == 0) cv = 1;
			};
			this.bp = function(cX) {
				var F = ce.bx(viewst);
				F = "<m v=" + ah + " c=" + cc.aR() + ">" + ay.aw(ag, F) + "<%2Fm>";
				cg.report(F, cX);
			};
			this.ct = function(l, t) {
				bc = t;
				var message = ce.bA(l);
				var ak = message.length;
				return ak;
			};
			this.af = function(bD) {
				if (O) viewst = bD;
			}
		};

		function cw(cD, bI, bk, an) {
			var bR = 2;
			var bN = 10;
			var aV = cD;
			var cF = bI;
			var bQ = bk;
			var _sending = false;
			var cA;
			var _retry = 0;
			var cb = 'GET-CONFIRM';
			var _i = new Image(1, 1);
			var _iframe = null;
			if (an != null) cb = an;
			if (cb == 'GET-CONFIRM') {
				if (window.addEventListener) {
					_i.addEventListener('load', loadSuccess, false);
					_i.addEventListener('error', bn, false);
				} else if (window.attachEvent) {
					_i.attachEvent('onload', loadSuccess);
					_i.attachEvent('onerror', bn);
				}
			}
			this.report = function(cY, cX) {
				if (cY == null || cY == '') return;
				if (cb != 'POST') bB(cY, cX);
			};

			function bB(cY, cX) {
				cA = cY;
				_sending = true;
				if (cb == 'GET') _i = new Image(1, 1);
				if (au == 1) _i.src = aV + cX + '?HEX40=' + cY;
				else _i.src = aV + cX + "HEX40%3D" + cY;
			}
		};

		function bo() {
			function by(ad, as) {
				var result = '';
				if (ad == null || as == null) return as;
				var aK = ad.split('');
				var bH = aK.length;
				var ar = as.split('');
				var aM = ar.length;
				for (var i = 0; i < aM; i++) {
					var hash = ar[i].charCodeAt(0) ^ ((aM % 10) | aK[i % bH].charCodeAt(0));
					if (hash == 0) result += ar[i];
					else result += String.fromCharCode(hash);
				}
				return result;
			};

			function bt(aj) {
				var $a, $n, $A;
				var $utf;
				$utf = '';
				$A = aj.length;
				for ($a = 0; $a < $A; $a++) {
					$n = aj.charCodeAt($a);
					if ($n < 128) {
						$utf += String.fromCharCode($n);
					} else if (($n > 127) && ($n < 2048)) {
						$utf += String.fromCharCode(($n >> 6) | 192);
						$utf += String.fromCharCode(($n & 63) | 128);
					} else if ($n < 65536) {
						$utf += String.fromCharCode(($n >> 12) | 224);
						$utf += String.fromCharCode((($n >> 6) & 63) | 128);
						$utf += String.fromCharCode(($n & 63) | 128);
					} else {
						$utf += String.fromCharCode(($n >> 18) | 240);
						$utf += String.fromCharCode((($n >> 12) & 63) | 128);
						$utf += String.fromCharCode((($n >> 6) & 63) | 128);
						$utf += String.fromCharCode(($n & 63) | 128);
					}
				}
				return $utf;
			};
			this.urlencode = function(str) {
				var bZ = {},
					tmp_arr = [];
				var J = str.toString();
				var replacer = function(search, replace, str) {
					var tmp_arr = [];
					tmp_arr = str.split(search);
					return tmp_arr.join(replace);
				};
				bZ["'"] = '%27';
				bZ['('] = '%28';
				bZ[')'] = '%29';
				bZ['*'] = '%2A';
				bZ['~'] = '%7E';
				bZ['!'] = '%21';
				bZ['%20'] = '+';
				J = encodeURIComponent(J);
				for (search in bZ) {
					replace = bZ[search];
					J = replacer(search, replace, J)
				}
				return J.replace(/(\%([a-z0-9]{2}))/g, function(full, m1, m2) {
					return "%" + m2.toUpperCase();
				});
				return J;
			};
			this.aw = function(ad, aj) {
				return this.urlencode(by(ad, bt(aj)));
			}
		};

		function EventProcessor() {
			this.bW = -1;
			this.cx = 'NA';
			var cC = -1;
			var ck = null;
			var _videoInfo = null;
			var genEventType = null;
			var dc = null;
			var dh = null;
			var dg = null;
			var de = null;
			var ggEventType = null;
			var cq = null;
			var cn = null;
			var co = null;
			var cj = null;
			this.getCurrentEvent = function() {
				return this.bW;
			};
			this.genericEvent = function(eventType, date, d, f, j, k) {
				if (genEventType == eventType && dc == d && dh == f && dg == j && de == k) return null;
				var cW = processGenericEvent(eventType, date, d, f, j, k);
				if (cW != null) {
					genEventType = eventType;
					dc = d;
					dh = f;
					dg = j;
					de = k;
				}
				return cW;
			};
			this.cs = function(eventType, date, d, f, j, k) {
				if (ggEventType == eventType && cq == d && cn == f && co == j && cj == k) return null;
				var cW = null;
				if (eventType == 1) {
					this.bW = eventType;
					ck = d;
					cW = date + "," + this.bW + ',' + ck;
					if (f != null) cW += "," + f;
				} else if (eventType == 10 || eventType == 9) {
					this.bW = eventType;
					if (d == false) cW = date + "," + this.bW + ',' + '0';
					else if (d == true) cW = date + "," + this.bW + ',' + '1';
					else cW = date + "," + this.bW + ',' + d;
				} else if (eventType == 12) {
					this.bW = eventType;
					cW = date + "," + this.bW;
				} else if (eventType == 49) {
					{
						this.bW = eventType;
						cC = d;
						cW = date + "," + this.bW + ',' + d;
					}
				} else if (eventType == 11) {
					this.bW = eventType;
					cW = date + "," + this.bW + ',' + d;
				} else if (eventType == "videoInfo") setVideoInfoString(d);
				else cW = this.C(eventType, date, d, f, j, k);
				if (cW != null) {
					ggEventType = eventType;
					cq = d;
					cn = f;
					co = j;
					cj = k;
				}
				return cW;
			};
			this.C = function(eventType, date, d, f, j, k) {};
			this.getVideoInfo = function(duration, uurl) {
				var vidInfo = '';
				var custInfo;
				if (duration != null) vidInfo = '<length>' + duration + '</length>';
				if (uurl != null) vidInfo += '<uurl>' + uurl + '</uurl>';
				if (_videoInfo != null) {
					vidInfo += _videoInfo;
					_videoInfo = null;
				}
				return vidInfo;
			};

			function processGenericEvent(eventType, date, d, f, j, k) {
				if (eventType == null || eventType.length <= 5) return null;
				var l = date + "," + eventType;
				if (d != null) l += ',' + d;
				if (f != null) l += ',' + f;
				if (j != null) l += ',' + j;
				if (k != null) l += ',' + k;
				return l;
			};

			function setVideoInfoString(videoInfo) {
				_videoInfo = videoInfo;
			}
		};

		function aq(vi, name) {
			var r = vi.indexOf("<" + name + ">") + name.length + 2;
			var K = vi.indexOf("</" + name + ">", r);
			if (r >= 0 && K > r) return vi.substring(r, K);
			return null;
		};

		function GenJsPlayerEventProcessor() {
			this.inheritFrom = EventProcessor;
			this.inheritFrom();
			var da = null;
			var db = null;
			this.C = function(eventType, date, d, f, j, k) {
				var cW = '';
				if ((eventType == 3 && this.bW != 3) || (eventType == 15 && this.bW != 15)) {
					var vx1 = aq(j, "censuscategory");
					var vx2 = aq(j, "category");
					if (vx2 == null && vx1 != null && vx1 != "") j += "<category>" + vx1 + "</category>";
					this.cx = aq(j, "length");
					cW += ',' + d + "," + f + "," + j;
					if (!k && k != "" && !isNaN(k)) cW += "," + k;
				} else if (eventType == 1 || eventType == 51 || eventType == 8) {
					cW += "," + d;
					if (f != null) cW += "," + f;
				} else if (eventType == 6 && da != true && d != '00:00') {
					da = true;
					db = d;
					cW += ',' + db;
				} else if (eventType == 5 && da != false) {
					da = false;
					cW += ',' + d;
				} else if (eventType == 7) {
					da = true;
					db = '0';
					cW += ',' + d;
				} else if (eventType == 9) {
					if (d == false) cW += ',Off';
					else cW += ',On';
				} else {
					cW += "," + d;
					if (f != null) cW += "," + f;
				}
				if (cW == '') return null;
				else {
					this.bW = eventType;
					return date + ',' + this.bW + cW;
				}
			}
		}
		var _nolggGlobalParams = {
			clientid: "es-703034",
			vcid: "b01",
			cisuffix: "",
			sfcode: "uk",
			prod: "sc"
		};
		var canUseSWF = false;
		var uid = 0;
		_tv_IBP.gg1 = new gg();
		_tv_IBP.gg1.ggInitialize(_nolggGlobalParams, uid, canUseSWF);
	}
};
_tv_IBP.ibope();
(function(i, s, o, g, r, a, m) {
	i['GoogleAnalyticsObjectTS'] = r;
	i[r] = i[r] || function() {
		(i[r].q = i[r].q || []).push(arguments)
	}, i[r].l = 1 * new Date();
})(window, document, '', '', 'gaTerraS');
(function() {
	var $c = function(a) {
		this.w = a || []
	};
	$c.prototype.set = function(a) {
		this.w[a] = !0
	};
	$c.prototype.encode = function() {
		for (var a = [], b = 0; b < this.w.length; b++) this.w[b] && (a[Math.floor(b / 6)] ^= 1 << b % 6);
		for (b = 0; b < a.length; b++) a[b] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[b] || 0);
		return a.join("") + "~"
	};
	var vd = new $c;

	function J(a) {
		vd.set(a)
	}
	var Nd = function(a, b) {
			var c = new $c(Dd(a));
			c.set(b);
			a.set(Gd, c.w)
		},
		Td = function(a) {
			a = Dd(a);
			a = new $c(a);
			for (var b = vd.w.slice(), c = 0; c < a.w.length; c++) b[c] = b[c] || a.w[c];
			return (new $c(b)).encode()
		},
		Dd = function(a) {
			a = a.get(Gd);
			ka(a) || (a = []);
			return a
		};
	var ea = function(a) {
			return "function" == typeof a
		},
		ka = function(a) {
			return "[object Array]" == Object.prototype.toString.call(Object(a))
		},
		qa = function(a) {
			return void 0 != a && -1 < (a.constructor + "").indexOf("String")
		},
		D = function(a, b) {
			return 0 == a.indexOf(b)
		},
		sa = function(a) {
			return a ? a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
		},
		ta = function(a) {
			var b = M.createElement("img");
			b.width = 1;
			b.height = 1;
			b.src = a;
			return b
		},
		ua = function() {},
		K = function(a) {
			if (encodeURIComponent instanceof Function) return encodeURIComponent(a);
			J(28);
			return a
		},
		L = function(a, b, c, d) {
			try {
				a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
			} catch (e) {
				J(27)
			}
		},
		wa = function(a, b) {
			if (a) {
				var c = M.createElement("script");
				c.type = "text/javascript";
				c.async = !0;
				c.src = a;
				b && (c.id = b);
				var d = M.getElementsByTagName("script")[0];
				d.parentNode.insertBefore(c, d)
			}
		},
		Ud = function() {
			return "https:" == M.location.protocol
		},
		xa = function() {
			var a = "" + M.location.hostname;
			return 0 == a.indexOf("www.") ? a.substring(4) : a
		},
		ya = function(a) {
			var b = M.referrer;
			if (/^https?:\/\//i.test(b)) {
				if (a) return b;
				a = "//" + M.location.hostname;
				var c = b.indexOf(a);
				if (5 == c || 6 == c)
					if (a = b.charAt(c + a.length), "/" == a || "?" == a || "" == a || ":" == a) return;
				return b
			}
		},
		za = function(a, b) {
			if (1 == b.length && null != b[0] && "object" === typeof b[0]) return b[0];
			for (var c = {}, d = Math.min(a.length + 1, b.length), e = 0; e < d; e++)
				if ("object" === typeof b[e]) {
					for (var g in b[e]) b[e].hasOwnProperty(g) && (c[g] = b[e][g]);
					break
				} else e < a.length && (c[a[e]] = b[e]);
			return c
		};
	var ee = function() {
		this.keys = [];
		this.values = {};
		this.m = {}
	};
	ee.prototype.set = function(a, b, c) {
		this.keys.push(a);
		c ? this.m[":" + a] = b : this.values[":" + a] = b
	};
	ee.prototype.get = function(a) {
		return this.m.hasOwnProperty(":" + a) ? this.m[":" + a] : this.values[":" + a]
	};
	ee.prototype.map = function(a) {
		for (var b = 0; b < this.keys.length; b++) {
			var c = this.keys[b],
				d = this.get(c);
			d && a(c, d)
		}
	};
	var O = window,
		M = document;
	var Aa = function(a) {
		var b = O._gaUserPrefs;
		if (b && b.ioo && b.ioo() || a && !0 === O["ga-disable-" + a]) return !0;
		try {
			var c = O.external;
			if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
		} catch (d) {}
		return !1
	};
	var Ca = function(a) {
			var b = [],
				c = M.cookie.split(";");
			a = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$");
			for (var d = 0; d < c.length; d++) {
				var e = c[d].match(a);
				e && b.push(e[1])
			}
			return b
		},
		zc = function(a, b, c, d, e, g) {
			e = Aa(e) ? !1 : eb.test(M.location.hostname) || "/" == c && vc.test(d) ? !1 : !0;
			if (!e) return !1;
			b && 1200 < b.length && (b = b.substring(0, 1200), J(24));
			c = a + "=" + b + "; path=" + c + "; ";
			g && (c += "expires=" + (new Date((new Date).getTime() + g)).toGMTString() + "; ");
			d && "none" != d && (c += "domain=" + d + ";");
			d = M.cookie;
			M.cookie = c;
			if (!(d = d != M.cookie)) a: {
				a = Ca(a);
				for (d = 0; d < a.length; d++)
					if (b == a[d]) {
						d = !0;
						break a
					}
				d = !1
			}
			return d
		},
		Cc = function(a) {
			return K(a).replace(/\(/g, "%28").replace(/\)/g, "%29")
		},
		vc = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
		eb = /(^|\.)doubleclick\.net$/i;
	var oc = function() {
			return (Ba || Ud() ? "https:" : "http:") + "//www.google-analytics.com"
		},
		Da = function(a) {
			this.name = "len";
			this.message = a + "-8192"
		},
		ba = function(a, b, c) {
			c = c || ua;
			if (2036 >= b.length) wc(a, b, c);
			else if (8192 >= b.length) x(a, b, c) || wd(a, b, c) || wc(a, b, c);
			else throw ge("len", b.length), new Da(b.length);
		},
		wc = function(a, b, c) {
			var d = ta(a + "?" + b);
			d.onload = d.onerror = function() {
				d.onload = null;
				d.onerror = null;
				c()
			}
		},
		wd = function(a, b, c) {
			var d = O.XMLHttpRequest;
			if (!d) return !1;
			var e = new d;
			if (!("withCredentials" in e)) return !1;
			e.open("POST", a, !0);
			e.withCredentials = !0;
			e.setRequestHeader("Content-Type", "text/plain");
			e.onreadystatechange = function() {
				4 == e.readyState && (c(), e = null)
			};
			e.send(b);
			return !0
		},
		x = function(a, b, c) {
			return O.navigator.sendBeacon ? O.navigator.sendBeacon(a, b) ? (c(), !0) : !1 : !1
		},
		ge = function(a, b, c) {
			1 <= 100 * Math.random() || Aa("?") || (a = ["t=error", "_e=" + a, "_v=j41", "sr=1"], b && a.push("_f=" + b), c && a.push("_m=" + K(c.substring(0, 100))), a.push("aip=1"), a.push("z=" + hd()), wc(oc() + "/collect", a.join("&"), ua))
		};
	var Ha = function() {
		this.M = []
	};
	Ha.prototype.add = function(a) {
		this.M.push(a)
	};
	Ha.prototype.D = function(a) {
		try {
			for (var b = 0; b < this.M.length; b++) {
				var c = a.get(this.M[b]);
				c && ea(c) && c.call(O, a)
			}
		} catch (d) {}
		b = a.get(Ia);
		b != ua && ea(b) && (a.set(Ia, ua, !0), setTimeout(b, 10))
	};

	function Ja(a) {
		if (100 != a.get(Ka) && La(P(a, Q)) % 1E4 >= 100 * R(a, Ka)) throw "abort";
	}

	function Ma(a) {
		if (Aa(P(a, Na))) throw "abort";
	}

	function Oa() {
		var a = M.location.protocol;
		if ("http:" != a && "https:" != a) throw "abort";
	}

	function Pa(a) {
		try {
			O.navigator.sendBeacon ? J(42) : O.XMLHttpRequest && "withCredentials" in new O.XMLHttpRequest && J(40)
		} catch (c) {}
		a.set(ld, Td(a), !0);
		a.set(Ac, R(a, Ac) + 1);
		var b = [];
		Qa.map(function(c, d) {
			if (d.F) {
				var e = a.get(c);
				void 0 != e && e != d.defaultValue && ("boolean" == typeof e && (e *= 1), b.push(d.F + "=" + K("" + e)))
			}
		});
		b.push("z=" + Bd());
		a.set(Ra, b.join("&"), !0)
	}

	function Sa(a) {
		var b = P(a, gd) || oc() + "/collect",
			c = P(a, fa);
		!c && a.get(Vd) && (c = "beacon");
		if (c) {
			var d = P(a, Ra),
				e = a.get(Ia),
				e = e || ua;
			"image" == c ? wc(b, d, e) : "xhr" == c && wd(b, d, e) || "beacon" == c && x(b, d, e) || ba(b, d, e)
		} else ba(b, P(a, Ra), a.get(Ia));
		a.set(Ia, ua, !0)
	}

	function Hc(a) {
		var b = O.gaData;
		b && (b.expId && a.set(Nc, b.expId), b.expVar && a.set(Oc, b.expVar))
	}

	function cd() {
		if (O.navigator && "preview" == O.navigator.loadPurpose) throw "abort";
	}

	function yd(a) {
		var b = O.gaDevIds;
		ka(b) && 0 != b.length && a.set("&did", b.join(","), !0)
	}

	function vb(a) {
		if (!a.get(Na)) throw "abort";
	};
	var hd = function() {
			return Math.round(2147483647 * Math.random())
		},
		Bd = function() {
			try {
				var a = new Uint32Array(1);
				O.crypto.getRandomValues(a);
				return a[0] & 2147483647
			} catch (b) {
				return hd()
			}
		};

	function Ta(a) {
		var b = R(a, Ua);
		500 <= b && J(15);
		var c = P(a, Va);
		if ("transaction" != c && "item" != c) {
			var c = R(a, Wa),
				d = (new Date).getTime(),
				e = R(a, Xa);
			0 == e && a.set(Xa, d);
			e = Math.round(2 * (d - e) / 1E3);
			0 < e && (c = Math.min(c + e, 20), a.set(Xa, d));
			if (0 >= c) throw "abort";
			a.set(Wa, --c)
		}
		a.set(Ua, ++b)
	};
	var Ya = function() {
			this.data = new ee
		},
		Qa = new ee,
		Za = [];
	Ya.prototype.get = function(a) {
		var b = $a(a),
			c = this.data.get(a);
		b && void 0 == c && (c = ea(b.defaultValue) ? b.defaultValue() : b.defaultValue);
		return b && b.Z ? b.Z(this, a, c) : c
	};
	var P = function(a, b) {
			var c = a.get(b);
			return void 0 == c ? "" : "" + c
		},
		R = function(a, b) {
			var c = a.get(b);
			return void 0 == c || "" === c ? 0 : 1 * c
		};
	Ya.prototype.set = function(a, b, c) {
		if (a)
			if ("object" == typeof a)
				for (var d in a) a.hasOwnProperty(d) && ab(this, d, a[d], c);
			else ab(this, a, b, c)
	};
	var ab = function(a, b, c, d) {
			if (void 0 != c) switch (b) {
				case Na:
					wb.test(c)
			}
			var e = $a(b);
			e && e.o ? e.o(a, b, c, d) : a.data.set(b, c, d)
		},
		bb = function(a, b, c, d, e) {
			this.name = a;
			this.F = b;
			this.Z = d;
			this.o = e;
			this.defaultValue = c
		},
		$a = function(a) {
			var b = Qa.get(a);
			if (!b)
				for (var c = 0; c < Za.length; c++) {
					var d = Za[c],
						e = d[0].exec(a);
					if (e) {
						b = d[1](e);
						Qa.set(b.name, b);
						break
					}
				}
			return b
		},
		yc = function(a) {
			var b;
			Qa.map(function(c, d) {
				d.F == a && (b = d)
			});
			return b && b.name
		},
		S = function(a, b, c, d, e) {
			a = new bb(a, b, c, d, e);
			Qa.set(a.name, a);
			return a.name
		},
		cb = function(a, b) {
			Za.push([new RegExp("^" + a + "$"), b])
		},
		T = function(a, b, c) {
			return S(a, b, c, void 0, db)
		},
		db = function() {};
	var gb = qa(window.GoogleAnalyticsObjectTS) && sa(window.GoogleAnalyticsObjectTS) || "gaTerraS",
		Ba = !1,
		he = S("_br"),
		hb = T("apiVersion", "v"),
		ib = T("clientVersion", "_v");
	S("anonymizeIp", "aip");
	var jb = S("adSenseId", "a"),
		Va = S("hitType", "t"),
		Ia = S("hitCallback"),
		Ra = S("hitPayload");
	S("nonInteraction", "ni");
	S("currencyCode", "cu");
	S("dataSource", "ds");
	var Vd = S("useBeacon", void 0, !1),
		fa = S("transport");
	S("sessionControl", "sc", "");
	S("sessionGroup", "sg");
	S("queueTime", "qt");
	var Ac = S("_s", "_s");
	S("screenName", "cd");
	var kb = S("location", "dl", ""),
		lb = S("referrer", "dr"),
		mb = S("page", "dp", "");
	S("hostname", "dh");
	var nb = S("language", "ul"),
		ob = S("encoding", "de");
	S("title", "dt", function() {
		return M.title || void 0
	});
	cb("contentGroup([0-9]+)", function(a) {
		return new bb(a[0], "cg" + a[1])
	});
	var pb = S("screenColors", "sd"),
		qb = S("screenResolution", "sr"),
		rb = S("viewportSize", "vp"),
		sb = S("javaEnabled", "je"),
		tb = S("flashVersion", "fl");
	S("campaignId", "ci");
	S("campaignName", "cn");
	S("campaignSource", "cs");
	S("campaignMedium", "cm");
	S("campaignKeyword", "ck");
	S("campaignContent", "cc");
	var ub = S("eventCategory", "ec"),
		xb = S("eventAction", "ea"),
		yb = S("eventLabel", "el"),
		zb = S("eventValue", "ev"),
		Bb = S("socialNetwork", "sn"),
		Cb = S("socialAction", "sa"),
		Db = S("socialTarget", "st"),
		Eb = S("l1", "plt"),
		Fb = S("l2", "pdt"),
		Gb = S("l3", "dns"),
		Hb = S("l4", "rrt"),
		Ib = S("l5", "srt"),
		Jb = S("l6", "tcp"),
		Kb = S("l7", "dit"),
		Lb = S("l8", "clt"),
		Mb = S("timingCategory", "utc"),
		Nb = S("timingVar", "utv"),
		Ob = S("timingLabel", "utl"),
		Pb = S("timingValue", "utt");
	S("appName", "an");
	S("appVersion", "av", "");
	S("appId", "aid", "");
	S("appInstallerId", "aiid", "");
	S("exDescription", "exd");
	S("exFatal", "exf");
	var Nc = S("expId", "xid"),
		Oc = S("expVar", "xvar"),
		Rc = S("_utma", "_utma"),
		Sc = S("_utmz", "_utmz"),
		Tc = S("_utmht", "_utmht"),
		Ua = S("_hc", void 0, 0),
		Xa = S("_ti", void 0, 0),
		Wa = S("_to", void 0, 20);
	cb("dimension([0-9]+)", function(a) {
		return new bb(a[0], "cd" + a[1])
	});
	cb("metric([0-9]+)", function(a) {
		return new bb(a[0], "cm" + a[1])
	});
	S("linkerParam", void 0, void 0, Bc, db);
	var ld = S("usage", "_u"),
		Gd = S("_um");
	S("forceSSL", void 0, void 0, function() {
		return Ba
	}, function(a, b, c) {
		J(34);
		Ba = !!c
	});
	var ed = S("_j1", "jid");
	cb("\\&(.*)", function(a) {
		var b = new bb(a[0], a[1]),
			c = yc(a[0].substring(1));
		c && (b.Z = function(a) {
			return a.get(c)
		}, b.o = function(a, b, g, ca) {
			a.set(c, g, ca)
		}, b.F = void 0);
		return b
	});
	var Qb = T("_oot"),
		dd = S("previewTask"),
		Rb = S("checkProtocolTask"),
		md = S("validationTask"),
		Sb = S("checkStorageTask"),
		Uc = S("historyImportTask"),
		Tb = S("samplerTask"),
		Vb = S("_rlt"),
		Wb = S("buildHitTask"),
		Xb = S("sendHitTask"),
		Vc = S("ceTask"),
		zd = S("devIdTask"),
		Cd = S("timingTask"),
		Ld = S("displayFeaturesTask"),
		V = T("name"),
		Q = T("clientId", "cid"),
		Ad = S("userId", "uid"),
		Na = T("trackingId", "tid"),
		U = T("cookieName", void 0, "_ga"),
		W = T("cookieDomain"),
		Yb = T("cookiePath", void 0, "/"),
		Zb = T("cookieExpires", void 0, 63072E3),
		$b = T("legacyCookieDomain"),
		Wc = T("legacyHistoryImport", void 0, !0),
		ac = T("storage", void 0, "cookie"),
		bc = T("allowLinker", void 0, !1),
		cc = T("allowAnchor", void 0, !0),
		Ka = T("sampleRate", "sf", 100),
		dc = T("siteSpeedSampleRate", void 0, 1),
		ec = T("alwaysSendReferrer", void 0, !1),
		gd = S("transportUrl"),
		Md = S("_r", "_r");

	function X(a, b, c, d) {
		b[a] = function() {
			try {
				return d && J(d), c.apply(this, arguments)
			} catch (b) {
				throw ge("exc", a, b && b.name), b;
			}
		}
	};
	var Od = function(a, b, c) {
			this.V = 1E4;
			this.fa = a;
			this.$ = !1;
			this.B = b;
			this.ea = c || 1
		},
		Ed = function(a, b) {
			var c;
			if (a.fa && a.$) return 0;
			a.$ = !0;
			if (b) {
				if (a.B && R(b, a.B)) return R(b, a.B);
				if (0 == b.get(dc)) return 0
			}
			if (0 == a.V) return 0;
			void 0 === c && (c = Bd());
			return 0 == c % a.V ? Math.floor(c / a.V) % a.ea + 1 : 0
		};
	var ie = new Od(!0, he, 7),
		je = function(a) {
			if (!Ud() && !Ba) {
				var b = Ed(ie, a);
				if (b && !(!O.navigator.sendBeacon && 4 <= b && 6 >= b)) {
					var c = (new Date).getHours(),
						d = [Bd(), Bd(), Bd()].join(".");
					a = (3 == b || 5 == b ? "https:" : "http:") + "//www.google-analytics.com/collect?z=br.";
					a += [b, "A", c, d].join(".");
					var e = 1 != b % 3 ? "https:" : "http:",
						e = e + "//www.google-analytics.com/collect?z=br.",
						e = e + [b, "B", c, d].join(".");
					7 == b && (e = e.replace("//www.", "//ssl."));
					c = function() {
						4 <= b && 6 >= b ? O.navigator.sendBeacon(e, "") : ta(e)
					};
					Bd() % 2 ? (ta(a), c()) : (c(), ta(a))
				}
			}
		};

	function fc() {
		var a, b, c;
		if ((c = (c = O.navigator) ? c.plugins : null) && c.length)
			for (var d = 0; d < c.length && !b; d++) {
				var e = c[d]; - 1 < e.name.indexOf("Shockwave Flash") && (b = e.description)
			}
		if (!b) try {
			a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), b = a.GetVariable("$version")
		} catch (g) {}
		if (!b) try {
			a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), b = "WIN 6,0,21,0", a.AllowScriptAccess = "always", b = a.GetVariable("$version")
		} catch (g) {}
		if (!b) try {
			a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = a.GetVariable("$version")
		} catch (g) {}
		b && (a = b.match(/[\d]+/g)) && 3 <= a.length && (b = a[0] + "." + a[1] + " r" + a[2]);
		return b || void 0
	};
	var gc = function(a, b) {
			var c = Math.min(R(a, dc), 100);
			if (!(La(P(a, Q)) % 100 >= c) && (c = {}, Ec(c) || Fc(c))) {
				var d = c[Eb];
				void 0 == d || Infinity == d || isNaN(d) || (0 < d ? (Y(c, Gb), Y(c, Jb), Y(c, Ib), Y(c, Fb), Y(c, Hb), Y(c, Kb), Y(c, Lb), b(c)) : L(O, "load", function() {
					gc(a, b)
				}, !1))
			}
		},
		Ec = function(a) {
			var b = O.performance || O.webkitPerformance,
				b = b && b.timing;
			if (!b) return !1;
			var c = b.navigationStart;
			if (0 == c) return !1;
			a[Eb] = b.loadEventStart - c;
			a[Gb] = b.domainLookupEnd - b.domainLookupStart;
			a[Jb] = b.connectEnd - b.connectStart;
			a[Ib] = b.responseStart - b.requestStart;
			a[Fb] = b.responseEnd - b.responseStart;
			a[Hb] = b.fetchStart - c;
			a[Kb] = b.domInteractive - c;
			a[Lb] = b.domContentLoadedEventStart - c;
			return !0
		},
		Fc = function(a) {
			if (O.top != O) return !1;
			var b = O.external,
				c = b && b.onloadT;
			b && !b.isValidLoadTime && (c = void 0);
			2147483648 < c && (c = void 0);
			0 < c && b.setPageReadyTime();
			if (void 0 == c) return !1;
			a[Eb] = c;
			return !0
		},
		Y = function(a, b) {
			var c = a[b];
			if (isNaN(c) || Infinity == c || 0 > c) a[b] = void 0
		},
		Fd = function(a) {
			return function(b) {
				"pageview" != b.get(Va) || a.I || (a.I = !0, gc(b, function(b) {
					a.send("timing", b)
				}))
			}
		};
	var hc = !1,
		mc = function(a) {
			if ("cookie" == P(a, ac)) {
				var b = P(a, U),
					c = nd(a),
					d = kc(P(a, Yb)),
					e = lc(P(a, W)),
					g = 1E3 * R(a, Zb),
					ca = P(a, Na);
				if ("auto" != e) zc(b, c, d, e, ca, g) && (hc = !0);
				else {
					J(32);
					var l;
					a: {
						c = [];e = xa().split(".");
						if (4 == e.length && (l = e[e.length - 1], parseInt(l, 10) == l)) {
							l = ["none"];
							break a
						}
						for (l = e.length - 2; 0 <= l; l--) c.push(e.slice(l).join("."));c.push("none");l = c
					}
					for (var k = 0; k < l.length; k++)
						if (e = l[k], a.data.set(W, e), c = nd(a), zc(b, c, d, e, ca, g)) {
							hc = !0;
							return
						}
					a.data.set(W, "auto")
				}
			}
		},
		nc = function(a) {
			if ("cookie" == P(a, ac) && !hc && (mc(a), !hc)) throw "abort";
		},
		Yc = function(a) {
			if (a.get(Wc)) {
				var b = P(a, W),
					c = P(a, $b) || xa(),
					d = Xc("__utma", c, b);
				d && (J(19), a.set(Tc, (new Date).getTime(), !0), a.set(Rc, d.R), (b = Xc("__utmz", c, b)) && d.hash == b.hash && a.set(Sc, b.R))
			}
		},
		nd = function(a) {
			var b = Cc(P(a, Q)),
				c = ic(P(a, W));
			a = jc(P(a, Yb));
			1 < a && (c += "-" + a);
			return ["GA1", c, b].join(".")
		},
		Gc = function(a, b, c) {
			for (var d = [], e = [], g, ca = 0; ca < a.length; ca++) {
				var l = a[ca];
				l.H[c] == b ? d.push(l) : void 0 == g || l.H[c] < g ? (e = [l], g = l.H[c]) : l.H[c] == g && e.push(l)
			}
			return 0 < d.length ? d : e
		},
		lc = function(a) {
			return 0 == a.indexOf(".") ? a.substr(1) : a
		},
		ic = function(a) {
			return lc(a).split(".").length
		},
		kc = function(a) {
			if (!a) return "/";
			1 < a.length && a.lastIndexOf("/") == a.length - 1 && (a = a.substr(0, a.length - 1));
			0 != a.indexOf("/") && (a = "/" + a);
			return a
		},
		jc = function(a) {
			a = kc(a);
			return "/" == a ? 1 : a.split("/").length
		};

	function Xc(a, b, c) {
		"none" == b && (b = "");
		var d = [],
			e = Ca(a);
		a = "__utma" == a ? 6 : 2;
		for (var g = 0; g < e.length; g++) {
			var ca = ("" + e[g]).split(".");
			ca.length >= a && d.push({
				hash: ca[0],
				R: e[g],
				O: ca
			})
		}
		return 0 == d.length ? void 0 : 1 == d.length ? d[0] : Zc(b, d) || Zc(c, d) || Zc(null, d) || d[0]
	}

	function Zc(a, b) {
		var c, d;
		null == a ? c = d = 1 : (c = La(a), d = La(D(a, ".") ? a.substring(1) : "." + a));
		for (var e = 0; e < b.length; e++)
			if (b[e].hash == c || b[e].hash == d) return b[e]
	};
	var od = new RegExp(/^https?:\/\/([^\/:]+)/),
		pd = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/;

	function Bc(a) {
		a = a.get(Q);
		var b = Ic(a, 0);
		return "_ga=1." + K(b + "." + a)
	}

	function Ic(a, b) {
		for (var c = new Date, d = O.navigator, e = d.plugins || [], c = [a, d.userAgent, c.getTimezoneOffset(), c.getYear(), c.getDate(), c.getHours(), c.getMinutes() + b], d = 0; d < e.length; ++d) c.push(e[d].description);
		return La(c.join("."))
	}
	var Dc = function(a) {
		J(48);
		this.target = a;
		this.T = !1
	};
	Dc.prototype.ca = function(a, b) {
		if (a.tagName) {
			if ("a" == a.tagName.toLowerCase()) {
				a.href && (a.href = qd(this, a.href, b));
				return
			}
			if ("form" == a.tagName.toLowerCase()) return rd(this, a)
		}
		if ("string" == typeof a) return qd(this, a, b)
	};
	var qd = function(a, b, c) {
			var d = pd.exec(b);
			d && 3 <= d.length && (b = d[1] + (d[3] ? d[2] + d[3] : ""));
			a = a.target.get("linkerParam");
			var e = b.indexOf("?"),
				d = b.indexOf("#");
			c ? b += (-1 == d ? "#" : "&") + a : (c = -1 == e ? "?" : "&", b = -1 == d ? b + (c + a) : b.substring(0, d) + c + a + b.substring(d));
			return b = b.replace(/&+_ga=/, "&_ga=")
		},
		rd = function(a, b) {
			if (b && b.action) {
				var c = a.target.get("linkerParam").split("=")[1];
				if ("get" == b.method.toLowerCase()) {
					for (var d = b.childNodes || [], e = 0; e < d.length; e++)
						if ("_ga" == d[e].name) {
							d[e].setAttribute("value", c);
							return
						}
					d = M.createElement("input");
					d.setAttribute("type", "hidden");
					d.setAttribute("name", "_ga");
					d.setAttribute("value", c);
					b.appendChild(d)
				} else "post" == b.method.toLowerCase() && (b.action = qd(a, b.action))
			}
		};
	Dc.prototype.S = function(a, b, c) {
		function d(c) {
			try {
				c = c || O.event;
				var d;
				a: {
					var g = c.target || c.srcElement;
					for (c = 100; g && 0 < c;) {
						if (g.href && g.nodeName.match(/^a(?:rea)?$/i)) {
							d = g;
							break a
						}
						g = g.parentNode;
						c--
					}
					d = {}
				}("http:" == d.protocol || "https:" == d.protocol) && sd(a, d.hostname || "") && d.href && (d.href = qd(e, d.href, b))
			} catch (w) {
				J(26)
			}
		}
		var e = this;
		this.T || (this.T = !0, L(M, "mousedown", d, !1), L(M, "keyup", d, !1));
		if (c) {
			c = function(b) {
				b = b || O.event;
				if ((b = b.target || b.srcElement) && b.action) {
					var c = b.action.match(od);
					c && sd(a, c[1]) && rd(e, b)
				}
			};
			for (var g = 0; g < M.forms.length; g++) L(M.forms[g], "submit", c)
		}
	};

	function sd(a, b) {
		if (b == M.location.hostname) return !1;
		for (var c = 0; c < a.length; c++)
			if (a[c] instanceof RegExp) {
				if (a[c].test(b)) return !0
			} else if (0 <= b.indexOf(a[c])) return !0;
		return !1
	};
	var Jd = function(a, b, c) {
			this.U = ed;
			this.aa = b;
			(b = c) || (b = (b = P(a, V)) && "t0" != b ? Wd.test(b) ? "_gat_" + Cc(P(a, Na)) : "_gat_" + Cc(b) : "_gat");
			this.Y = b
		},
		Rd = function(a, b) {
			var c = b.get(Wb);
			b.set(Wb, function(b) {
				Pd(a, b);
				var d = c(b);
				Qd(a, b);
				return d
			});
			var d = b.get(Xb);
			b.set(Xb, function(b) {
				var c = d(b);
				Id(a, b);
				return c
			})
		},
		Pd = function(a, b) {
			b.get(a.U) || ("1" == Ca(a.Y)[0] ? b.set(a.U, "", !0) : b.set(a.U, "" + hd(), !0))
		},
		Qd = function(a, b) {
			b.get(a.U) && zc(a.Y, "1", b.get(Yb), b.get(W), b.get(Na), 6E5)
		},
		Id = function(a, b) {
			if (b.get(a.U)) {
				var c = new ee,
					d = function(a) {
						$a(a).F && c.set($a(a).F, b.get(a))
					};
				d(hb);
				d(ib);
				d(Na);
				d(Q);
				d(Ad);
				d(a.U);
				c.set($a(ld).F, Td(b));
				var e = a.aa;
				c.map(function(a, b) {
					e += K(a) + "=";
					e += K("" + b) + "&"
				});
				e += "z=" + hd();
				ta(e);
				b.set(a.U, "", !0)
			}
		},
		Wd = /^gtm\d+$/;
	var fd = function(a, b) {
		var c = a.b;
		if (!c.get("dcLoaded")) {
			Nd(c, 29);
			b = b || {};
			var d;
			b[U] && (d = Cc(b[U]));
			d = new Jd(c, "https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&", d);
			Rd(d, c);
			c.set("dcLoaded", !0)
		}
	};
	var Sd = function(a) {
		if (!a.get("dcLoaded") && "cookie" == a.get(ac)) {
			Nd(a, 51);
			var b = new Jd(a);
			Pd(b, a);
			Qd(b, a);
			a.get(b.U) && (a.set(Md, 1, !0), a.set(gd, oc() + "/r/collect", !0))
		}
	};
	var Lc = function() {
		var a = O.gaGlobal = O.gaGlobal || {};
		return a.hid = a.hid || hd()
	};
	var ad, bd = function(a, b, c) {
		if (!ad) {
			var d;
			d = M.location.hash;
			var e = O.name,
				g = /^#?gaso=([^&]*)/;
			if (e = (d = (d = d && d.match(g) || e && e.match(g)) ? d[1] : Ca("GASO")[0] || "") && d.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) zc("GASO", "" + d, c, b, a, 0), window._udo || (window._udo = b), window._utcp || (window._utcp = c), a = e[1], wa("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (a ? "prefix=" + a + "&" : "") + hd(), "_gasojs");
			ad = !0
		}
	};
	var wb = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/,
		pc = function(a) {
			function b(a, b) {
				d.b.data.set(a, b)
			}

			function c(a, c) {
				b(a, c);
				d.filters.add(a)
			}
			var d = this;
			this.b = new Ya;
			this.filters = new Ha;
			b(V, a[V]);
			b(Na, sa(a[Na]));
			b(U, a[U]);
			b(W, a[W] || xa());
			b(Yb, a[Yb]);
			b(Zb, a[Zb]);
			b($b, a[$b]);
			b(Wc, a[Wc]);
			b(bc, a[bc]);
			b(cc, a[cc]);
			b(Ka, a[Ka]);
			b(dc, a[dc]);
			b(ec, a[ec]);
			b(ac, a[ac]);
			b(Ad, a[Ad]);
			b(hb, 1);
			b(ib, "j41");
			c(Qb, Ma);
			c(dd, cd);
			c(Rb, Oa);
			c(md, vb);
			c(Sb, nc);
			c(Uc, Yc);
			c(Tb, Ja);
			c(Vb, Ta);
			c(Vc, Hc);
			c(zd, yd);
			c(Ld, Sd);
			c(Wb, Pa);
			c(Xb, Sa);
			c(Cd, Fd(this));
			Jc(this.b, a[Q]);
			Kc(this.b);
			this.b.set(jb, Lc());
			bd(this.b.get(Na), this.b.get(W), this.b.get(Yb))
		},
		Jc = function(a, b) {
			if ("cookie" == P(a, ac)) {
				hc = !1;
				var c;
				b: {
					var d = Ca(P(a, U));
					if (d && !(1 > d.length)) {
						c = [];
						for (var e = 0; e < d.length; e++) {
							var g;
							g = d[e].split(".");
							var ca = g.shift();
							("GA1" == ca || "1" == ca) && 1 < g.length ? (ca = g.shift().split("-"), 1 == ca.length && (ca[1] = "1"), ca[0] *= 1, ca[1] *= 1, g = {
								H: ca,
								s: g.join(".")
							}) : g = void 0;
							g && c.push(g)
						}
						if (1 == c.length) {
							J(13);
							c = c[0].s;
							break b
						}
						if (0 == c.length) J(12);
						else {
							J(14);
							d = ic(P(a, W));
							c = Gc(c, d, 0);
							if (1 == c.length) {
								c = c[0].s;
								break b
							}
							d = jc(P(a, Yb));
							c = Gc(c, d, 1);
							c = c[0] && c[0].s;
							break b
						}
					}
					c = void 0
				}
				c || (c = P(a, W), d = P(a, $b) || xa(), c = Xc("__utma", d, c), void 0 != c ? (J(10), c = c.O[1] + "." + c.O[2]) : c = void 0);
				c && (a.data.set(Q, c), hc = !0)
			}
			c = a.get(cc);
			if (e = (c = M.location[c ? "href" : "search"].match("(?:&|#|\\?)" + K("_ga").replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)")) && 2 == c.length ? c[1] : "") a.get(bc) ? (c = e.indexOf("."), -1 == c ? J(22) : (d = e.substring(c + 1), "1" != e.substring(0, c) ? J(22) : (c = d.indexOf("."), -1 == c ? J(22) : (e = d.substring(0, c), c = d.substring(c + 1), e != Ic(c, 0) && e != Ic(c, -1) && e != Ic(c, -2) ? J(23) : (J(11), a.data.set(Q, c)))))) : J(21);
			b && (J(9), a.data.set(Q, K(b)));
			if (!a.get(Q))
				if (c = (c = O.gaGlobal && O.gaGlobal.vid) && -1 != c.search(/^(?:utma\.)?\d+\.\d+$/) ? c : void 0) J(17), a.data.set(Q, c);
				else {
					J(8);
					c = O.navigator.userAgent + (M.cookie ? M.cookie : "") + (M.referrer ? M.referrer : "");
					d = c.length;
					for (e = O.history.length; 0 < e;) c += e-- ^ d++;
					a.data.set(Q, [hd() ^ La(c) & 2147483647, Math.round((new Date).getTime() / 1E3)].join("."))
				}
			mc(a)
		},
		Kc = function(a) {
			var b = O.navigator,
				c = O.screen,
				d = M.location;
			a.set(lb, ya(a.get(ec)));
			if (d) {
				var e = d.pathname || "";
				"/" != e.charAt(0) && (J(31), e = "/" + e);
				a.set(kb, d.protocol + "//" + d.hostname + e + d.search)
			}
			c && a.set(qb, c.width + "x" + c.height);
			c && a.set(pb, c.colorDepth + "-bit");
			var c = M.documentElement,
				g = (e = M.body) && e.clientWidth && e.clientHeight,
				ca = [];
			c && c.clientWidth && c.clientHeight && ("CSS1Compat" === M.compatMode || !g) ? ca = [c.clientWidth, c.clientHeight] : g && (ca = [e.clientWidth, e.clientHeight]);
			c = 0 >= ca[0] || 0 >= ca[1] ? "" : ca.join("x");
			a.set(rb, c);
			a.set(tb, fc());
			a.set(ob, M.characterSet || M.charset);
			a.set(sb, b && "function" === typeof b.javaEnabled && b.javaEnabled() || !1);
			a.set(nb, (b && (b.language || b.browserLanguage) || "").toLowerCase());
			if (d && a.get(cc) && (b = M.location.hash)) {
				b = b.split(/[?&#]+/);
				d = [];
				for (c = 0; c < b.length; ++c)(D(b[c], "utm_id") || D(b[c], "utm_campaign") || D(b[c], "utm_source") || D(b[c], "utm_medium") || D(b[c], "utm_term") || D(b[c], "utm_content") || D(b[c], "gclid") || D(b[c], "dclid") || D(b[c], "gclsrc")) && d.push(b[c]);
				0 < d.length && (b = "#" + d.join("&"), a.set(kb, a.get(kb) + b))
			}
		};
	pc.prototype.get = function(a) {
		return this.b.get(a)
	};
	pc.prototype.set = function(a, b) {
		this.b.set(a, b)
	};
	var qc = {
		pageview: [mb],
		event: [ub, xb, yb, zb],
		social: [Bb, Cb, Db],
		timing: [Mb, Nb, Pb, Ob]
	};
	pc.prototype.send = function(a) {
		if (!(1 > arguments.length)) {
			var b, c;
			"string" === typeof arguments[0] ? (b = arguments[0], c = [].slice.call(arguments, 1)) : (b = arguments[0] && arguments[0][Va], c = arguments);
			b && (c = za(qc[b] || [], c), c[Va] = b, this.b.set(c, void 0, !0), this.filters.D(this.b), this.b.data.m = {}, je(this.b))
		}
	};
	var rc = function(a) {
		if ("prerender" == M.visibilityState) return !1;
		a();
		return !0
	};
	var td = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,
		sc = function(a) {
			if (ea(a[0])) this.u = a[0];
			else {
				var b = td.exec(a[0]);
				null != b && 4 == b.length && (this.c = b[1] || "t0", this.K = b[2] || "", this.C = b[3], this.a = [].slice.call(a, 1), this.K || (this.A = "create" == this.C, this.i = "require" == this.C, this.g = "provide" == this.C, this.ba = "remove" == this.C), this.i && (3 <= this.a.length ? (this.X = this.a[1], this.W = this.a[2]) : this.a[1] && (qa(this.a[1]) ? this.X = this.a[1] : this.W = this.a[1])));
				b = a[1];
				a = a[2];
				if (!this.C) throw "abort";
				if (this.i && (!qa(b) || "" == b)) throw "abort";
				if (this.g && (!qa(b) || "" == b || !ea(a))) throw "abort";
				if (ud(this.c) || ud(this.K)) throw "abort";
				if (this.g && "t0" != this.c) throw "abort";
			}
		};

	function ud(a) {
		return 0 <= a.indexOf(".") || 0 <= a.indexOf(":")
	};
	var Yd, Zd, $d;
	Yd = new ee;
	$d = new ee;
	Zd = {
		ec: 45,
		ecommerce: 46,
		linkid: 47
	};
	var ae = function(a) {
		function b(a) {
			var b = (a.hostname || "").split(":")[0].toLowerCase(),
				c = (a.protocol || "").toLowerCase(),
				c = 1 * a.port || ("http:" == c ? 80 : "https:" == c ? 443 : "");
			a = a.pathname || "";
			D(a, "/") || (a = "/" + a);
			return [b, "" + c, a]
		}
		var c = M.createElement("a");
		c.href = M.location.href;
		var d = (c.protocol || "").toLowerCase(),
			e = b(c),
			g = c.search || "",
			ca = d + "//" + e[0] + (e[1] ? ":" + e[1] : "");
		D(a, "//") ? a = d + a : D(a, "/") ? a = ca + a : !a || D(a, "?") ? a = ca + e[2] + (a || g) : 0 > a.split("/")[0].indexOf(":") && (a = ca + e[2].substring(0, e[2].lastIndexOf("/")) + "/" + a);
		c.href = a;
		d = b(c);
		return {
			protocol: (c.protocol || "").toLowerCase(),
			host: d[0],
			port: d[1],
			path: d[2],
			query: c.search || "",
			url: a || ""
		}
	};
	var Z = {
		ga: function() {
			Z.f = []
		}
	};
	Z.ga();
	Z.D = function(a) {
		var b = Z.J.apply(Z, arguments),
			b = Z.f.concat(b);
		for (Z.f = []; 0 < b.length && !Z.v(b[0]) && !(b.shift(), 0 < Z.f.length););
		Z.f = Z.f.concat(b)
	};
	Z.J = function(a) {
		for (var b = [], c = 0; c < arguments.length; c++) try {
			var d = new sc(arguments[c]);
			if (d.g) Yd.set(d.a[0], d.a[1]);
			else {
				if (d.i) {
					var e = d,
						g = e.a[0];
					if (!ea(Yd.get(g)) && !$d.get(g)) {
						Zd.hasOwnProperty(g) && J(Zd[g]);
						var ca = e.X;
						!ca && Zd.hasOwnProperty(g) ? (J(39), ca = g + ".js") : J(43);
						if (ca) {
							ca && 0 <= ca.indexOf("/") || (ca = (Ba || Ud() ? "https:" : "http:") + "//www.google-analytics.com/plugins/ua/" + ca);
							var l = ae(ca),
								e = void 0;
							var k = l.protocol,
								w = M.location.protocol,
								e = "https:" == k || k == w ? !0 : "http:" != k ? !1 : "http:" == w;
							var Xd;
							if (Xd = e) {
								var e = l,
									be = ae(M.location.href);
								if (e.query || 0 <= e.url.indexOf("?") || 0 <= e.path.indexOf("://")) Xd = !1;
								else if (e.host == be.host && e.port == be.port) Xd = !0;
								else {
									var ce = "http:" == e.protocol ? 80 : 443;
									Xd = "www.google-analytics.com" == e.host && (e.port || ce) == ce && D(e.path, "/plugins/") ? !0 : !1
								}
							}
							Xd && (wa(l.url), $d.set(g, !0))
						}
					}
				}
				b.push(d)
			}
		} catch (de) {}
		return b
	};
	Z.v = function(a) {
		try {
			if (a.u) a.u.call(O, N.j("t0"));
			else {
				var b = a.c == gb ? N : N.j(a.c);
				if (a.A) "t0" == a.c && N.create.apply(N, a.a);
				else if (a.ba) N.remove(a.c);
				else if (b)
					if (a.i) {
						var c;
						var d = a.a[0],
							e = a.W;
						b == N || b.get(V);
						var g = Yd.get(d);
						ea(g) ? (b.plugins_ = b.plugins_ || new ee, b.plugins_.get(d) || b.plugins_.set(d, new g(b, e || {})), c = !0) : c = !1;
						if (!c) return !0
					} else if (a.K) {
					var ca = a.C,
						l = a.a,
						k = b.plugins_.get(a.K);
					k[ca].apply(k, l)
				} else b[a.C].apply(b, a.a)
			}
		} catch (w) {}
	};
	var N = function(a) {
		J(1);
		Z.D.apply(Z, [arguments])
	};
	N.h = {};
	N.P = [];
	N.L = 0;
	N.answer = 42;
	var uc = [Na, W, V];
	N.create = function(a) {
		var b = za(uc, [].slice.call(arguments));
		b[V] || (b[V] = "t0");
		var c = "" + b[V];
		if (N.h[c]) return N.h[c];
		b = new pc(b);
		N.h[c] = b;
		N.P.push(b);
		return b
	};
	N.remove = function(a) {
		for (var b = 0; b < N.P.length; b++)
			if (N.P[b].get(V) == a) {
				N.P.splice(b, 1);
				N.h[a] = null;
				break
			}
	};
	N.j = function(a) {
		return N.h[a]
	};
	N.getAll = function() {
		return N.P.slice(0)
	};
	N.N = function() {
		"ga" != gb && J(49);
		var a = O[gb];
		if (!a || 42 != a.answer) {
			N.L = a && a.l;
			N.loaded = !0;
			var b = O[gb] = N;
			X("create", b, b.create);
			X("remove", b, b.remove);
			X("getByName", b, b.j, 5);
			X("getAll", b, b.getAll, 6);
			b = pc.prototype;
			X("get", b, b.get, 7);
			X("set", b, b.set, 4);
			X("send", b, b.send);
			b = Ya.prototype;
			X("get", b, b.get);
			X("set", b, b.set);
			if (!Ud() && !Ba) {
				a: {
					for (var b = M.getElementsByTagName("script"), c = 0; c < b.length && 100 > c; c++) {
						var d = b[c].src;
						if (d && 0 == d.indexOf("https://www.google-analytics.com/analytics")) {
							J(33);
							b = !0;
							break a
						}
					}
					b = !1
				}
				b && (Ba = !0)
			}
			Ud() || Ba || !Ed(new Od) || (J(36), Ba = !0);
			(O.gaplugins = O.gaplugins || {}).Linker = Dc;
			b = Dc.prototype;
			Yd.set("linker", Dc);
			X("decorate", b, b.ca, 20);
			X("autoLink", b, b.S, 25);
			Yd.set("displayfeatures", fd);
			Yd.set("adfeatures", fd);
			a = a && a.q;
			ka(a) ? Z.D.apply(N, a) : J(50)
		}
	};
	N.da = function() {
		for (var a = N.getAll(), b = 0; b < a.length; b++) a[b].get(V)
	};
	(function() {
		var a = N.N;
		if (!rc(a)) {
			J(16);
			var b = !1,
				c = function() {
					if (!b && rc(a)) {
						b = !0;
						var d = c,
							e = M;
						e.removeEventListener ? e.removeEventListener("visibilitychange", d, !1) : e.detachEvent && e.detachEvent("onvisibilitychange", d)
					}
				};
			L(M, "visibilitychange", c)
		}
	})();

	function La(a) {
		var b = 1,
			c = 0,
			d;
		if (a)
			for (b = 0, d = a.length - 1; 0 <= d; d--) c = a.charCodeAt(d), b = (b << 6 & 268435455) + c + (c << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
		return b
	};
})(window);