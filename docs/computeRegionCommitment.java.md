# `computeRegionCommitment` Submodule <a name="`computeRegionCommitment` Submodule" id="@cdktn/provider-google.computeRegionCommitment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionCommitment <a name="ComputeRegionCommitment" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment google_compute_region_commitment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_commitment.ComputeRegionCommitment;

ComputeRegionCommitment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .plan(java.lang.String)
//  .autoRenew(java.lang.Boolean|IResolvable)
//  .category(java.lang.String)
//  .description(java.lang.String)
//  .existingReservations(java.lang.String)
//  .id(java.lang.String)
//  .licenseResource(ComputeRegionCommitmentLicenseResource)
//  .params(ComputeRegionCommitmentParams)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .resources(IResolvable|java.util.List<ComputeRegionCommitmentResources>)
//  .timeouts(ComputeRegionCommitmentTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.plan">plan</a></code> | <code>java.lang.String</code> | The plan for this commitment, which determines duration and discount rate. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.autoRenew">autoRenew</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to enable automatic renewal for the commitment. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.category">category</a></code> | <code>java.lang.String</code> | The category of the commitment. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.existingReservations">existingReservations</a></code> | <code>java.lang.String</code> | Specifies the already existing reservations to attach to the Commitment. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#id ComputeRegionCommitment#id}. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.licenseResource">licenseResource</a></code> | <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource">ComputeRegionCommitmentLicenseResource</a></code> | license_resource block. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParams">ComputeRegionCommitmentParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#project ComputeRegionCommitment#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | URL of the region where this commitment may be used. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.resources">resources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>></code> | resources block. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts">ComputeRegionCommitmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of commitment, which affects the discount rate and the eligible resources. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#name ComputeRegionCommitment#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.plan"></a>

- *Type:* java.lang.String

The plan for this commitment, which determines duration and discount rate.

The currently supported plans are TWELVE_MONTH (1 year), and THIRTY_SIX_MONTH (3 years). Possible values: ["TWELVE_MONTH", "THIRTY_SIX_MONTH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#plan ComputeRegionCommitment#plan}

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.autoRenew"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to enable automatic renewal for the commitment.

The default value is false if not specified.
If the field is set to true, the commitment will be automatically renewed for either
one or three years according to the terms of the existing commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#auto_renew ComputeRegionCommitment#auto_renew}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.category"></a>

- *Type:* java.lang.String

The category of the commitment.

Category MACHINE specifies commitments composed of
machine resources such as VCPU or MEMORY, listed in resources. Category LICENSE
specifies commitments composed of software licenses, listed in licenseResources.
Note that only MACHINE commitments should have a Type specified. Possible values: ["LICENSE", "MACHINE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#category ComputeRegionCommitment#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#description ComputeRegionCommitment#description}

---

##### `existingReservations`<sup>Optional</sup> <a name="existingReservations" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.existingReservations"></a>

- *Type:* java.lang.String

Specifies the already existing reservations to attach to the Commitment.

This field will suppress
diffs that change the value from empty to non-empty. To force changing this field from empty to non-empty,
change another field at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#existing_reservations ComputeRegionCommitment#existing_reservations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#id ComputeRegionCommitment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseResource`<sup>Optional</sup> <a name="licenseResource" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.licenseResource"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource">ComputeRegionCommitmentLicenseResource</a>

license_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#license_resource ComputeRegionCommitment#license_resource}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.params"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParams">ComputeRegionCommitmentParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#params ComputeRegionCommitment#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#project ComputeRegionCommitment#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.region"></a>

- *Type:* java.lang.String

URL of the region where this commitment may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#region ComputeRegionCommitment#region}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.resources"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#resources ComputeRegionCommitment#resources}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts">ComputeRegionCommitmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#timeouts ComputeRegionCommitment#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of commitment, which affects the discount rate and the eligible resources.

The type could be one of the following value: 'MEMORY_OPTIMIZED', 'ACCELERATOR_OPTIMIZED',
'GENERAL_PURPOSE', 'GENERAL_PURPOSE_N2', 'GENERAL_PURPOSE_N2D', 'GENERAL_PURPOSE_E2',
'GENERAL_PURPOSE_T2D', 'GENERAL_PURPOSE_C3', 'COMPUTE_OPTIMIZED_C2', 'COMPUTE_OPTIMIZED_C2D' and
'GRAPHICS_OPTIMIZED_G2'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#type ComputeRegionCommitment#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.putLicenseResource">putLicenseResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.putParams">putParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetAutoRenew">resetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetExistingReservations">resetExistingReservations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetLicenseResource">resetLicenseResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLicenseResource` <a name="putLicenseResource" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.putLicenseResource"></a>

```java
public void putLicenseResource(ComputeRegionCommitmentLicenseResource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.putLicenseResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource">ComputeRegionCommitmentLicenseResource</a>

---

##### `putParams` <a name="putParams" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.putParams"></a>

```java
public void putParams(ComputeRegionCommitmentParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParams">ComputeRegionCommitmentParams</a>

---

##### `putResources` <a name="putResources" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.putResources"></a>

```java
public void putResources(IResolvable|java.util.List<ComputeRegionCommitmentResources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.putResources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.putTimeouts"></a>

```java
public void putTimeouts(ComputeRegionCommitmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts">ComputeRegionCommitmentTimeouts</a>

---

##### `resetAutoRenew` <a name="resetAutoRenew" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetAutoRenew"></a>

```java
public void resetAutoRenew()
```

##### `resetCategory` <a name="resetCategory" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetCategory"></a>

```java
public void resetCategory()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExistingReservations` <a name="resetExistingReservations" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetExistingReservations"></a>

```java
public void resetExistingReservations()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetId"></a>

```java
public void resetId()
```

##### `resetLicenseResource` <a name="resetLicenseResource" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetLicenseResource"></a>

```java
public void resetLicenseResource()
```

##### `resetParams` <a name="resetParams" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetParams"></a>

```java
public void resetParams()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetResources"></a>

```java
public void resetResources()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeRegionCommitment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.isConstruct"></a>

```java
import io.cdktn.providers.google.compute_region_commitment.ComputeRegionCommitment;

ComputeRegionCommitment.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.isTerraformElement"></a>

```java
import io.cdktn.providers.google.compute_region_commitment.ComputeRegionCommitment;

ComputeRegionCommitment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.isTerraformResource"></a>

```java
import io.cdktn.providers.google.compute_region_commitment.ComputeRegionCommitment;

ComputeRegionCommitment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.compute_region_commitment.ComputeRegionCommitment;

ComputeRegionCommitment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeRegionCommitment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ComputeRegionCommitment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeRegionCommitment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeRegionCommitment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ComputeRegionCommitment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.commitmentId">commitmentId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.endTimestamp">endTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.licenseResource">licenseResource</a></code> | <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference">ComputeRegionCommitmentLicenseResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference">ComputeRegionCommitmentParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList">ComputeRegionCommitmentResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.startTimestamp">startTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.statusMessage">statusMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference">ComputeRegionCommitmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.autoRenewInput">autoRenewInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.existingReservationsInput">existingReservationsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.licenseResourceInput">licenseResourceInput</a></code> | <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource">ComputeRegionCommitmentLicenseResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.paramsInput">paramsInput</a></code> | <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParams">ComputeRegionCommitmentParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.planInput">planInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.resourcesInput">resourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts">ComputeRegionCommitmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.autoRenew">autoRenew</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.existingReservations">existingReservations</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.plan">plan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `commitmentId`<sup>Required</sup> <a name="commitmentId" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.commitmentId"></a>

```java
public java.lang.Number getCommitmentId();
```

- *Type:* java.lang.Number

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `endTimestamp`<sup>Required</sup> <a name="endTimestamp" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.endTimestamp"></a>

```java
public java.lang.String getEndTimestamp();
```

- *Type:* java.lang.String

---

##### `licenseResource`<sup>Required</sup> <a name="licenseResource" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.licenseResource"></a>

```java
public ComputeRegionCommitmentLicenseResourceOutputReference getLicenseResource();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference">ComputeRegionCommitmentLicenseResourceOutputReference</a>

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.params"></a>

```java
public ComputeRegionCommitmentParamsOutputReference getParams();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference">ComputeRegionCommitmentParamsOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.resources"></a>

```java
public ComputeRegionCommitmentResourcesList getResources();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList">ComputeRegionCommitmentResourcesList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `startTimestamp`<sup>Required</sup> <a name="startTimestamp" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.startTimestamp"></a>

```java
public java.lang.String getStartTimestamp();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.statusMessage"></a>

```java
public java.lang.String getStatusMessage();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.timeouts"></a>

```java
public ComputeRegionCommitmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference">ComputeRegionCommitmentTimeoutsOutputReference</a>

---

##### `autoRenewInput`<sup>Optional</sup> <a name="autoRenewInput" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.autoRenewInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoRenewInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `existingReservationsInput`<sup>Optional</sup> <a name="existingReservationsInput" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.existingReservationsInput"></a>

```java
public java.lang.String getExistingReservationsInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `licenseResourceInput`<sup>Optional</sup> <a name="licenseResourceInput" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.licenseResourceInput"></a>

```java
public ComputeRegionCommitmentLicenseResource getLicenseResourceInput();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource">ComputeRegionCommitmentLicenseResource</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.paramsInput"></a>

```java
public ComputeRegionCommitmentParams getParamsInput();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParams">ComputeRegionCommitmentParams</a>

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.planInput"></a>

```java
public java.lang.String getPlanInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.resourcesInput"></a>

```java
public IResolvable|java.util.List<ComputeRegionCommitmentResources> getResourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.timeoutsInput"></a>

```java
public IResolvable|ComputeRegionCommitmentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts">ComputeRegionCommitmentTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `autoRenew`<sup>Required</sup> <a name="autoRenew" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.autoRenew"></a>

```java
public java.lang.Boolean|IResolvable getAutoRenew();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `existingReservations`<sup>Required</sup> <a name="existingReservations" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.existingReservations"></a>

```java
public java.lang.String getExistingReservations();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionCommitmentConfig <a name="ComputeRegionCommitmentConfig" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_commitment.ComputeRegionCommitmentConfig;

ComputeRegionCommitmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .plan(java.lang.String)
//  .autoRenew(java.lang.Boolean|IResolvable)
//  .category(java.lang.String)
//  .description(java.lang.String)
//  .existingReservations(java.lang.String)
//  .id(java.lang.String)
//  .licenseResource(ComputeRegionCommitmentLicenseResource)
//  .params(ComputeRegionCommitmentParams)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .resources(IResolvable|java.util.List<ComputeRegionCommitmentResources>)
//  .timeouts(ComputeRegionCommitmentTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.plan">plan</a></code> | <code>java.lang.String</code> | The plan for this commitment, which determines duration and discount rate. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.autoRenew">autoRenew</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to enable automatic renewal for the commitment. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.category">category</a></code> | <code>java.lang.String</code> | The category of the commitment. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.existingReservations">existingReservations</a></code> | <code>java.lang.String</code> | Specifies the already existing reservations to attach to the Commitment. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#id ComputeRegionCommitment#id}. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.licenseResource">licenseResource</a></code> | <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource">ComputeRegionCommitmentLicenseResource</a></code> | license_resource block. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParams">ComputeRegionCommitmentParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#project ComputeRegionCommitment#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.region">region</a></code> | <code>java.lang.String</code> | URL of the region where this commitment may be used. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.resources">resources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>></code> | resources block. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts">ComputeRegionCommitmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of commitment, which affects the discount rate and the eligible resources. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#name ComputeRegionCommitment#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

The plan for this commitment, which determines duration and discount rate.

The currently supported plans are TWELVE_MONTH (1 year), and THIRTY_SIX_MONTH (3 years). Possible values: ["TWELVE_MONTH", "THIRTY_SIX_MONTH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#plan ComputeRegionCommitment#plan}

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.autoRenew"></a>

```java
public java.lang.Boolean|IResolvable getAutoRenew();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to enable automatic renewal for the commitment.

The default value is false if not specified.
If the field is set to true, the commitment will be automatically renewed for either
one or three years according to the terms of the existing commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#auto_renew ComputeRegionCommitment#auto_renew}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

The category of the commitment.

Category MACHINE specifies commitments composed of
machine resources such as VCPU or MEMORY, listed in resources. Category LICENSE
specifies commitments composed of software licenses, listed in licenseResources.
Note that only MACHINE commitments should have a Type specified. Possible values: ["LICENSE", "MACHINE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#category ComputeRegionCommitment#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#description ComputeRegionCommitment#description}

---

##### `existingReservations`<sup>Optional</sup> <a name="existingReservations" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.existingReservations"></a>

```java
public java.lang.String getExistingReservations();
```

- *Type:* java.lang.String

Specifies the already existing reservations to attach to the Commitment.

This field will suppress
diffs that change the value from empty to non-empty. To force changing this field from empty to non-empty,
change another field at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#existing_reservations ComputeRegionCommitment#existing_reservations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#id ComputeRegionCommitment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseResource`<sup>Optional</sup> <a name="licenseResource" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.licenseResource"></a>

```java
public ComputeRegionCommitmentLicenseResource getLicenseResource();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource">ComputeRegionCommitmentLicenseResource</a>

license_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#license_resource ComputeRegionCommitment#license_resource}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.params"></a>

```java
public ComputeRegionCommitmentParams getParams();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParams">ComputeRegionCommitmentParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#params ComputeRegionCommitment#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#project ComputeRegionCommitment#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

URL of the region where this commitment may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#region ComputeRegionCommitment#region}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.resources"></a>

```java
public IResolvable|java.util.List<ComputeRegionCommitmentResources> getResources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#resources ComputeRegionCommitment#resources}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.timeouts"></a>

```java
public ComputeRegionCommitmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts">ComputeRegionCommitmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#timeouts ComputeRegionCommitment#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of commitment, which affects the discount rate and the eligible resources.

The type could be one of the following value: 'MEMORY_OPTIMIZED', 'ACCELERATOR_OPTIMIZED',
'GENERAL_PURPOSE', 'GENERAL_PURPOSE_N2', 'GENERAL_PURPOSE_N2D', 'GENERAL_PURPOSE_E2',
'GENERAL_PURPOSE_T2D', 'GENERAL_PURPOSE_C3', 'COMPUTE_OPTIMIZED_C2', 'COMPUTE_OPTIMIZED_C2D' and
'GRAPHICS_OPTIMIZED_G2'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#type ComputeRegionCommitment#type}

---

### ComputeRegionCommitmentLicenseResource <a name="ComputeRegionCommitmentLicenseResource" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_commitment.ComputeRegionCommitmentLicenseResource;

ComputeRegionCommitmentLicenseResource.builder()
    .license(java.lang.String)
//  .amount(java.lang.String)
//  .coresPerLicense(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource.property.license">license</a></code> | <code>java.lang.String</code> | Any applicable license URI. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource.property.amount">amount</a></code> | <code>java.lang.String</code> | The number of licenses purchased. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource.property.coresPerLicense">coresPerLicense</a></code> | <code>java.lang.String</code> | Specifies the core range of the instance for which this license applies. |

---

##### `license`<sup>Required</sup> <a name="license" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource.property.license"></a>

```java
public java.lang.String getLicense();
```

- *Type:* java.lang.String

Any applicable license URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#license ComputeRegionCommitment#license}

---

##### `amount`<sup>Optional</sup> <a name="amount" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource.property.amount"></a>

```java
public java.lang.String getAmount();
```

- *Type:* java.lang.String

The number of licenses purchased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#amount ComputeRegionCommitment#amount}

---

##### `coresPerLicense`<sup>Optional</sup> <a name="coresPerLicense" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource.property.coresPerLicense"></a>

```java
public java.lang.String getCoresPerLicense();
```

- *Type:* java.lang.String

Specifies the core range of the instance for which this license applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#cores_per_license ComputeRegionCommitment#cores_per_license}

---

### ComputeRegionCommitmentParams <a name="ComputeRegionCommitmentParams" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParams.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_commitment.ComputeRegionCommitmentParams;

ComputeRegionCommitmentParams.builder()
//  .resourceManagerTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParams.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource manager tags to be bound to the commitment. |

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParams.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource manager tags to be bound to the commitment.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#resource_manager_tags ComputeRegionCommitment#resource_manager_tags}

---

### ComputeRegionCommitmentResources <a name="ComputeRegionCommitmentResources" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_commitment.ComputeRegionCommitmentResources;

ComputeRegionCommitmentResources.builder()
//  .acceleratorType(java.lang.String)
//  .amount(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | Name of the accelerator type resource. Applicable only when the type is ACCELERATOR. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources.property.amount">amount</a></code> | <code>java.lang.String</code> | The amount of the resource purchased (in a type-dependent unit, such as bytes). |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources.property.type">type</a></code> | <code>java.lang.String</code> | Type of resource for which this commitment applies. Possible values are VCPU, MEMORY, LOCAL_SSD, and ACCELERATOR. |

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

Name of the accelerator type resource. Applicable only when the type is ACCELERATOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#accelerator_type ComputeRegionCommitment#accelerator_type}

---

##### `amount`<sup>Optional</sup> <a name="amount" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources.property.amount"></a>

```java
public java.lang.String getAmount();
```

- *Type:* java.lang.String

The amount of the resource purchased (in a type-dependent unit, such as bytes).

For vCPUs, this can just be an integer. For memory,
this must be provided in MB. Memory must be a multiple of 256 MB,
with up to 6.5GB of memory per every vCPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#amount ComputeRegionCommitment#amount}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of resource for which this commitment applies. Possible values are VCPU, MEMORY, LOCAL_SSD, and ACCELERATOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#type ComputeRegionCommitment#type}

---

### ComputeRegionCommitmentTimeouts <a name="ComputeRegionCommitmentTimeouts" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_commitment.ComputeRegionCommitmentTimeouts;

ComputeRegionCommitmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#create ComputeRegionCommitment#create}. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#delete ComputeRegionCommitment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#create ComputeRegionCommitment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_commitment#delete ComputeRegionCommitment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionCommitmentLicenseResourceOutputReference <a name="ComputeRegionCommitmentLicenseResourceOutputReference" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_commitment.ComputeRegionCommitmentLicenseResourceOutputReference;

new ComputeRegionCommitmentLicenseResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.resetAmount">resetAmount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.resetCoresPerLicense">resetCoresPerLicense</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAmount` <a name="resetAmount" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.resetAmount"></a>

```java
public void resetAmount()
```

##### `resetCoresPerLicense` <a name="resetCoresPerLicense" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.resetCoresPerLicense"></a>

```java
public void resetCoresPerLicense()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.amountInput">amountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicenseInput">coresPerLicenseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.licenseInput">licenseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.amount">amount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicense">coresPerLicense</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.license">license</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource">ComputeRegionCommitmentLicenseResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.amountInput"></a>

```java
public java.lang.String getAmountInput();
```

- *Type:* java.lang.String

---

##### `coresPerLicenseInput`<sup>Optional</sup> <a name="coresPerLicenseInput" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicenseInput"></a>

```java
public java.lang.String getCoresPerLicenseInput();
```

- *Type:* java.lang.String

---

##### `licenseInput`<sup>Optional</sup> <a name="licenseInput" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.licenseInput"></a>

```java
public java.lang.String getLicenseInput();
```

- *Type:* java.lang.String

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.amount"></a>

```java
public java.lang.String getAmount();
```

- *Type:* java.lang.String

---

##### `coresPerLicense`<sup>Required</sup> <a name="coresPerLicense" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicense"></a>

```java
public java.lang.String getCoresPerLicense();
```

- *Type:* java.lang.String

---

##### `license`<sup>Required</sup> <a name="license" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.license"></a>

```java
public java.lang.String getLicense();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.internalValue"></a>

```java
public ComputeRegionCommitmentLicenseResource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource">ComputeRegionCommitmentLicenseResource</a>

---


### ComputeRegionCommitmentParamsOutputReference <a name="ComputeRegionCommitmentParamsOutputReference" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_commitment.ComputeRegionCommitmentParamsOutputReference;

new ComputeRegionCommitmentParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.resetResourceManagerTags"></a>

```java
public void resetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParams">ComputeRegionCommitmentParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.property.resourceManagerTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParamsOutputReference.property.internalValue"></a>

```java
public ComputeRegionCommitmentParams getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentParams">ComputeRegionCommitmentParams</a>

---


### ComputeRegionCommitmentResourcesList <a name="ComputeRegionCommitmentResourcesList" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_commitment.ComputeRegionCommitmentResourcesList;

new ComputeRegionCommitmentResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.get"></a>

```java
public ComputeRegionCommitmentResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComputeRegionCommitmentResources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>>

---


### ComputeRegionCommitmentResourcesOutputReference <a name="ComputeRegionCommitmentResourcesOutputReference" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_commitment.ComputeRegionCommitmentResourcesOutputReference;

new ComputeRegionCommitmentResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resetAmount">resetAmount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resetAcceleratorType"></a>

```java
public void resetAcceleratorType()
```

##### `resetAmount` <a name="resetAmount" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resetAmount"></a>

```java
public void resetAmount()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.amountInput">amountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.amount">amount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.acceleratorTypeInput"></a>

```java
public java.lang.String getAcceleratorTypeInput();
```

- *Type:* java.lang.String

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.amountInput"></a>

```java
public java.lang.String getAmountInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.amount"></a>

```java
public java.lang.String getAmount();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeRegionCommitmentResources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>

---


### ComputeRegionCommitmentTimeoutsOutputReference <a name="ComputeRegionCommitmentTimeoutsOutputReference" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_commitment.ComputeRegionCommitmentTimeoutsOutputReference;

new ComputeRegionCommitmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts">ComputeRegionCommitmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeRegionCommitmentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts">ComputeRegionCommitmentTimeouts</a>

---



