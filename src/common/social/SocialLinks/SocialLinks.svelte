<script>
  import IconLink from "../../../cdk/icons/IconLink/IconLink.svelte";

  const size = 24;
</script>

<style>
  .social-links {
    display: flex;
    align-items: center;
  }
</style>

<div class="social-links">
  <IconLink
    href="https://www.meetup.com/fr-FR/UX-Design-Brest/"
    name="meetup"
    {size} />
  <IconLink href="https://twitter.com/UXDesignBrest" name="twitter" {size} />
  <IconLink href="https://github.com/UXDesignBrest" name="github" {size} />
</div>
