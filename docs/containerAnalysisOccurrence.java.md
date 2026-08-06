# `containerAnalysisOccurrence` Submodule <a name="`containerAnalysisOccurrence` Submodule" id="@cdktn/provider-google.containerAnalysisOccurrence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAnalysisOccurrence <a name="ContainerAnalysisOccurrence" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence google_container_analysis_occurrence}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer"></a>

```java
import io.cdktn.providers.google.container_analysis_occurrence.ContainerAnalysisOccurrence;

ContainerAnalysisOccurrence.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .attestation(ContainerAnalysisOccurrenceAttestation)
    .noteName(java.lang.String)
    .resourceUri(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .remediation(java.lang.String)
//  .timeouts(ContainerAnalysisOccurrenceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.attestation">attestation</a></code> | <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a></code> | attestation block. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.noteName">noteName</a></code> | <code>java.lang.String</code> | The analysis note associated with this occurrence, in the form of projects/[PROJECT]/notes/[NOTE_ID]. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.resourceUri">resourceUri</a></code> | <code>java.lang.String</code> | Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, https://gcr.io/project/image@sha256:123abc for a Docker image. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#id ContainerAnalysisOccurrence#id}. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#project ContainerAnalysisOccurrence#project}. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.remediation">remediation</a></code> | <code>java.lang.String</code> | A description of actions that can be taken to remedy the note. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.attestation"></a>

- *Type:* <a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a>

attestation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#attestation ContainerAnalysisOccurrence#attestation}

---

##### `noteName`<sup>Required</sup> <a name="noteName" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.noteName"></a>

- *Type:* java.lang.String

The analysis note associated with this occurrence, in the form of projects/[PROJECT]/notes/[NOTE_ID].

This field can be used as a
filter in list requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#note_name ContainerAnalysisOccurrence#note_name}

---

##### `resourceUri`<sup>Required</sup> <a name="resourceUri" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.resourceUri"></a>

- *Type:* java.lang.String

Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, https://gcr.io/project/image@sha256:123abc for a Docker image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#resource_uri ContainerAnalysisOccurrence#resource_uri}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#deletion_policy ContainerAnalysisOccurrence#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#id ContainerAnalysisOccurrence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#project ContainerAnalysisOccurrence#project}.

---

##### `remediation`<sup>Optional</sup> <a name="remediation" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.remediation"></a>

- *Type:* java.lang.String

A description of actions that can be taken to remedy the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#remediation ContainerAnalysisOccurrence#remediation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#timeouts ContainerAnalysisOccurrence#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putAttestation">putAttestation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetRemediation">resetRemediation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttestation` <a name="putAttestation" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putAttestation"></a>

```java
public void putAttestation(ContainerAnalysisOccurrenceAttestation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putAttestation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putTimeouts"></a>

```java
public void putTimeouts(ContainerAnalysisOccurrenceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetProject"></a>

```java
public void resetProject()
```

##### `resetRemediation` <a name="resetRemediation" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetRemediation"></a>

```java
public void resetRemediation()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ContainerAnalysisOccurrence resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isConstruct"></a>

```java
import io.cdktn.providers.google.container_analysis_occurrence.ContainerAnalysisOccurrence;

ContainerAnalysisOccurrence.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformElement"></a>

```java
import io.cdktn.providers.google.container_analysis_occurrence.ContainerAnalysisOccurrence;

ContainerAnalysisOccurrence.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformResource"></a>

```java
import io.cdktn.providers.google.container_analysis_occurrence.ContainerAnalysisOccurrence;

ContainerAnalysisOccurrence.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.container_analysis_occurrence.ContainerAnalysisOccurrence;

ContainerAnalysisOccurrence.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ContainerAnalysisOccurrence.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ContainerAnalysisOccurrence resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ContainerAnalysisOccurrence to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ContainerAnalysisOccurrence that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ContainerAnalysisOccurrence to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.attestation">attestation</a></code> | <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference">ContainerAnalysisOccurrenceAttestationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference">ContainerAnalysisOccurrenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.attestationInput">attestationInput</a></code> | <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.noteNameInput">noteNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.remediationInput">remediationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.resourceUriInput">resourceUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.noteName">noteName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.remediation">remediation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.resourceUri">resourceUri</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.attestation"></a>

```java
public ContainerAnalysisOccurrenceAttestationOutputReference getAttestation();
```

- *Type:* <a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference">ContainerAnalysisOccurrenceAttestationOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.timeouts"></a>

```java
public ContainerAnalysisOccurrenceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference">ContainerAnalysisOccurrenceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `attestationInput`<sup>Optional</sup> <a name="attestationInput" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.attestationInput"></a>

```java
public ContainerAnalysisOccurrenceAttestation getAttestationInput();
```

- *Type:* <a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `noteNameInput`<sup>Optional</sup> <a name="noteNameInput" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.noteNameInput"></a>

```java
public java.lang.String getNoteNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `remediationInput`<sup>Optional</sup> <a name="remediationInput" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.remediationInput"></a>

```java
public java.lang.String getRemediationInput();
```

- *Type:* java.lang.String

---

##### `resourceUriInput`<sup>Optional</sup> <a name="resourceUriInput" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.resourceUriInput"></a>

```java
public java.lang.String getResourceUriInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.timeoutsInput"></a>

```java
public IResolvable|ContainerAnalysisOccurrenceTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `noteName`<sup>Required</sup> <a name="noteName" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.noteName"></a>

```java
public java.lang.String getNoteName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `remediation`<sup>Required</sup> <a name="remediation" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.remediation"></a>

```java
public java.lang.String getRemediation();
```

- *Type:* java.lang.String

---

##### `resourceUri`<sup>Required</sup> <a name="resourceUri" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.resourceUri"></a>

```java
public java.lang.String getResourceUri();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAnalysisOccurrenceAttestation <a name="ContainerAnalysisOccurrenceAttestation" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation.Initializer"></a>

```java
import io.cdktn.providers.google.container_analysis_occurrence.ContainerAnalysisOccurrenceAttestation;

ContainerAnalysisOccurrenceAttestation.builder()
    .serializedPayload(java.lang.String)
    .signatures(IResolvable|java.util.List<ContainerAnalysisOccurrenceAttestationSignatures>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation.property.serializedPayload">serializedPayload</a></code> | <code>java.lang.String</code> | The serialized payload that is verified by one or more signatures. A base64-encoded string. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation.property.signatures">signatures</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>></code> | signatures block. |

---

##### `serializedPayload`<sup>Required</sup> <a name="serializedPayload" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation.property.serializedPayload"></a>

```java
public java.lang.String getSerializedPayload();
```

- *Type:* java.lang.String

The serialized payload that is verified by one or more signatures. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#serialized_payload ContainerAnalysisOccurrence#serialized_payload}

---

##### `signatures`<sup>Required</sup> <a name="signatures" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation.property.signatures"></a>

```java
public IResolvable|java.util.List<ContainerAnalysisOccurrenceAttestationSignatures> getSignatures();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>>

signatures block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#signatures ContainerAnalysisOccurrence#signatures}

---

### ContainerAnalysisOccurrenceAttestationSignatures <a name="ContainerAnalysisOccurrenceAttestationSignatures" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures.Initializer"></a>

```java
import io.cdktn.providers.google.container_analysis_occurrence.ContainerAnalysisOccurrenceAttestationSignatures;

ContainerAnalysisOccurrenceAttestationSignatures.builder()
    .publicKeyId(java.lang.String)
//  .signature(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures.property.publicKeyId">publicKeyId</a></code> | <code>java.lang.String</code> | The identifier for the public key that verifies this signature. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures.property.signature">signature</a></code> | <code>java.lang.String</code> | The content of the signature, an opaque bytestring. |

---

##### `publicKeyId`<sup>Required</sup> <a name="publicKeyId" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures.property.publicKeyId"></a>

```java
public java.lang.String getPublicKeyId();
```

- *Type:* java.lang.String

The identifier for the public key that verifies this signature.

MUST be an RFC3986 conformant
URI. * When possible, the key id should be an
immutable reference, such as a cryptographic digest.
Examples of valid values:

* OpenPGP V4 public key fingerprint. See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr
  for more details on this scheme.

  * 'openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA'
* RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization):

  * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#public_key_id ContainerAnalysisOccurrence#public_key_id}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures.property.signature"></a>

```java
public java.lang.String getSignature();
```

- *Type:* java.lang.String

The content of the signature, an opaque bytestring.

The payload that this signature verifies MUST be
unambiguously provided with the Signature during
verification. A wrapper message might provide the
payload explicitly. Alternatively, a message might
have a canonical serialization that can always be
unambiguously computed to derive the payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#signature ContainerAnalysisOccurrence#signature}

---

### ContainerAnalysisOccurrenceConfig <a name="ContainerAnalysisOccurrenceConfig" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.Initializer"></a>

```java
import io.cdktn.providers.google.container_analysis_occurrence.ContainerAnalysisOccurrenceConfig;

ContainerAnalysisOccurrenceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .attestation(ContainerAnalysisOccurrenceAttestation)
    .noteName(java.lang.String)
    .resourceUri(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .remediation(java.lang.String)
//  .timeouts(ContainerAnalysisOccurrenceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.attestation">attestation</a></code> | <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a></code> | attestation block. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.noteName">noteName</a></code> | <code>java.lang.String</code> | The analysis note associated with this occurrence, in the form of projects/[PROJECT]/notes/[NOTE_ID]. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.resourceUri">resourceUri</a></code> | <code>java.lang.String</code> | Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, https://gcr.io/project/image@sha256:123abc for a Docker image. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#id ContainerAnalysisOccurrence#id}. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#project ContainerAnalysisOccurrence#project}. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.remediation">remediation</a></code> | <code>java.lang.String</code> | A description of actions that can be taken to remedy the note. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.attestation"></a>

```java
public ContainerAnalysisOccurrenceAttestation getAttestation();
```

- *Type:* <a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a>

attestation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#attestation ContainerAnalysisOccurrence#attestation}

---

##### `noteName`<sup>Required</sup> <a name="noteName" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.noteName"></a>

```java
public java.lang.String getNoteName();
```

- *Type:* java.lang.String

The analysis note associated with this occurrence, in the form of projects/[PROJECT]/notes/[NOTE_ID].

This field can be used as a
filter in list requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#note_name ContainerAnalysisOccurrence#note_name}

---

##### `resourceUri`<sup>Required</sup> <a name="resourceUri" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.resourceUri"></a>

```java
public java.lang.String getResourceUri();
```

- *Type:* java.lang.String

Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, https://gcr.io/project/image@sha256:123abc for a Docker image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#resource_uri ContainerAnalysisOccurrence#resource_uri}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#deletion_policy ContainerAnalysisOccurrence#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#id ContainerAnalysisOccurrence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#project ContainerAnalysisOccurrence#project}.

---

##### `remediation`<sup>Optional</sup> <a name="remediation" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.remediation"></a>

```java
public java.lang.String getRemediation();
```

- *Type:* java.lang.String

A description of actions that can be taken to remedy the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#remediation ContainerAnalysisOccurrence#remediation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.timeouts"></a>

```java
public ContainerAnalysisOccurrenceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#timeouts ContainerAnalysisOccurrence#timeouts}

---

### ContainerAnalysisOccurrenceTimeouts <a name="ContainerAnalysisOccurrenceTimeouts" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.container_analysis_occurrence.ContainerAnalysisOccurrenceTimeouts;

ContainerAnalysisOccurrenceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#create ContainerAnalysisOccurrence#create}. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#delete ContainerAnalysisOccurrence#delete}. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#update ContainerAnalysisOccurrence#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#create ContainerAnalysisOccurrence#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#delete ContainerAnalysisOccurrence#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/container_analysis_occurrence#update ContainerAnalysisOccurrence#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAnalysisOccurrenceAttestationOutputReference <a name="ContainerAnalysisOccurrenceAttestationOutputReference" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.container_analysis_occurrence.ContainerAnalysisOccurrenceAttestationOutputReference;

new ContainerAnalysisOccurrenceAttestationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.putSignatures">putSignatures</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSignatures` <a name="putSignatures" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.putSignatures"></a>

```java
public void putSignatures(IResolvable|java.util.List<ContainerAnalysisOccurrenceAttestationSignatures> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.putSignatures.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.signatures">signatures</a></code> | <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList">ContainerAnalysisOccurrenceAttestationSignaturesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayloadInput">serializedPayloadInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.signaturesInput">signaturesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayload">serializedPayload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `signatures`<sup>Required</sup> <a name="signatures" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.signatures"></a>

```java
public ContainerAnalysisOccurrenceAttestationSignaturesList getSignatures();
```

- *Type:* <a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList">ContainerAnalysisOccurrenceAttestationSignaturesList</a>

---

##### `serializedPayloadInput`<sup>Optional</sup> <a name="serializedPayloadInput" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayloadInput"></a>

```java
public java.lang.String getSerializedPayloadInput();
```

- *Type:* java.lang.String

---

##### `signaturesInput`<sup>Optional</sup> <a name="signaturesInput" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.signaturesInput"></a>

```java
public IResolvable|java.util.List<ContainerAnalysisOccurrenceAttestationSignatures> getSignaturesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>>

---

##### `serializedPayload`<sup>Required</sup> <a name="serializedPayload" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayload"></a>

```java
public java.lang.String getSerializedPayload();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.internalValue"></a>

```java
public ContainerAnalysisOccurrenceAttestation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a>

---


### ContainerAnalysisOccurrenceAttestationSignaturesList <a name="ContainerAnalysisOccurrenceAttestationSignaturesList" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer"></a>

```java
import io.cdktn.providers.google.container_analysis_occurrence.ContainerAnalysisOccurrenceAttestationSignaturesList;

new ContainerAnalysisOccurrenceAttestationSignaturesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.get"></a>

```java
public ContainerAnalysisOccurrenceAttestationSignaturesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ContainerAnalysisOccurrenceAttestationSignatures> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>>

---


### ContainerAnalysisOccurrenceAttestationSignaturesOutputReference <a name="ContainerAnalysisOccurrenceAttestationSignaturesOutputReference" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.container_analysis_occurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference;

new ContainerAnalysisOccurrenceAttestationSignaturesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resetSignature">resetSignature</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSignature` <a name="resetSignature" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resetSignature"></a>

```java
public void resetSignature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyIdInput">publicKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signatureInput">signatureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyId">publicKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signature">signature</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `publicKeyIdInput`<sup>Optional</sup> <a name="publicKeyIdInput" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyIdInput"></a>

```java
public java.lang.String getPublicKeyIdInput();
```

- *Type:* java.lang.String

---

##### `signatureInput`<sup>Optional</sup> <a name="signatureInput" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signatureInput"></a>

```java
public java.lang.String getSignatureInput();
```

- *Type:* java.lang.String

---

##### `publicKeyId`<sup>Required</sup> <a name="publicKeyId" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyId"></a>

```java
public java.lang.String getPublicKeyId();
```

- *Type:* java.lang.String

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signature"></a>

```java
public java.lang.String getSignature();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.internalValue"></a>

```java
public IResolvable|ContainerAnalysisOccurrenceAttestationSignatures getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>

---


### ContainerAnalysisOccurrenceTimeoutsOutputReference <a name="ContainerAnalysisOccurrenceTimeoutsOutputReference" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.container_analysis_occurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference;

new ContainerAnalysisOccurrenceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ContainerAnalysisOccurrenceTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a>

---



