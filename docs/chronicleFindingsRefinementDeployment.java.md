# `chronicleFindingsRefinementDeployment` Submodule <a name="`chronicleFindingsRefinementDeployment` Submodule" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleFindingsRefinementDeployment <a name="ChronicleFindingsRefinementDeployment" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment google_chronicle_findings_refinement_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_findings_refinement_deployment.ChronicleFindingsRefinementDeployment;

ChronicleFindingsRefinementDeployment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .findingsRefinement(java.lang.String)
    .instance(java.lang.String)
    .location(java.lang.String)
//  .archived(java.lang.Boolean|IResolvable)
//  .detectionExclusionApplication(ChronicleFindingsRefinementDeploymentDetectionExclusionApplication)
//  .enabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ChronicleFindingsRefinementDeploymentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.findingsRefinement">findingsRefinement</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.archived">archived</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The archive state of the findings refinement deployment. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.detectionExclusionApplication">detectionExclusionApplication</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | detection_exclusion_application block. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the findings refinement is currently deployed continuously against incoming findings. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#id ChronicleFindingsRefinementDeployment#id}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#project ChronicleFindingsRefinementDeployment#project}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `findingsRefinement`<sup>Required</sup> <a name="findingsRefinement" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.findingsRefinement"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#findings_refinement ChronicleFindingsRefinementDeployment#findings_refinement}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#instance ChronicleFindingsRefinementDeployment#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#location ChronicleFindingsRefinementDeployment#location}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.archived"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The archive state of the findings refinement deployment.

Cannot be set to true unless enabled is set to false.
If currently set to true, enabled cannot be updated to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#archived ChronicleFindingsRefinementDeployment#archived}

---

##### `detectionExclusionApplication`<sup>Optional</sup> <a name="detectionExclusionApplication" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.detectionExclusionApplication"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

detection_exclusion_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#detection_exclusion_application ChronicleFindingsRefinementDeployment#detection_exclusion_application}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the findings refinement is currently deployed continuously against incoming findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#enabled ChronicleFindingsRefinementDeployment#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#id ChronicleFindingsRefinementDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#project ChronicleFindingsRefinementDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#timeouts ChronicleFindingsRefinementDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putDetectionExclusionApplication">putDetectionExclusionApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetArchived">resetArchived</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetDetectionExclusionApplication">resetDetectionExclusionApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDetectionExclusionApplication` <a name="putDetectionExclusionApplication" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putDetectionExclusionApplication"></a>

```java
public void putDetectionExclusionApplication(ChronicleFindingsRefinementDeploymentDetectionExclusionApplication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putDetectionExclusionApplication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putTimeouts"></a>

```java
public void putTimeouts(ChronicleFindingsRefinementDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a>

---

##### `resetArchived` <a name="resetArchived" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetArchived"></a>

```java
public void resetArchived()
```

##### `resetDetectionExclusionApplication` <a name="resetDetectionExclusionApplication" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetDetectionExclusionApplication"></a>

```java
public void resetDetectionExclusionApplication()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleFindingsRefinementDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isConstruct"></a>

```java
import io.cdktn.providers.google.chronicle_findings_refinement_deployment.ChronicleFindingsRefinementDeployment;

ChronicleFindingsRefinementDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformElement"></a>

```java
import io.cdktn.providers.google.chronicle_findings_refinement_deployment.ChronicleFindingsRefinementDeployment;

ChronicleFindingsRefinementDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformResource"></a>

```java
import io.cdktn.providers.google.chronicle_findings_refinement_deployment.ChronicleFindingsRefinementDeployment;

ChronicleFindingsRefinementDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.chronicle_findings_refinement_deployment.ChronicleFindingsRefinementDeployment;

ChronicleFindingsRefinementDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ChronicleFindingsRefinementDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ChronicleFindingsRefinementDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ChronicleFindingsRefinementDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ChronicleFindingsRefinementDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleFindingsRefinementDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.detectionExclusionApplication">detectionExclusionApplication</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference">ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference">ChronicleFindingsRefinementDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.archivedInput">archivedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.detectionExclusionApplicationInput">detectionExclusionApplicationInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.findingsRefinementInput">findingsRefinementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.archived">archived</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.findingsRefinement">findingsRefinement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `detectionExclusionApplication`<sup>Required</sup> <a name="detectionExclusionApplication" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.detectionExclusionApplication"></a>

```java
public ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference getDetectionExclusionApplication();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference">ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.timeouts"></a>

```java
public ChronicleFindingsRefinementDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference">ChronicleFindingsRefinementDeploymentTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `archivedInput`<sup>Optional</sup> <a name="archivedInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.archivedInput"></a>

```java
public java.lang.Boolean|IResolvable getArchivedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `detectionExclusionApplicationInput`<sup>Optional</sup> <a name="detectionExclusionApplicationInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.detectionExclusionApplicationInput"></a>

```java
public ChronicleFindingsRefinementDeploymentDetectionExclusionApplication getDetectionExclusionApplicationInput();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `findingsRefinementInput`<sup>Optional</sup> <a name="findingsRefinementInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.findingsRefinementInput"></a>

```java
public java.lang.String getFindingsRefinementInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.timeoutsInput"></a>

```java
public IResolvable|ChronicleFindingsRefinementDeploymentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a>

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.archived"></a>

```java
public java.lang.Boolean|IResolvable getArchived();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `findingsRefinement`<sup>Required</sup> <a name="findingsRefinement" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.findingsRefinement"></a>

```java
public java.lang.String getFindingsRefinement();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleFindingsRefinementDeploymentConfig <a name="ChronicleFindingsRefinementDeploymentConfig" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_findings_refinement_deployment.ChronicleFindingsRefinementDeploymentConfig;

ChronicleFindingsRefinementDeploymentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .findingsRefinement(java.lang.String)
    .instance(java.lang.String)
    .location(java.lang.String)
//  .archived(java.lang.Boolean|IResolvable)
//  .detectionExclusionApplication(ChronicleFindingsRefinementDeploymentDetectionExclusionApplication)
//  .enabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ChronicleFindingsRefinementDeploymentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.findingsRefinement">findingsRefinement</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.archived">archived</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The archive state of the findings refinement deployment. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.detectionExclusionApplication">detectionExclusionApplication</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | detection_exclusion_application block. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the findings refinement is currently deployed continuously against incoming findings. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#id ChronicleFindingsRefinementDeployment#id}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#project ChronicleFindingsRefinementDeployment#project}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `findingsRefinement`<sup>Required</sup> <a name="findingsRefinement" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.findingsRefinement"></a>

```java
public java.lang.String getFindingsRefinement();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#findings_refinement ChronicleFindingsRefinementDeployment#findings_refinement}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#instance ChronicleFindingsRefinementDeployment#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#location ChronicleFindingsRefinementDeployment#location}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.archived"></a>

```java
public java.lang.Boolean|IResolvable getArchived();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The archive state of the findings refinement deployment.

Cannot be set to true unless enabled is set to false.
If currently set to true, enabled cannot be updated to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#archived ChronicleFindingsRefinementDeployment#archived}

---

##### `detectionExclusionApplication`<sup>Optional</sup> <a name="detectionExclusionApplication" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.detectionExclusionApplication"></a>

```java
public ChronicleFindingsRefinementDeploymentDetectionExclusionApplication getDetectionExclusionApplication();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

detection_exclusion_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#detection_exclusion_application ChronicleFindingsRefinementDeployment#detection_exclusion_application}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the findings refinement is currently deployed continuously against incoming findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#enabled ChronicleFindingsRefinementDeployment#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#id ChronicleFindingsRefinementDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#project ChronicleFindingsRefinementDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.timeouts"></a>

```java
public ChronicleFindingsRefinementDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#timeouts ChronicleFindingsRefinementDeployment#timeouts}

---

### ChronicleFindingsRefinementDeploymentDetectionExclusionApplication <a name="ChronicleFindingsRefinementDeploymentDetectionExclusionApplication" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_findings_refinement_deployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication;

ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.builder()
//  .curatedRules(java.util.List<java.lang.String>)
//  .curatedRuleSets(java.util.List<java.lang.String>)
//  .rules(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRules">curatedRules</a></code> | <code>java.util.List<java.lang.String></code> | The CuratedRules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRules/{rule}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRuleSets">curatedRuleSets</a></code> | <code>java.util.List<java.lang.String></code> | The CuratedRuleSets this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRuleSetCategories/{category}/curatedRuleSets/{rule_set}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.rules">rules</a></code> | <code>java.util.List<java.lang.String></code> | The Rules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/rules/{rule}. |

---

##### `curatedRules`<sup>Optional</sup> <a name="curatedRules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRules"></a>

```java
public java.util.List<java.lang.String> getCuratedRules();
```

- *Type:* java.util.List<java.lang.String>

The CuratedRules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRules/{rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#curated_rules ChronicleFindingsRefinementDeployment#curated_rules}

---

##### `curatedRuleSets`<sup>Optional</sup> <a name="curatedRuleSets" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRuleSets"></a>

```java
public java.util.List<java.lang.String> getCuratedRuleSets();
```

- *Type:* java.util.List<java.lang.String>

The CuratedRuleSets this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRuleSetCategories/{category}/curatedRuleSets/{rule_set}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#curated_rule_sets ChronicleFindingsRefinementDeployment#curated_rule_sets}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.rules"></a>

```java
public java.util.List<java.lang.String> getRules();
```

- *Type:* java.util.List<java.lang.String>

The Rules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/rules/{rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#rules ChronicleFindingsRefinementDeployment#rules}

---

### ChronicleFindingsRefinementDeploymentTimeouts <a name="ChronicleFindingsRefinementDeploymentTimeouts" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_findings_refinement_deployment.ChronicleFindingsRefinementDeploymentTimeouts;

ChronicleFindingsRefinementDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#create ChronicleFindingsRefinementDeployment#create}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#delete ChronicleFindingsRefinementDeployment#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#update ChronicleFindingsRefinementDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#create ChronicleFindingsRefinementDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#delete ChronicleFindingsRefinementDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_findings_refinement_deployment#update ChronicleFindingsRefinementDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference <a name="ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_findings_refinement_deployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference;

new ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRules">resetCuratedRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRuleSets">resetCuratedRuleSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCuratedRules` <a name="resetCuratedRules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRules"></a>

```java
public void resetCuratedRules()
```

##### `resetCuratedRuleSets` <a name="resetCuratedRuleSets" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRuleSets"></a>

```java
public void resetCuratedRuleSets()
```

##### `resetRules` <a name="resetRules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetRules"></a>

```java
public void resetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.deletedCuratedRuleSets">deletedCuratedRuleSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSetsInput">curatedRuleSetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRulesInput">curatedRulesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rulesInput">rulesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRules">curatedRules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSets">curatedRuleSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rules">rules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deletedCuratedRuleSets`<sup>Required</sup> <a name="deletedCuratedRuleSets" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.deletedCuratedRuleSets"></a>

```java
public java.util.List<java.lang.String> getDeletedCuratedRuleSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `curatedRuleSetsInput`<sup>Optional</sup> <a name="curatedRuleSetsInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSetsInput"></a>

```java
public java.util.List<java.lang.String> getCuratedRuleSetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `curatedRulesInput`<sup>Optional</sup> <a name="curatedRulesInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRulesInput"></a>

```java
public java.util.List<java.lang.String> getCuratedRulesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rulesInput"></a>

```java
public java.util.List<java.lang.String> getRulesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `curatedRules`<sup>Required</sup> <a name="curatedRules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRules"></a>

```java
public java.util.List<java.lang.String> getCuratedRules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `curatedRuleSets`<sup>Required</sup> <a name="curatedRuleSets" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSets"></a>

```java
public java.util.List<java.lang.String> getCuratedRuleSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rules"></a>

```java
public java.util.List<java.lang.String> getRules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.internalValue"></a>

```java
public ChronicleFindingsRefinementDeploymentDetectionExclusionApplication getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

---


### ChronicleFindingsRefinementDeploymentTimeoutsOutputReference <a name="ChronicleFindingsRefinementDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_findings_refinement_deployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference;

new ChronicleFindingsRefinementDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ChronicleFindingsRefinementDeploymentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a>

---



