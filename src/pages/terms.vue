<template>
  <div class="prose pt-20">
    <h1>{{ t("heading") }}</h1>
    <p>{{ t("message") }}</p>
<!--    <p>Stand: 8. August 2021</p>-->
    <section>
      <h2>1. Generelles</h2>
      <ol>
        <li>Die nachfolgenden Bestimmungen gelten für alle zwischen Moritz Ruth und dem Auftraggeber geschlossenen Verträge.</li>
        <li>Abweichende, widersprüchliche oder ergänzende Allgemeine Geschäftsbedingungen des Auftraggebers gelten nur nach ausdrücklicher, schriftlicher Zustimmung von Moritz Ruth.</li>
        <li>Änderungen und Ergänzungen des Vertrags bedürfen der Schriftform, um wirksam zu sein.</li>
      </ol>
    </section>
    <section>
      <h2>2. Auftragsdurchführung</h2>
      <ol>
        <li>Moritz Ruth führt den Auftrag in eigener Verantwortung durch und hat Gestaltungsfreiheit im Rahmen dessen.</li>
        <li>Handelt es sich um einen Werkvertrag, sind in der Konzeptions- und Entwurfsphase zwei Korrekturschleifen zulässig.</li>
        <li>Die Mehrkosten durch eventuelle, von der Leistungsbeschreibung im Angebot abweichende Änderungswünsche hat der Auftraggeber zu tragen.</li>
        <li>Wurde dem Auftraggeber die Fertigstellung einer Werkleistung in Textform mitgeteilt, hat er 14 Tage Zeit, die Abnahme zu verweigern. Tut er dies nicht, gilt die Leistung als abgenommen.</li>
        <li>Moritz Ruth ist nicht verpflichtet, Quellcode und offene Dateien herauszugeben. Ist dies dennoch gewünscht, ist es schriftlich zu vereinbaren und gesondert zu vergüten.</li>
        <li>Moritz Ruth bestimmt den Tätigkeitsort nach freiem Ermessen.</li>
        <li>Moritz Ruth steht es frei, auch für andere Auftraggeber tätig zu werden.</li>
        <li>Moritz Ruth unterliegt keinem Weisungs- oder Direktionsrecht des Auftraggebers.</li>
        <li>Ein sozialversicherungspflichtiges Arbeitsverhältnis wird durch den Vertrag nicht begründet.</li>
        <li>Moritz Ruth ist es gestattet, den Vertrag auch unter Zuhilfenahme von Erfüllungsgehilfen zu erfüllen.</li>
        <li>Das Recht zum Rücktritt und Schadensersatz anstelle der ganzen Leistung besteht nur bei erheblichen Mängeln.</li>
      </ol>
    </section>
    <section>
      <h2>3. Pflichten des Auftraggebers</h2>
      <ol>
        <li>Der Auftraggeber ist verpflichtet, Moritz Ruth sämtliche zur Erfüllung des Vertrags erforderlichen Daten und Dateien zur Verfügung zu stellen.</li>
        <li>Der Auftraggeber ist zum Ersatz von Schäden, die Moritz Ruth durch Schadprogramme in den vom Auftraggeber bereitgestellten Dateien und Daten entstehen, verpflichtet.</li>
        <li>Das Anfertigen von Sicherungskopien liegt allein in der Verantwortung des Auftraggebers.</li>
        <li>Ist zur Erfüllung des Auftrags die Mitwirkung des Auftraggebers erforderlich, muss dieser seiner Mitwirkungspflicht innerhalb von 14 Tagen nach Aufforderung durch Moritz Ruth nachzukommen. Andernfalls kann Moritz Ruth den Vertrag kündigen. Sein Entschädigungsanspruch nach § 642 BGB bleibt hiervon unberührt.</li>
      </ol>
    </section>
    <section>
      <h2>4. Vergütung</h2>
      <ol>
        <li>Die Vergütung ist sofort zum Zeitpunkt der ordnungsgemäßen Rechnungsstellung fällig.</li>
        <li>Grundsätzlich gilt eine Zahlungsfrist von 14 Tagen.</li>
      </ol>
    </section>
    <section>
      <h2>Nutzungsrechte</h2>
      <ol>
        <li>Moritz Ruth ist es erlaubt, die im Rahmen des Auftrags entstandenen Ergebnisse zur Selbstdarstellung zu verwenden (z. B. auf einer Website). Zudem darf er den Auftraggeber als Referenz nennen und in diesem Zuge auch dessen Logo verwenden.</li>
        <li>Moritz Ruth überträgt nur die Nutzungsrechte, die zur Erfüllung des Vertrages erforderlich sind.</li>
      </ol>
    </section>
    <section>
      <h2>Haftung</h2>
      <ol>
        <li>Moritz Ruth haftet dem Auftraggeber gegenüber für die von ihm vorsätzlich oder grob fahrlässig verursachten Schäden sowie bei der Verletzung von Leben, Körper oder Gesundheit.</li>
        <li>Moritz Ruth haftet nicht bei leichter Fahrlässigkeit, außer es handelt sich um die Verletzung wesentlicher Vertragspflichten nach den gesetzlichen Bestimmungen, wobei wesentliche Vertragspflichten solche sind, deren Erfüllung die ordnungsgemäße Durchführung des Vertrages überhaupt erst ermöglichen und auf deren Einhaltung der Auftraggeber regelmäßig vertrauen darf.</li>
      </ol>
    </section>
    <section>
      <h2>Schlussbestimmungen</h2>
      <ol>
        <li>Erfüllungsort und Gerichtsstand für alle Streitigkeiten aus und im Zusammenhang mit dieser Vereinbarung ist der Sitz von Moritz Ruth, sofern der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.</li>
        <li>Sollte eine Bestimmung dieser Vereinbarung ganz oder teilweise unwirksam sein oder werden oder sollte die Vereinbarung unvollständig sein, so wird die Vereinbarung im Übrigen Inhalt nicht berührt. Die Vertragspartner verpflichten sich, die unwirksame Bestimmung durch eine solche Bestimmung zu ersetzen, welche dem Sinn und Zweck der unwirksamen Bestimmung in rechtswirksamer Weise wirtschaftlich am nächsten kommt.</li>
        <li>Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.</li>
      </ol>
    </section>
  </div>
</template>

<i18n lang="yaml">
  en:
    heading: Terms and Conditions
    message: Only available in German at the moment.

  de:
    heading: Allgemeine Geschäftsbedingungen
    message: ""
</i18n>

<script>
  import { useI18n } from "vue-i18n"

  export default {
    name: "TermsPage",
    setup() {
      const { t } = useI18n()

      return { t }
    }
  }
</script>
