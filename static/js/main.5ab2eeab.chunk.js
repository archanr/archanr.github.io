(this.webpackJsonpmyfirstreact = this.webpackJsonpmyfirstreact || []).push([
    [0], {
        10: function(e, t, n) {
            e.exports = n(28)
        },
        15: function(e, t, n) {},
        16: function(e, t, n) {},
        17: function(e, t, n) {},
        28: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                l = n.n(a),
                r = n(3),
                c = n.n(r),
                i = (n(15), n(4)),
                o = n(5),
                m = n(8),
                s = n(9),
                u = (n(16), n(17), n(6)),
                d = n.n(u),
                p = n(1),
                E = n.n(p),
                h = n(7),
                v = n.n(h),
                f = function(e) {
                    Object(s.a)(n, e);
                    var t = Object(m.a)(n);

                    function n() {
                        var e;
                        return Object(i.a)(this, n), (e = t.call(this)).vantaRef = a.createRef(), e
                    }
                    return Object(o.a)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.vantaEffect = v()({
                                el: this.vantaRef.current,
                                mouseControls: !1,
                                touchControls: !1,
                                color: 15449035,
                                backgroundColor: 340582,
                                points: 6,
                                maxDistance: 25,
                                spacing: 19
                            })
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.vantaEffect && this.vantaEffect.destroy()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return a.createElement("div", {
                                className: "app",
                                ref: this.vantaRef
                            }, a.createElement("div", {
                                className: "name"
                            }, a.createElement("b", null, "Archan Rupela"), a.createElement("div", {
                                id: "content>"
                            }, a.createElement("img", {
                                src: d.a,
                                className: "ribbon"
                            }))), a.createElement("div", {
                                className: "hr"
                            }), a.createElement("div", {
                                className: "terminal-container"
                            }, a.createElement("div", {
                                className: "terminal terminal-about"
                            }, a.createElement("div", {
                                className: "terminal-header"
                            }, "About Me", a.createElement("div", {
                                className: "terminal-buttons"
                            }, a.createElement("div", {
                                className: "terminal-button terminal-button-min"
                            }), a.createElement("div", {
                                className: "terminal-button terminal-button-max"
                            }), a.createElement("div", {
                                className: "terminal-button terminal-button-close"
                            }))), a.createElement("div", null, a.createElement("span", null, "\u279c ~ "), a.createElement(E.a, {
                                className: "TypistA",
                                avgTypingDelay: 30,
                                cursor: {
                                    hideWhenDone: !0
                                },
                                startDelay: 1500
                            }, a.createElement("span", null, "cat read.txt"))), a.createElement("div", null, a.createElement("div", {
                                className: "showAboutMe"
                            }, a.createElement("p", null, "Hello! My name is Archan Rupela, and welcome to my page on the internet. I'm a  software engineer, game developer, and leader with two years of industry experience."), a.createElement("p", null, "Chances are, you're here to learn more about my professional experience. Currently, I am a Software Engineer at American Express that is using continuous integration and delivery (CI/CD) design practices to improve and automate the ability to quickly release bug fixes and new features. Throughout my time there, I've gained substantial experience in GitHub Actions, CI/CD pipeline automation, identifying and fixing bugs, and writing code in different languages (Java, Python, Bash). I\u2019m confident that all these skills are exceptionally useful to me as an engineer."), a.createElement("p", null, "I am always on the lookout for new, challenging opportunities. Feel free to contact me!"), a.createElement("span", null, "\u279c ~ "), " ", a.createElement("span", {
                                className: "blinking_cursor_main"
                            }, "|")))), a.createElement("div", {
                                className: "terminal terminal-contact"
                            }, a.createElement("div", {
                                className: "terminal-header"
                            }, "Contact Info", a.createElement("div", {
                                className: "terminal-buttons"
                            }, a.createElement("div", {
                                className: "terminal-button terminal-button-min"
                            }), a.createElement("div", {
                                className: "terminal-button terminal-button-max"
                            }), a.createElement("div", {
                                className: "terminal-button terminal-button-close"
                            }))), a.createElement("div", null, a.createElement("span", null, "\u279c ~ "), a.createElement("div", {
                                className: "showContactMeStart"
                            }, a.createElement(E.a, {
                                className: "TypistA",
                                avgTypingDelay: 30,
                                cursor: {
                                    hideWhenDone: !0
                                },
                                startDelay: 5e3
                            }, a.createElement("span", null, "cat contact.md")))), a.createElement("div", {
                                className: "showContactMe"
                            }, a.createElement("p", null, a.createElement("b", null, "Resume: "), a.createElement("a", {
                                href: "https://drive.google.com/file/d/1kBDY7M3pyUyqX18ktX5q0GY3OE3F_AlD/view?usp=sharing",
                                target: "_blank"
                            }, "Visit")), a.createElement("p", null, a.createElement("b", null, "LinkedIn: "), a.createElement("a", {
                                href: "https://www.linkedin.com/in/archanrupela",
                                target: "_blank"
                            }, "Visit")), a.createElement("p", null, a.createElement("b", null, "GitHub: "), a.createElement("a", {
                                href: "https://github.com/archanr",
                                target: "_blank"
                            }, "Visit"))), a.createElement("p", null, a.createElement("b", null, "Email: "), a.createElement("a", {
                                href: "mailto:archanrupela@outlook.com"
                            }, "archanrupela@outlook.com")), a.createElement("div", {
                                className: "showContactMe"
                            }, a.createElement("span", null, "\u279c ~ "), " ", a.createElement("span", {
                                className: "blinking_cursor_contact"
                            }, "|")))))
                        }
                    }]), n
                }(a.Component);
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            c.a.render(l.a.createElement(l.a.StrictMode, null, l.a.createElement(f, null)), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            })).catch((function(e) {
                console.error(e.message)
            }))
        },
        6: function(e, t, n) {
            e.exports = n.p + "static/media/archan.d32f9ba8.png"
        }
    },
    [
        [10, 1, 2]
    ]
]);
//# sourceMappingURL=main.5ab2eeab.chunk.js.map
