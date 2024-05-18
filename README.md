<div align="center">

<h1> amodgjs</h1>
<span> the first free source code framework for create easily mod menus or cheats for any platform </span>

---

<h2> features </h2>

</div>

<img src="https://github.com/xlitus/amodgjs/assets/140287817/10787ca0-e62f-48f9-b535-9c47fcd6626b" height="260px" align="right">


-  resizable and inputable
-  a lot of options
-  core included for interventions
-  easy to import, only one command

---

<div align="left">

<h3> how to use it </h3>

```js
fetch(
        "https://xlitus.github.io/amodgjs/src/amodg.js")
    .then((t => t.text()))
    .then((text => eval(text)))
    .then((() =>
    {
        const t = modGUI
            .createMenu(
                "cheats",
                "main-menu",
                "absolute",
                "10px", "10px");
        modGUI.addText(t,
                "› github.com/atlanta-k/cheats"
                ), modGUI
            .addButton(t,
                "button1", (
                () => mark(
                        "button 1 clicked"
                        ))),
            modGUI.addButton(t,
                "button2", (
                () => mark(
                        "button 2 clicked"
                        ))),
            modGUI.addSlider(t,
                "slider 1", 1,
                100, 1, (t =>
                    mark(
                        `slide 1: ${t}`
                        )));
        modGUI
            .createLiveOverlay(
                "atlanta");
        modGUI.render()
    }));
```

</div>
