<script>
  import { IconLink } from "../../../cdk";

  const size = 20;
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
  <IconLink
    href="https://www.youtube.com/channel/UCw1MPOPzbICtaye1785V87g"
    name="youtube"
    {size} />
  <IconLink href="https://github.com/UXDesignBrest" name="github" {size} />
</div>
