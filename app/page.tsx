'use client';

import { 
  Sparkles, 
  TrendingUp, 
  Clock, 
  Target, 
  Brain, 
  Zap, 
  CheckCircle2, 
  XCircle, 
  Shield, 
  CreditCard, 
  Rocket,
  Users,
  MessageSquare,
  BarChart3,
  Lightbulb,
  BookOpen,
  Calendar
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          {/* Badge Promo */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400 text-blue-900 rounded-full text-sm font-bold animate-pulse">
              <Sparkles className="w-4 h-4" />
              PROMO DE LANCEMENT
            </span>
          </div>

          {/* Titre */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight">
            Transformez Votre Expertise en Revenus Grâce à l'IA
          </h1>

          {/* Sous-titre */}
          <p className="text-xl sm:text-2xl text-center mb-8 text-white/90 max-w-3xl mx-auto">
            Créez du contenu viral, automatisez votre présence en ligne et monétisez votre savoir-faire en moins de 30 jours
          </p>

          {/* Prix */}
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="text-center">
              <p className="text-sm uppercase tracking-wide mb-2 text-white/80">Prix normal</p>
              <p className="text-3xl line-through opacity-60 mb-4">75 000 FCFA</p>
              <p className="text-sm uppercase tracking-wide mb-2 text-amber-300 font-bold">Prix de lancement</p>
              <p className="text-6xl font-bold mb-2">30 000 <span className="text-3xl">FCFA</span></p>
              <p className="text-red-300 font-semibold flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                Offre limitée - Expire bientôt
              </p>
            </div>
          </div>

          {/* CTA Principal */}
          <div className="text-center">
            <button className="bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold text-lg px-12 py-5 rounded-full shadow-2xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-3">
              <Rocket className="w-6 h-6" />
              Rejoindre la Formation Maintenant
            </button>
            <p className="text-sm mt-4 text-white/70">✓ Accès immédiat • ✓ Paiement sécurisé</p>
          </div>
        </div>
      </section>

      {/* SECTION PROBLÈMES */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Vous Reconnaissez-Vous Dans Ces Situations ?
          </h2>
          <p className="text-xl text-gray-600">Ces obstacles vous empêchent de développer votre activité en ligne</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <XCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Manque d'idées de contenu</h3>
                <p className="text-gray-700">Vous passez des heures devant une page blanche sans savoir quoi publier</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <Clock className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Perte de temps énorme</h3>
                <p className="text-gray-700">Créer du contenu vous prend tellement de temps que vous négligez votre cœur de métier</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <TrendingUp className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Faible engagement</h3>
                <p className="text-gray-700">Vos publications ne génèrent ni likes, ni commentaires, ni clients</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <Brain className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">L'IA reste un mystère</h3>
                <p className="text-gray-700">Vous entendez parler de ChatGPT partout mais ne savez pas comment l'utiliser concrètement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION TRANSFORMATION */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Imaginez Votre Vie Après Cette Formation
            </h2>
            <p className="text-xl text-gray-600">Devenez un créateur de contenu efficace et rentable</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Créez en 10 minutes</h3>
              <p className="text-gray-600">Ce qui vous prenait des heures se fait maintenant en quelques minutes grâce à l'IA</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Plus jamais à court d'idées</h3>
              <p className="text-gray-600">Générez des semaines de contenu pertinent en une session</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Contenu qui convertit</h3>
              <p className="text-gray-600">Apprenez à créer du contenu qui attire réellement des clients payants</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Organisation claire</h3>
              <p className="text-gray-600">Un système simple pour rester régulier sans stress</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Résultats mesurables</h3>
              <p className="text-gray-600">Voyez votre engagement et vos revenus augmenter rapidement</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Liberté retrouvée</h3>
              <p className="text-gray-600">Concentrez-vous sur votre business pendant que l'IA travaille pour vous</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA INTERMÉDIAIRE */}
      <section className="bg-blue-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Rejoignez les créateurs qui transforment leur activité avec l'IA
          </h3>
          <button className="bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-3">
            <Rocket className="w-5 h-5" />
            Oui, je veux accéder à la formation
          </button>
        </div>
      </section>

      {/* SECTION CONTENU */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ce Que Vous Allez Apprendre
          </h2>
          <p className="text-xl text-gray-600">Un programme complet et immédiatement applicable</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white border-2 border-blue-100 rounded-xl p-8 hover:border-blue-300 transition-colors">
            <div className="w-14 h-14 bg-blue-700 rounded-xl flex items-center justify-center mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Module 1 : IA & Création</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Maîtrisez ChatGPT pour la création de contenu</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Les prompts qui génèrent du contenu viral</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Autres outils IA indispensables (images, vidéos)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-amber-100 rounded-xl p-8 hover:border-amber-300 transition-colors">
            <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Module 2 : Génération d'Idées</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Trouvez des dizaines d'idées en quelques minutes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Adaptez le contenu à votre audience cible</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Calendrier éditorial automatisé</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-blue-100 rounded-xl p-8 hover:border-blue-300 transition-colors">
            <div className="w-14 h-14 bg-blue-700 rounded-xl flex items-center justify-center mb-6">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Module 3 : Rédaction & Posts</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Rédigez des posts captivants en 5 minutes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Formules de copywriting qui vendent</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Adaptez votre contenu pour chaque plateforme</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-50 to-amber-50 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <BookOpen className="w-8 h-8 text-blue-900 flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">BONUS : Organisation & Régularité</h4>
              <p className="text-gray-700">Système complet pour rester régulier sans y passer des heures. Templates, workflows et routines clés en main.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION POUR QUI */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Cette Formation Est-Elle Faite Pour Vous ?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Pour qui */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">✅ Parfait pour vous si :</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Vous êtes entrepreneur, freelance ou créateur de contenu</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Vous voulez développer votre présence en ligne</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Vous manquez de temps pour créer du contenu</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Vous voulez apprendre à utiliser l'IA concrètement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Vous êtes prêt(e) à passer à l'action rapidement</span>
                </li>
              </ul>
            </div>

            {/* Pour qui pas */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <XCircle className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">❌ Pas fait pour vous si :</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Vous cherchez une solution miracle sans effort</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Vous n'êtes pas prêt(e) à investir dans votre développement</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Vous êtes déjà expert(e) en IA et marketing de contenu</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Vous n'avez aucune activité à promouvoir</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Vous préférez rester dans votre zone de confort</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION CRÉDIBILITÉ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 sm:p-12 border-2 border-blue-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Qui suis-je ?</h2>
              <p className="text-blue-900 font-semibold">Votre formateur</p>
            </div>
          </div>
          
          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              Je suis praticien du marketing digital et passionné d'intelligence artificielle depuis plusieurs années. 
              J'ai aidé des dizaines d'entrepreneurs et créateurs à développer leur présence en ligne.
            </p>
            <p>
              J'utilise quotidiennement l'IA pour créer du contenu, automatiser mes processus et générer des résultats 
              concrets pour mes projets et ceux de mes clients.
            </p>
            <p className="font-semibold text-blue-900">
              Cette formation concentre toutes les stratégies et techniques que j'utilise au quotidien, 
              simplifiées pour que vous puissiez les appliquer immédiatement.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">5+</div>
              <div className="text-gray-600">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">100+</div>
              <div className="text-gray-600">Projets accompagnés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">24/7</div>
              <div className="text-gray-600">Utilisation de l'IA</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION OFFRE & PRIX */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-900 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Tout Ce Que Vous Recevez Aujourd'hui
            </h2>
            <p className="text-xl text-white/90">Un accès complet pour transformer votre création de contenu</p>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-2xl">
            <ul className="space-y-5 mb-8">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">Module 1 :</span>
                  <span className="text-gray-700"> Maîtrise de l'IA pour la création de contenu</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">Module 2 :</span>
                  <span className="text-gray-700"> Génération illimitée d'idées de contenu</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">Module 3 :</span>
                  <span className="text-gray-700"> Rédaction de posts qui convertissent</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">Bonus :</span>
                  <span className="text-gray-700"> Système d'organisation et templates prêts à l'emploi</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">Accès :</span>
                  <span className="text-gray-700"> Immédiat et à vie à tout le contenu</span>
                </div>
              </li>
            </ul>

            <div className="border-t-2 border-gray-200 pt-8">
              <div className="text-center mb-6">
                <p className="text-gray-600 mb-2">Valeur normale de la formation</p>
                <p className="text-4xl font-bold text-gray-400 line-through mb-4">75 000 FCFA</p>
                
                <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6 mb-6">
                  <p className="text-sm uppercase tracking-wide text-amber-800 font-bold mb-2">
                    Prix de lancement exceptionnel
                  </p>
                  <p className="text-5xl sm:text-6xl font-bold text-gray-900 mb-2">
                    30 000 <span className="text-3xl">FCFA</span>
                  </p>
                  <p className="text-amber-800 font-semibold">
                    Soit 60% de réduction - Seulement pour les premiers inscrits
                  </p>
                </div>

                <p className="text-gray-600 text-sm mb-6">
                  Cette offre de lancement est valable uniquement pour les premiers participants. 
                  Le prix reviendra à 75 000 FCFA très prochainement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION RASSURANCE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Une Décision Sans Risque
          </h2>
          <p className="text-xl text-gray-600">Votre satisfaction est notre priorité</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Accès Immédiat</h3>
            <p className="text-gray-600">
              Dès votre inscription validée, vous recevez vos accès par email. Commencez dans les 5 prochaines minutes.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Paiement 100% Sécurisé</h3>
            <p className="text-gray-600">
              Vos données sont protégées. Nous utilisons les meilleures technologies de sécurité pour vos transactions.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Garantie Satisfait</h3>
            <p className="text-gray-600">
              Si vous appliquez les méthodes et ne voyez aucun résultat, contactez-nous. Votre satisfaction compte.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Prêt(e) à Transformer Votre Création de Contenu ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez dès maintenant Creator To Cash et commencez à créer du contenu viral grâce à l'IA
          </p>

          {/* Prix Final */}
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-8 max-w-md mx-auto mb-8">
            <p className="text-white/70 mb-2">Prix normal</p>
            <p className="text-2xl text-white/50 line-through mb-4">75 000 FCFA</p>
            <p className="text-amber-300 font-bold mb-2">Prix de lancement</p>
            <p className="text-6xl font-bold text-white mb-2">30 000 <span className="text-2xl">FCFA</span></p>
            <div className="flex items-center justify-center gap-2 text-red-300 font-semibold">
              <Clock className="w-5 h-5" />
              <span>Offre limitée aux premiers inscrits</span>
            </div>
          </div>

          {/* Bouton Final */}
          <button className="bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold text-xl px-16 py-6 rounded-full shadow-2xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-3 mb-6">
            <Rocket className="w-7 h-7" />
            Oui, je rejoins Creator To Cash maintenant
          </button>

          <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              Accès immédiat
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              Paiement sécurisé
            </span>
            <span className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-amber-400" />
              Prix de lancement
            </span>
          </div>

          <p className="text-white/60 mt-8 text-sm">
            En vous inscrivant, vous acceptez nos conditions générales de vente
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white/60 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-sm">
          <p>© 2026 Creator To Cash. Tous droits réservés.</p>
          <p className="mt-2">Une formation pour les créateurs qui veulent passer à l'action avec l'IA</p>
        </div>
      </footer>
    </div>
  );
}
