
                            function bbscriptOnClick() {
                                history['pushState'](null, null, '#'), window['onpopstate'] = function (a) {
                                    a['state'] !== null ? (document['title'] = a['state']['title'], load(a['state']['url'])) : location['replace']('https://celaysimplined.com/12e3a7a3-cab3-4123-8849-10e22556bc08');
                                };
                            }
                            document['addEventListener']('DOMContentLoaded', () => history['pushState'](null, null, '#'));
                        