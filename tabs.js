(function () {


    var afficherOnglet = function (a, annimation) {
        if (annimation === undefined) {
            animation = true

        }
        var li = a.parentNode
        var div = a.parentNode.parentNode.parentNode
        var activeTab = div.querySelector('.tab-content.active')
        var aAfficher = div.querySelector(a.getAttribute('href'))

        if (li.classList.contains('active')) {
            return false
        }

        //on retire la classe active sur l onglet
        div.querySelector('.tabs .active').classList.remove('active')

        //j'ajoute la classe active a l'onglet actuel
        li.classList.add('active')

        if (annimation) {
            //on ajoute la classe fade sur l element actif

            activeTab.classList.add('fade')
            activeTab.classList.remove('in')
            var transitionend = function () {
                //      on retire la classe fade et active
                this.classList.remove('fade')
                this.classList.remove('active')
                //      on ajoute la class active et fade a l'élément affiché
                aAfficher.classList.add('active')
                aAfficher.classList.add('fade')
                aAfficher.offsetWidth
                aAfficher.classList.add('in')
                activeTab.removeEventlistener('transitionend', transitionend)
            
               


            }
            //a la fin de l annimation
            activeTab.addEventListener('transitionend', transitionend)
        } else {
            aAfficher.classList.add('active')
            activeTab.classList.remove('active')
        }
    }


    var tabs = document.querySelectorAll('.tabs a')
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function (e) {
            afficherOnglet(this, true)



        })
    }


    var change = function () {
        // je recupere le hash
        var hash = window.location.hash
        //ajouter la classe active sur le lien href= hash
        var a = document.querySelector('a[href="' + hash + '"]')
        if (a !== null && !a.classList.contains('active')) {
            afficherOnglet(a, false)


        }

    }
    window.addEventListener('haschchange', change)
    change()
})()