# `vertexAiCustomJob` Submodule <a name="`vertexAiCustomJob` Submodule" id="@cdktn/provider-google.vertexAiCustomJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiCustomJob <a name="VertexAiCustomJob" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job google_vertex_ai_custom_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJob;

VertexAiCustomJob.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .jobSpec(VertexAiCustomJobJobSpec)
    .region(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .encryptionSpec(VertexAiCustomJobEncryptionSpec)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(VertexAiCustomJobTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the CustomJob. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.jobSpec">jobSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec">VertexAiCustomJobJobSpec</a></code> | job_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The Google Cloud region to run the custom job in. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpec">VertexAiCustomJobEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#id VertexAiCustomJob#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize CustomJobs. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#project VertexAiCustomJob#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts">VertexAiCustomJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the CustomJob.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#display_name VertexAiCustomJob#display_name}

---

##### `jobSpec`<sup>Required</sup> <a name="jobSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.jobSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec">VertexAiCustomJobJobSpec</a>

job_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#job_spec VertexAiCustomJob#job_spec}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The Google Cloud region to run the custom job in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#region VertexAiCustomJob#region}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#deletion_policy VertexAiCustomJob#deletion_policy}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpec">VertexAiCustomJobEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#encryption_spec VertexAiCustomJob#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#id VertexAiCustomJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize CustomJobs.

Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed.
See https://goo.gl/xmQnxf for more information and examples of labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#labels VertexAiCustomJob#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#project VertexAiCustomJob#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts">VertexAiCustomJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#timeouts VertexAiCustomJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.putJobSpec">putJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetEncryptionSpec">resetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.putEncryptionSpec"></a>

```java
public void putEncryptionSpec(VertexAiCustomJobEncryptionSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpec">VertexAiCustomJobEncryptionSpec</a>

---

##### `putJobSpec` <a name="putJobSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.putJobSpec"></a>

```java
public void putJobSpec(VertexAiCustomJobJobSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.putJobSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec">VertexAiCustomJobJobSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.putTimeouts"></a>

```java
public void putTimeouts(VertexAiCustomJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts">VertexAiCustomJobTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetEncryptionSpec` <a name="resetEncryptionSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetEncryptionSpec"></a>

```java
public void resetEncryptionSpec()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiCustomJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.isConstruct"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJob;

VertexAiCustomJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.isTerraformElement"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJob;

VertexAiCustomJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.isTerraformResource"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJob;

VertexAiCustomJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJob;

VertexAiCustomJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VertexAiCustomJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VertexAiCustomJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VertexAiCustomJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VertexAiCustomJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiCustomJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference">VertexAiCustomJobEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList">VertexAiCustomJobErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.jobSpec">jobSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference">VertexAiCustomJobJobSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference">VertexAiCustomJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.webAccessUris">webAccessUris</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpec">VertexAiCustomJobEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.jobSpecInput">jobSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec">VertexAiCustomJobJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts">VertexAiCustomJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.encryptionSpec"></a>

```java
public VertexAiCustomJobEncryptionSpecOutputReference getEncryptionSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference">VertexAiCustomJobEncryptionSpecOutputReference</a>

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.error"></a>

```java
public VertexAiCustomJobErrorList getError();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList">VertexAiCustomJobErrorList</a>

---

##### `jobSpec`<sup>Required</sup> <a name="jobSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.jobSpec"></a>

```java
public VertexAiCustomJobJobSpecOutputReference getJobSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference">VertexAiCustomJobJobSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.timeouts"></a>

```java
public VertexAiCustomJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference">VertexAiCustomJobTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `webAccessUris`<sup>Required</sup> <a name="webAccessUris" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.webAccessUris"></a>

```java
public StringMap getWebAccessUris();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.encryptionSpecInput"></a>

```java
public VertexAiCustomJobEncryptionSpec getEncryptionSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpec">VertexAiCustomJobEncryptionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jobSpecInput`<sup>Optional</sup> <a name="jobSpecInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.jobSpecInput"></a>

```java
public VertexAiCustomJobJobSpec getJobSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec">VertexAiCustomJobJobSpec</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.timeoutsInput"></a>

```java
public IResolvable|VertexAiCustomJobTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts">VertexAiCustomJobTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiCustomJobConfig <a name="VertexAiCustomJobConfig" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobConfig;

VertexAiCustomJobConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .jobSpec(VertexAiCustomJobJobSpec)
    .region(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .encryptionSpec(VertexAiCustomJobEncryptionSpec)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(VertexAiCustomJobTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the CustomJob. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.jobSpec">jobSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec">VertexAiCustomJobJobSpec</a></code> | job_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.region">region</a></code> | <code>java.lang.String</code> | The Google Cloud region to run the custom job in. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpec">VertexAiCustomJobEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#id VertexAiCustomJob#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize CustomJobs. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#project VertexAiCustomJob#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts">VertexAiCustomJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the CustomJob.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#display_name VertexAiCustomJob#display_name}

---

##### `jobSpec`<sup>Required</sup> <a name="jobSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.jobSpec"></a>

```java
public VertexAiCustomJobJobSpec getJobSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec">VertexAiCustomJobJobSpec</a>

job_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#job_spec VertexAiCustomJob#job_spec}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The Google Cloud region to run the custom job in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#region VertexAiCustomJob#region}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#deletion_policy VertexAiCustomJob#deletion_policy}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.encryptionSpec"></a>

```java
public VertexAiCustomJobEncryptionSpec getEncryptionSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpec">VertexAiCustomJobEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#encryption_spec VertexAiCustomJob#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#id VertexAiCustomJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize CustomJobs.

Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed.
See https://goo.gl/xmQnxf for more information and examples of labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#labels VertexAiCustomJob#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#project VertexAiCustomJob#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.timeouts"></a>

```java
public VertexAiCustomJobTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts">VertexAiCustomJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#timeouts VertexAiCustomJob#timeouts}

---

### VertexAiCustomJobEncryptionSpec <a name="VertexAiCustomJobEncryptionSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpec.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobEncryptionSpec;

VertexAiCustomJobEncryptionSpec.builder()
    .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpec.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Resource name of the Cloud KMS key used to protect the resource. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpec.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

Resource name of the Cloud KMS key used to protect the resource.

The Cloud KMS key must be in the same region as the resource. It must have the format
'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#kms_key_name VertexAiCustomJob#kms_key_name}

---

### VertexAiCustomJobError <a name="VertexAiCustomJobError" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobError.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobError;

VertexAiCustomJobError.builder()
    .build();
```


### VertexAiCustomJobJobSpec <a name="VertexAiCustomJobJobSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpec;

VertexAiCustomJobJobSpec.builder()
    .workerPoolSpecs(IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecs>)
//  .baseOutputDirectory(VertexAiCustomJobJobSpecBaseOutputDirectory)
//  .enableDashboardAccess(java.lang.Boolean|IResolvable)
//  .enableWebAccess(java.lang.Boolean|IResolvable)
//  .network(java.lang.String)
//  .pscInterfaceConfig(VertexAiCustomJobJobSpecPscInterfaceConfig)
//  .reservedIpRanges(java.util.List<java.lang.String>)
//  .scheduling(VertexAiCustomJobJobSpecScheduling)
//  .serviceAccount(java.lang.String)
//  .tensorboard(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.workerPoolSpecs">workerPoolSpecs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs">VertexAiCustomJobJobSpecWorkerPoolSpecs</a>></code> | worker_pool_specs block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.baseOutputDirectory">baseOutputDirectory</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectory">VertexAiCustomJobJobSpecBaseOutputDirectory</a></code> | base_output_directory block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.enableDashboardAccess">enableDashboardAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether you want Vertex AI to enable access to the customized dashboard in training chief container. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.enableWebAccess">enableWebAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether you want Vertex AI to enable interactive shell access to training containers. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.network">network</a></code> | <code>java.lang.String</code> | The full name of the Compute Engine network to which the Job should be peered. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.pscInterfaceConfig">pscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig">VertexAiCustomJobJobSpecPscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.reservedIpRanges">reservedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | A list of names for the reserved ip ranges under the VPC network that can be used for this job. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.scheduling">scheduling</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling">VertexAiCustomJobJobSpecScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Specifies the service account for workload run-as account. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.tensorboard">tensorboard</a></code> | <code>java.lang.String</code> | The name of a Vertex AI Tensorboard resource to which this CustomJob will upload Tensorboard logs. |

---

##### `workerPoolSpecs`<sup>Required</sup> <a name="workerPoolSpecs" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.workerPoolSpecs"></a>

```java
public IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecs> getWorkerPoolSpecs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs">VertexAiCustomJobJobSpecWorkerPoolSpecs</a>>

worker_pool_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#worker_pool_specs VertexAiCustomJob#worker_pool_specs}

---

##### `baseOutputDirectory`<sup>Optional</sup> <a name="baseOutputDirectory" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.baseOutputDirectory"></a>

```java
public VertexAiCustomJobJobSpecBaseOutputDirectory getBaseOutputDirectory();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectory">VertexAiCustomJobJobSpecBaseOutputDirectory</a>

base_output_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#base_output_directory VertexAiCustomJob#base_output_directory}

---

##### `enableDashboardAccess`<sup>Optional</sup> <a name="enableDashboardAccess" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.enableDashboardAccess"></a>

```java
public java.lang.Boolean|IResolvable getEnableDashboardAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether you want Vertex AI to enable access to the customized dashboard in training chief container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#enable_dashboard_access VertexAiCustomJob#enable_dashboard_access}

---

##### `enableWebAccess`<sup>Optional</sup> <a name="enableWebAccess" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.enableWebAccess"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether you want Vertex AI to enable interactive shell access to training containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#enable_web_access VertexAiCustomJob#enable_web_access}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The full name of the Compute Engine network to which the Job should be peered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#network VertexAiCustomJob#network}

---

##### `pscInterfaceConfig`<sup>Optional</sup> <a name="pscInterfaceConfig" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.pscInterfaceConfig"></a>

```java
public VertexAiCustomJobJobSpecPscInterfaceConfig getPscInterfaceConfig();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig">VertexAiCustomJobJobSpecPscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#psc_interface_config VertexAiCustomJob#psc_interface_config}

---

##### `reservedIpRanges`<sup>Optional</sup> <a name="reservedIpRanges" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.reservedIpRanges"></a>

```java
public java.util.List<java.lang.String> getReservedIpRanges();
```

- *Type:* java.util.List<java.lang.String>

A list of names for the reserved ip ranges under the VPC network that can be used for this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#reserved_ip_ranges VertexAiCustomJob#reserved_ip_ranges}

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.scheduling"></a>

```java
public VertexAiCustomJobJobSpecScheduling getScheduling();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling">VertexAiCustomJobJobSpecScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#scheduling VertexAiCustomJob#scheduling}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Specifies the service account for workload run-as account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#service_account VertexAiCustomJob#service_account}

---

##### `tensorboard`<sup>Optional</sup> <a name="tensorboard" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.tensorboard"></a>

```java
public java.lang.String getTensorboard();
```

- *Type:* java.lang.String

The name of a Vertex AI Tensorboard resource to which this CustomJob will upload Tensorboard logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#tensorboard VertexAiCustomJob#tensorboard}

---

### VertexAiCustomJobJobSpecBaseOutputDirectory <a name="VertexAiCustomJobJobSpecBaseOutputDirectory" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectory.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecBaseOutputDirectory;

VertexAiCustomJobJobSpecBaseOutputDirectory.builder()
    .outputUriPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectory.property.outputUriPrefix">outputUriPrefix</a></code> | <code>java.lang.String</code> | Cloud Storage folder URL to store the output. |

---

##### `outputUriPrefix`<sup>Required</sup> <a name="outputUriPrefix" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectory.property.outputUriPrefix"></a>

```java
public java.lang.String getOutputUriPrefix();
```

- *Type:* java.lang.String

Cloud Storage folder URL to store the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#output_uri_prefix VertexAiCustomJob#output_uri_prefix}

---

### VertexAiCustomJobJobSpecPscInterfaceConfig <a name="VertexAiCustomJobJobSpecPscInterfaceConfig" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecPscInterfaceConfig;

VertexAiCustomJobJobSpecPscInterfaceConfig.builder()
//  .dnsPeeringConfigs(IResolvable|java.util.List<VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs>)
//  .networkAttachment(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig.property.dnsPeeringConfigs">dnsPeeringConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>></code> | dns_peering_configs block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig.property.networkAttachment">networkAttachment</a></code> | <code>java.lang.String</code> | The name of the attachment to connect to. |

---

##### `dnsPeeringConfigs`<sup>Optional</sup> <a name="dnsPeeringConfigs" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig.property.dnsPeeringConfigs"></a>

```java
public IResolvable|java.util.List<VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs> getDnsPeeringConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>>

dns_peering_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#dns_peering_configs VertexAiCustomJob#dns_peering_configs}

---

##### `networkAttachment`<sup>Optional</sup> <a name="networkAttachment" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig.property.networkAttachment"></a>

```java
public java.lang.String getNetworkAttachment();
```

- *Type:* java.lang.String

The name of the attachment to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#network_attachment VertexAiCustomJob#network_attachment}

---

### VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs <a name="VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs;

VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.builder()
    .domain(java.lang.String)
    .targetNetwork(java.lang.String)
    .targetProject(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.domain">domain</a></code> | <code>java.lang.String</code> | The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork">targetNetwork</a></code> | <code>java.lang.String</code> | The VPC network name in the target_project where the DNS zone specified by 'domain' is visible. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.targetProject">targetProject</a></code> | <code>java.lang.String</code> | The project ID hosting the Cloud DNS managed zone that contains the 'domain'. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#domain VertexAiCustomJob#domain}

---

##### `targetNetwork`<sup>Required</sup> <a name="targetNetwork" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork"></a>

```java
public java.lang.String getTargetNetwork();
```

- *Type:* java.lang.String

The VPC network name in the target_project where the DNS zone specified by 'domain' is visible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#target_network VertexAiCustomJob#target_network}

---

##### `targetProject`<sup>Required</sup> <a name="targetProject" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.targetProject"></a>

```java
public java.lang.String getTargetProject();
```

- *Type:* java.lang.String

The project ID hosting the Cloud DNS managed zone that contains the 'domain'.

The Vertex AI Service Agent requires the dns.peer role on this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#target_project VertexAiCustomJob#target_project}

---

### VertexAiCustomJobJobSpecScheduling <a name="VertexAiCustomJobJobSpecScheduling" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecScheduling;

VertexAiCustomJobJobSpecScheduling.builder()
//  .disableRetries(java.lang.Boolean|IResolvable)
//  .maxWaitDuration(java.lang.String)
//  .restartJobOnWorkerRestart(java.lang.Boolean|IResolvable)
//  .strategy(java.lang.String)
//  .timeout(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling.property.disableRetries">disableRetries</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates if the job should retry for internal errors after the job starts running. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling.property.maxWaitDuration">maxWaitDuration</a></code> | <code>java.lang.String</code> | The maximum duration that a job will wait for the requested resources to be provisioned if the scheduling strategy is set to FLEX_START. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling.property.restartJobOnWorkerRestart">restartJobOnWorkerRestart</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Restarts the entire CustomJob if a worker gets restarted. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling.property.strategy">strategy</a></code> | <code>java.lang.String</code> | This determines which type of scheduling strategy to use. Possible values: ["STANDARD", "SPOT", "FLEX_START"]. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling.property.timeout">timeout</a></code> | <code>java.lang.String</code> | The maximum job running time. |

---

##### `disableRetries`<sup>Optional</sup> <a name="disableRetries" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling.property.disableRetries"></a>

```java
public java.lang.Boolean|IResolvable getDisableRetries();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates if the job should retry for internal errors after the job starts running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#disable_retries VertexAiCustomJob#disable_retries}

---

##### `maxWaitDuration`<sup>Optional</sup> <a name="maxWaitDuration" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling.property.maxWaitDuration"></a>

```java
public java.lang.String getMaxWaitDuration();
```

- *Type:* java.lang.String

The maximum duration that a job will wait for the requested resources to be provisioned if the scheduling strategy is set to FLEX_START.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#max_wait_duration VertexAiCustomJob#max_wait_duration}

---

##### `restartJobOnWorkerRestart`<sup>Optional</sup> <a name="restartJobOnWorkerRestart" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling.property.restartJobOnWorkerRestart"></a>

```java
public java.lang.Boolean|IResolvable getRestartJobOnWorkerRestart();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Restarts the entire CustomJob if a worker gets restarted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#restart_job_on_worker_restart VertexAiCustomJob#restart_job_on_worker_restart}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling.property.strategy"></a>

```java
public java.lang.String getStrategy();
```

- *Type:* java.lang.String

This determines which type of scheduling strategy to use. Possible values: ["STANDARD", "SPOT", "FLEX_START"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#strategy VertexAiCustomJob#strategy}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

The maximum job running time.

The default is 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#timeout VertexAiCustomJob#timeout}

---

### VertexAiCustomJobJobSpecWorkerPoolSpecs <a name="VertexAiCustomJobJobSpecWorkerPoolSpecs" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecs;

VertexAiCustomJobJobSpecWorkerPoolSpecs.builder()
//  .containerSpec(VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec)
//  .diskSpec(VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec)
//  .lustreMounts(IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts>)
//  .machineSpec(VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec)
//  .nfsMounts(IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts>)
//  .pythonPackageSpec(VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec)
//  .replicaCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.containerSpec">containerSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a></code> | container_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.diskSpec">diskSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a></code> | disk_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.lustreMounts">lustreMounts</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>></code> | lustre_mounts block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.nfsMounts">nfsMounts</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>></code> | nfs_mounts block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.pythonPackageSpec">pythonPackageSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a></code> | python_package_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.replicaCount">replicaCount</a></code> | <code>java.lang.Number</code> | The number of worker replicas to use for this worker pool. |

---

##### `containerSpec`<sup>Optional</sup> <a name="containerSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.containerSpec"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec getContainerSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a>

container_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#container_spec VertexAiCustomJob#container_spec}

---

##### `diskSpec`<sup>Optional</sup> <a name="diskSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.diskSpec"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec getDiskSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a>

disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#disk_spec VertexAiCustomJob#disk_spec}

---

##### `lustreMounts`<sup>Optional</sup> <a name="lustreMounts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.lustreMounts"></a>

```java
public IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts> getLustreMounts();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>>

lustre_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#lustre_mounts VertexAiCustomJob#lustre_mounts}

---

##### `machineSpec`<sup>Optional</sup> <a name="machineSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.machineSpec"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec getMachineSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#machine_spec VertexAiCustomJob#machine_spec}

---

##### `nfsMounts`<sup>Optional</sup> <a name="nfsMounts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.nfsMounts"></a>

```java
public IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts> getNfsMounts();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>>

nfs_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#nfs_mounts VertexAiCustomJob#nfs_mounts}

---

##### `pythonPackageSpec`<sup>Optional</sup> <a name="pythonPackageSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.pythonPackageSpec"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec getPythonPackageSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a>

python_package_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#python_package_spec VertexAiCustomJob#python_package_spec}

---

##### `replicaCount`<sup>Optional</sup> <a name="replicaCount" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.replicaCount"></a>

```java
public java.lang.Number getReplicaCount();
```

- *Type:* java.lang.Number

The number of worker replicas to use for this worker pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#replica_count VertexAiCustomJob#replica_count}

---

### VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec;

VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.builder()
    .imageUri(java.lang.String)
//  .args(java.util.List<java.lang.String>)
//  .command(java.util.List<java.lang.String>)
//  .env(IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | The URI of a container image in the Container Registry that is to be run on each worker replica. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | The arguments to be passed when starting the container. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | The command to be invoked when the container is started. It overrides the entrypoint instruction in Dockerfile when provided. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.env">env</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>></code> | env block. |

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

The URI of a container image in the Container Registry that is to be run on each worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#image_uri VertexAiCustomJob#image_uri}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

The arguments to be passed when starting the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#args VertexAiCustomJob#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

The command to be invoked when the container is started. It overrides the entrypoint instruction in Dockerfile when provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#command VertexAiCustomJob#command}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.env"></a>

```java
public IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv> getEnv();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>>

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#env VertexAiCustomJob#env}

---

### VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv;

VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.property.name">name</a></code> | <code>java.lang.String</code> | Name of the environment variable. Must be a valid C identifier. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.property.value">value</a></code> | <code>java.lang.String</code> | Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the environment variable. Must be a valid C identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#name VertexAiCustomJob#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#value VertexAiCustomJob#value}

---

### VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec;

VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.builder()
//  .bootDiskSizeGb(java.lang.Number)
//  .bootDiskType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>java.lang.Number</code> | Size in GB of the boot disk (default is 100GB). |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.property.bootDiskType">bootDiskType</a></code> | <code>java.lang.String</code> | Type of the disk. |

---

##### `bootDiskSizeGb`<sup>Optional</sup> <a name="bootDiskSizeGb" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.property.bootDiskSizeGb"></a>

```java
public java.lang.Number getBootDiskSizeGb();
```

- *Type:* java.lang.Number

Size in GB of the boot disk (default is 100GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#boot_disk_size_gb VertexAiCustomJob#boot_disk_size_gb}

---

##### `bootDiskType`<sup>Optional</sup> <a name="bootDiskType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.property.bootDiskType"></a>

```java
public java.lang.String getBootDiskType();
```

- *Type:* java.lang.String

Type of the disk.

The default value depends on the machine type. Valid values include: "pd-ssd", "pd-standard", "pd-balanced", and "hyperdisk-balanced".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#boot_disk_type VertexAiCustomJob#boot_disk_type}

---

### VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts;

VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.builder()
    .filesystem(java.lang.String)
    .instanceIp(java.lang.String)
    .mountPoint(java.lang.String)
    .volumeHandle(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.filesystem">filesystem</a></code> | <code>java.lang.String</code> | The name of the Lustre filesystem. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.instanceIp">instanceIp</a></code> | <code>java.lang.String</code> | IP address of the Lustre instance. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | Destination mount path. The Lustre file system will be mounted for the user under /mnt/lustre/<mount_point>. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.volumeHandle">volumeHandle</a></code> | <code>java.lang.String</code> | The unique identifier of the Lustre volume. |

---

##### `filesystem`<sup>Required</sup> <a name="filesystem" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.filesystem"></a>

```java
public java.lang.String getFilesystem();
```

- *Type:* java.lang.String

The name of the Lustre filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#filesystem VertexAiCustomJob#filesystem}

---

##### `instanceIp`<sup>Required</sup> <a name="instanceIp" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.instanceIp"></a>

```java
public java.lang.String getInstanceIp();
```

- *Type:* java.lang.String

IP address of the Lustre instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#instance_ip VertexAiCustomJob#instance_ip}

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

Destination mount path. The Lustre file system will be mounted for the user under /mnt/lustre/<mount_point>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#mount_point VertexAiCustomJob#mount_point}

---

##### `volumeHandle`<sup>Required</sup> <a name="volumeHandle" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.volumeHandle"></a>

```java
public java.lang.String getVolumeHandle();
```

- *Type:* java.lang.String

The unique identifier of the Lustre volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#volume_handle VertexAiCustomJob#volume_handle}

---

### VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec;

VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.builder()
//  .acceleratorCount(java.lang.Number)
//  .acceleratorType(java.lang.String)
//  .machineType(java.lang.String)
//  .reservationAffinity(VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity)
//  .tpuTopology(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | The number of accelerators to attach to the machine. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | The type of accelerator(s) that may be attached to the machine. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.machineType">machineType</a></code> | <code>java.lang.String</code> | The type of the machine. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.tpuTopology">tpuTopology</a></code> | <code>java.lang.String</code> | The topology of the TPUs. |

---

##### `acceleratorCount`<sup>Optional</sup> <a name="acceleratorCount" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

The number of accelerators to attach to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#accelerator_count VertexAiCustomJob#accelerator_count}

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

The type of accelerator(s) that may be attached to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#accelerator_type VertexAiCustomJob#accelerator_type}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

The type of the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#machine_type VertexAiCustomJob#machine_type}

---

##### `reservationAffinity`<sup>Optional</sup> <a name="reservationAffinity" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.reservationAffinity"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity getReservationAffinity();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#reservation_affinity VertexAiCustomJob#reservation_affinity}

---

##### `tpuTopology`<sup>Optional</sup> <a name="tpuTopology" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.tpuTopology"></a>

```java
public java.lang.String getTpuTopology();
```

- *Type:* java.lang.String

The topology of the TPUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#tpu_topology VertexAiCustomJob#tpu_topology}

---

### VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity;

VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.builder()
    .reservationAffinityType(java.lang.String)
//  .key(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.reservationAffinityType">reservationAffinityType</a></code> | <code>java.lang.String</code> | Specifies the reservation affinity type. Possible values: "NO_RESERVATION", "ANY_RESERVATION", and "SPECIFIC_RESERVATION". |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.key">key</a></code> | <code>java.lang.String</code> | Corresponds to the label key of a reservation resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Corresponds to the label values of a reservation resource. |

---

##### `reservationAffinityType`<sup>Required</sup> <a name="reservationAffinityType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.reservationAffinityType"></a>

```java
public java.lang.String getReservationAffinityType();
```

- *Type:* java.lang.String

Specifies the reservation affinity type. Possible values: "NO_RESERVATION", "ANY_RESERVATION", and "SPECIFIC_RESERVATION".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#reservation_affinity_type VertexAiCustomJob#reservation_affinity_type}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Corresponds to the label key of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#key VertexAiCustomJob#key}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Corresponds to the label values of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#values VertexAiCustomJob#values}

---

### VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts;

VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.builder()
    .mountPoint(java.lang.String)
    .path(java.lang.String)
    .server(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | Destination mount path. The path must be absolute. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.path">path</a></code> | <code>java.lang.String</code> | Source path exported from NFS database. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.server">server</a></code> | <code>java.lang.String</code> | IP address of the NFS server. |

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

Destination mount path. The path must be absolute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#mount_point VertexAiCustomJob#mount_point}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Source path exported from NFS database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#path VertexAiCustomJob#path}

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

IP address of the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#server VertexAiCustomJob#server}

---

### VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec;

VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.builder()
    .executorImageUri(java.lang.String)
    .packageUris(java.util.List<java.lang.String>)
    .pythonModule(java.lang.String)
//  .args(java.util.List<java.lang.String>)
//  .env(IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.executorImageUri">executorImageUri</a></code> | <code>java.lang.String</code> | The URI of a container image in Artifact Registry that will run the provided Python package. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.packageUris">packageUris</a></code> | <code>java.util.List<java.lang.String></code> | The Google Cloud Storage location of the Python package files which are the training program and its dependent packages. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.pythonModule">pythonModule</a></code> | <code>java.lang.String</code> | The Python module name to run after installing the packages. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | Command line arguments to be passed to the Python task. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.env">env</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>></code> | env block. |

---

##### `executorImageUri`<sup>Required</sup> <a name="executorImageUri" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.executorImageUri"></a>

```java
public java.lang.String getExecutorImageUri();
```

- *Type:* java.lang.String

The URI of a container image in Artifact Registry that will run the provided Python package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#executor_image_uri VertexAiCustomJob#executor_image_uri}

---

##### `packageUris`<sup>Required</sup> <a name="packageUris" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.packageUris"></a>

```java
public java.util.List<java.lang.String> getPackageUris();
```

- *Type:* java.util.List<java.lang.String>

The Google Cloud Storage location of the Python package files which are the training program and its dependent packages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#package_uris VertexAiCustomJob#package_uris}

---

##### `pythonModule`<sup>Required</sup> <a name="pythonModule" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.pythonModule"></a>

```java
public java.lang.String getPythonModule();
```

- *Type:* java.lang.String

The Python module name to run after installing the packages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#python_module VertexAiCustomJob#python_module}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

Command line arguments to be passed to the Python task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#args VertexAiCustomJob#args}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.env"></a>

```java
public IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv> getEnv();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>>

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#env VertexAiCustomJob#env}

---

### VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv;

VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.property.name">name</a></code> | <code>java.lang.String</code> | Name of the environment variable. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.property.value">value</a></code> | <code>java.lang.String</code> | Value of the environment variable. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#name VertexAiCustomJob#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#value VertexAiCustomJob#value}

---

### VertexAiCustomJobTimeouts <a name="VertexAiCustomJobTimeouts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobTimeouts;

VertexAiCustomJobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#create VertexAiCustomJob#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#delete VertexAiCustomJob#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#update VertexAiCustomJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#create VertexAiCustomJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#delete VertexAiCustomJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#update VertexAiCustomJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiCustomJobEncryptionSpecOutputReference <a name="VertexAiCustomJobEncryptionSpecOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobEncryptionSpecOutputReference;

new VertexAiCustomJobEncryptionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpec">VertexAiCustomJobEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.property.internalValue"></a>

```java
public VertexAiCustomJobEncryptionSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpec">VertexAiCustomJobEncryptionSpec</a>

---


### VertexAiCustomJobErrorList <a name="VertexAiCustomJobErrorList" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobErrorList;

new VertexAiCustomJobErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.get"></a>

```java
public VertexAiCustomJobErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### VertexAiCustomJobErrorOutputReference <a name="VertexAiCustomJobErrorOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobErrorOutputReference;

new VertexAiCustomJobErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobError">VertexAiCustomJobError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.property.internalValue"></a>

```java
public VertexAiCustomJobError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobError">VertexAiCustomJobError</a>

---


### VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference <a name="VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference;

new VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.outputUriPrefixInput">outputUriPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.outputUriPrefix">outputUriPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectory">VertexAiCustomJobJobSpecBaseOutputDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outputUriPrefixInput`<sup>Optional</sup> <a name="outputUriPrefixInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.outputUriPrefixInput"></a>

```java
public java.lang.String getOutputUriPrefixInput();
```

- *Type:* java.lang.String

---

##### `outputUriPrefix`<sup>Required</sup> <a name="outputUriPrefix" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.outputUriPrefix"></a>

```java
public java.lang.String getOutputUriPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.internalValue"></a>

```java
public VertexAiCustomJobJobSpecBaseOutputDirectory getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectory">VertexAiCustomJobJobSpecBaseOutputDirectory</a>

---


### VertexAiCustomJobJobSpecOutputReference <a name="VertexAiCustomJobJobSpecOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecOutputReference;

new VertexAiCustomJobJobSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.putBaseOutputDirectory">putBaseOutputDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.putPscInterfaceConfig">putPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.putScheduling">putScheduling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.putWorkerPoolSpecs">putWorkerPoolSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetBaseOutputDirectory">resetBaseOutputDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetEnableDashboardAccess">resetEnableDashboardAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetEnableWebAccess">resetEnableWebAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetPscInterfaceConfig">resetPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetReservedIpRanges">resetReservedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetScheduling">resetScheduling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetTensorboard">resetTensorboard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBaseOutputDirectory` <a name="putBaseOutputDirectory" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.putBaseOutputDirectory"></a>

```java
public void putBaseOutputDirectory(VertexAiCustomJobJobSpecBaseOutputDirectory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.putBaseOutputDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectory">VertexAiCustomJobJobSpecBaseOutputDirectory</a>

---

##### `putPscInterfaceConfig` <a name="putPscInterfaceConfig" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.putPscInterfaceConfig"></a>

```java
public void putPscInterfaceConfig(VertexAiCustomJobJobSpecPscInterfaceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.putPscInterfaceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig">VertexAiCustomJobJobSpecPscInterfaceConfig</a>

---

##### `putScheduling` <a name="putScheduling" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.putScheduling"></a>

```java
public void putScheduling(VertexAiCustomJobJobSpecScheduling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.putScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling">VertexAiCustomJobJobSpecScheduling</a>

---

##### `putWorkerPoolSpecs` <a name="putWorkerPoolSpecs" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.putWorkerPoolSpecs"></a>

```java
public void putWorkerPoolSpecs(IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.putWorkerPoolSpecs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs">VertexAiCustomJobJobSpecWorkerPoolSpecs</a>>

---

##### `resetBaseOutputDirectory` <a name="resetBaseOutputDirectory" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetBaseOutputDirectory"></a>

```java
public void resetBaseOutputDirectory()
```

##### `resetEnableDashboardAccess` <a name="resetEnableDashboardAccess" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetEnableDashboardAccess"></a>

```java
public void resetEnableDashboardAccess()
```

##### `resetEnableWebAccess` <a name="resetEnableWebAccess" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetEnableWebAccess"></a>

```java
public void resetEnableWebAccess()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetPscInterfaceConfig` <a name="resetPscInterfaceConfig" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetPscInterfaceConfig"></a>

```java
public void resetPscInterfaceConfig()
```

##### `resetReservedIpRanges` <a name="resetReservedIpRanges" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetReservedIpRanges"></a>

```java
public void resetReservedIpRanges()
```

##### `resetScheduling` <a name="resetScheduling" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetScheduling"></a>

```java
public void resetScheduling()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetTensorboard` <a name="resetTensorboard" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetTensorboard"></a>

```java
public void resetTensorboard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.baseOutputDirectory">baseOutputDirectory</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference">VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.pscInterfaceConfig">pscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference">VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.scheduling">scheduling</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference">VertexAiCustomJobJobSpecSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.workerPoolSpecs">workerPoolSpecs</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList">VertexAiCustomJobJobSpecWorkerPoolSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.baseOutputDirectoryInput">baseOutputDirectoryInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectory">VertexAiCustomJobJobSpecBaseOutputDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.enableDashboardAccessInput">enableDashboardAccessInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.enableWebAccessInput">enableWebAccessInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.pscInterfaceConfigInput">pscInterfaceConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig">VertexAiCustomJobJobSpecPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.reservedIpRangesInput">reservedIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.schedulingInput">schedulingInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling">VertexAiCustomJobJobSpecScheduling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.tensorboardInput">tensorboardInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.workerPoolSpecsInput">workerPoolSpecsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs">VertexAiCustomJobJobSpecWorkerPoolSpecs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.enableDashboardAccess">enableDashboardAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.enableWebAccess">enableWebAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.reservedIpRanges">reservedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.tensorboard">tensorboard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec">VertexAiCustomJobJobSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseOutputDirectory`<sup>Required</sup> <a name="baseOutputDirectory" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.baseOutputDirectory"></a>

```java
public VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference getBaseOutputDirectory();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference">VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference</a>

---

##### `pscInterfaceConfig`<sup>Required</sup> <a name="pscInterfaceConfig" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.pscInterfaceConfig"></a>

```java
public VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference getPscInterfaceConfig();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference">VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference</a>

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.scheduling"></a>

```java
public VertexAiCustomJobJobSpecSchedulingOutputReference getScheduling();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference">VertexAiCustomJobJobSpecSchedulingOutputReference</a>

---

##### `workerPoolSpecs`<sup>Required</sup> <a name="workerPoolSpecs" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.workerPoolSpecs"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsList getWorkerPoolSpecs();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList">VertexAiCustomJobJobSpecWorkerPoolSpecsList</a>

---

##### `baseOutputDirectoryInput`<sup>Optional</sup> <a name="baseOutputDirectoryInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.baseOutputDirectoryInput"></a>

```java
public VertexAiCustomJobJobSpecBaseOutputDirectory getBaseOutputDirectoryInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectory">VertexAiCustomJobJobSpecBaseOutputDirectory</a>

---

##### `enableDashboardAccessInput`<sup>Optional</sup> <a name="enableDashboardAccessInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.enableDashboardAccessInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableDashboardAccessInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableWebAccessInput`<sup>Optional</sup> <a name="enableWebAccessInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.enableWebAccessInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebAccessInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `pscInterfaceConfigInput`<sup>Optional</sup> <a name="pscInterfaceConfigInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.pscInterfaceConfigInput"></a>

```java
public VertexAiCustomJobJobSpecPscInterfaceConfig getPscInterfaceConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig">VertexAiCustomJobJobSpecPscInterfaceConfig</a>

---

##### `reservedIpRangesInput`<sup>Optional</sup> <a name="reservedIpRangesInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.reservedIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getReservedIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schedulingInput`<sup>Optional</sup> <a name="schedulingInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.schedulingInput"></a>

```java
public VertexAiCustomJobJobSpecScheduling getSchedulingInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling">VertexAiCustomJobJobSpecScheduling</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `tensorboardInput`<sup>Optional</sup> <a name="tensorboardInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.tensorboardInput"></a>

```java
public java.lang.String getTensorboardInput();
```

- *Type:* java.lang.String

---

##### `workerPoolSpecsInput`<sup>Optional</sup> <a name="workerPoolSpecsInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.workerPoolSpecsInput"></a>

```java
public IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecs> getWorkerPoolSpecsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs">VertexAiCustomJobJobSpecWorkerPoolSpecs</a>>

---

##### `enableDashboardAccess`<sup>Required</sup> <a name="enableDashboardAccess" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.enableDashboardAccess"></a>

```java
public java.lang.Boolean|IResolvable getEnableDashboardAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableWebAccess`<sup>Required</sup> <a name="enableWebAccess" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.enableWebAccess"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `reservedIpRanges`<sup>Required</sup> <a name="reservedIpRanges" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.reservedIpRanges"></a>

```java
public java.util.List<java.lang.String> getReservedIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `tensorboard`<sup>Required</sup> <a name="tensorboard" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.tensorboard"></a>

```java
public java.lang.String getTensorboard();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.internalValue"></a>

```java
public VertexAiCustomJobJobSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec">VertexAiCustomJobJobSpec</a>

---


### VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList <a name="VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList;

new VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.get"></a>

```java
public VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>>

---


### VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference <a name="VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference;

new VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput">targetNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput">targetProjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork">targetNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject">targetProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `targetNetworkInput`<sup>Optional</sup> <a name="targetNetworkInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput"></a>

```java
public java.lang.String getTargetNetworkInput();
```

- *Type:* java.lang.String

---

##### `targetProjectInput`<sup>Optional</sup> <a name="targetProjectInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput"></a>

```java
public java.lang.String getTargetProjectInput();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `targetNetwork`<sup>Required</sup> <a name="targetNetwork" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork"></a>

```java
public java.lang.String getTargetNetwork();
```

- *Type:* java.lang.String

---

##### `targetProject`<sup>Required</sup> <a name="targetProject" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject"></a>

```java
public java.lang.String getTargetProject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>

---


### VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference <a name="VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference;

new VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs">putDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resetDnsPeeringConfigs">resetDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resetNetworkAttachment">resetNetworkAttachment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDnsPeeringConfigs` <a name="putDnsPeeringConfigs" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs"></a>

```java
public void putDnsPeeringConfigs(IResolvable|java.util.List<VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>>

---

##### `resetDnsPeeringConfigs` <a name="resetDnsPeeringConfigs" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resetDnsPeeringConfigs"></a>

```java
public void resetDnsPeeringConfigs()
```

##### `resetNetworkAttachment` <a name="resetNetworkAttachment" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resetNetworkAttachment"></a>

```java
public void resetNetworkAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigs">dnsPeeringConfigs</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList">VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput">dnsPeeringConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.networkAttachmentInput">networkAttachmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig">VertexAiCustomJobJobSpecPscInterfaceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsPeeringConfigs`<sup>Required</sup> <a name="dnsPeeringConfigs" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigs"></a>

```java
public VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList getDnsPeeringConfigs();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList">VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList</a>

---

##### `dnsPeeringConfigsInput`<sup>Optional</sup> <a name="dnsPeeringConfigsInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput"></a>

```java
public IResolvable|java.util.List<VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs> getDnsPeeringConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>>

---

##### `networkAttachmentInput`<sup>Optional</sup> <a name="networkAttachmentInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.networkAttachmentInput"></a>

```java
public java.lang.String getNetworkAttachmentInput();
```

- *Type:* java.lang.String

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.networkAttachment"></a>

```java
public java.lang.String getNetworkAttachment();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.internalValue"></a>

```java
public VertexAiCustomJobJobSpecPscInterfaceConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig">VertexAiCustomJobJobSpecPscInterfaceConfig</a>

---


### VertexAiCustomJobJobSpecSchedulingOutputReference <a name="VertexAiCustomJobJobSpecSchedulingOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecSchedulingOutputReference;

new VertexAiCustomJobJobSpecSchedulingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resetDisableRetries">resetDisableRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resetMaxWaitDuration">resetMaxWaitDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resetRestartJobOnWorkerRestart">resetRestartJobOnWorkerRestart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resetStrategy">resetStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableRetries` <a name="resetDisableRetries" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resetDisableRetries"></a>

```java
public void resetDisableRetries()
```

##### `resetMaxWaitDuration` <a name="resetMaxWaitDuration" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resetMaxWaitDuration"></a>

```java
public void resetMaxWaitDuration()
```

##### `resetRestartJobOnWorkerRestart` <a name="resetRestartJobOnWorkerRestart" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resetRestartJobOnWorkerRestart"></a>

```java
public void resetRestartJobOnWorkerRestart()
```

##### `resetStrategy` <a name="resetStrategy" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resetStrategy"></a>

```java
public void resetStrategy()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.disableRetriesInput">disableRetriesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.maxWaitDurationInput">maxWaitDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.restartJobOnWorkerRestartInput">restartJobOnWorkerRestartInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.strategyInput">strategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.disableRetries">disableRetries</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.maxWaitDuration">maxWaitDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.restartJobOnWorkerRestart">restartJobOnWorkerRestart</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.strategy">strategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.timeout">timeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling">VertexAiCustomJobJobSpecScheduling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disableRetriesInput`<sup>Optional</sup> <a name="disableRetriesInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.disableRetriesInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableRetriesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxWaitDurationInput`<sup>Optional</sup> <a name="maxWaitDurationInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.maxWaitDurationInput"></a>

```java
public java.lang.String getMaxWaitDurationInput();
```

- *Type:* java.lang.String

---

##### `restartJobOnWorkerRestartInput`<sup>Optional</sup> <a name="restartJobOnWorkerRestartInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.restartJobOnWorkerRestartInput"></a>

```java
public java.lang.Boolean|IResolvable getRestartJobOnWorkerRestartInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.strategyInput"></a>

```java
public java.lang.String getStrategyInput();
```

- *Type:* java.lang.String

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.timeoutInput"></a>

```java
public java.lang.String getTimeoutInput();
```

- *Type:* java.lang.String

---

##### `disableRetries`<sup>Required</sup> <a name="disableRetries" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.disableRetries"></a>

```java
public java.lang.Boolean|IResolvable getDisableRetries();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxWaitDuration`<sup>Required</sup> <a name="maxWaitDuration" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.maxWaitDuration"></a>

```java
public java.lang.String getMaxWaitDuration();
```

- *Type:* java.lang.String

---

##### `restartJobOnWorkerRestart`<sup>Required</sup> <a name="restartJobOnWorkerRestart" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.restartJobOnWorkerRestart"></a>

```java
public java.lang.Boolean|IResolvable getRestartJobOnWorkerRestart();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.strategy"></a>

```java
public java.lang.String getStrategy();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.internalValue"></a>

```java
public VertexAiCustomJobJobSpecScheduling getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling">VertexAiCustomJobJobSpecScheduling</a>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList;

new VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.get"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference;

new VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.internalValue"></a>

```java
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference;

new VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetEnv">resetEnv</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.putEnv"></a>

```java
public void putEnv(IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.putEnv.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>>

---

##### `resetArgs` <a name="resetArgs" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetCommand"></a>

```java
public void resetCommand()
```

##### `resetEnv` <a name="resetEnv" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetEnv"></a>

```java
public void resetEnv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.env">env</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.envInput">envInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.env"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList getEnv();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.envInput"></a>

```java
public IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv> getEnvInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>>

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.imageUriInput"></a>

```java
public java.lang.String getImageUriInput();
```

- *Type:* java.lang.String

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.internalValue"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference;

new VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resetBootDiskSizeGb">resetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resetBootDiskType">resetBootDiskType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBootDiskSizeGb` <a name="resetBootDiskSizeGb" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resetBootDiskSizeGb"></a>

```java
public void resetBootDiskSizeGb()
```

##### `resetBootDiskType` <a name="resetBootDiskType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resetBootDiskType"></a>

```java
public void resetBootDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskSizeGbInput">bootDiskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskTypeInput">bootDiskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskType">bootDiskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bootDiskSizeGbInput`<sup>Optional</sup> <a name="bootDiskSizeGbInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskSizeGbInput"></a>

```java
public java.lang.Number getBootDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `bootDiskTypeInput`<sup>Optional</sup> <a name="bootDiskTypeInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskTypeInput"></a>

```java
public java.lang.String getBootDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `bootDiskSizeGb`<sup>Required</sup> <a name="bootDiskSizeGb" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskSizeGb"></a>

```java
public java.lang.Number getBootDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `bootDiskType`<sup>Required</sup> <a name="bootDiskType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskType"></a>

```java
public java.lang.String getBootDiskType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.internalValue"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsList <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsList" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecsList;

new VertexAiCustomJobJobSpecWorkerPoolSpecsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.get"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs">VertexAiCustomJobJobSpecWorkerPoolSpecs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs">VertexAiCustomJobJobSpecWorkerPoolSpecs</a>>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList;

new VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.get"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference;

new VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.filesystemInput">filesystemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.instanceIpInput">instanceIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.volumeHandleInput">volumeHandleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.filesystem">filesystem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.instanceIp">instanceIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.volumeHandle">volumeHandle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filesystemInput`<sup>Optional</sup> <a name="filesystemInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.filesystemInput"></a>

```java
public java.lang.String getFilesystemInput();
```

- *Type:* java.lang.String

---

##### `instanceIpInput`<sup>Optional</sup> <a name="instanceIpInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.instanceIpInput"></a>

```java
public java.lang.String getInstanceIpInput();
```

- *Type:* java.lang.String

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.mountPointInput"></a>

```java
public java.lang.String getMountPointInput();
```

- *Type:* java.lang.String

---

##### `volumeHandleInput`<sup>Optional</sup> <a name="volumeHandleInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.volumeHandleInput"></a>

```java
public java.lang.String getVolumeHandleInput();
```

- *Type:* java.lang.String

---

##### `filesystem`<sup>Required</sup> <a name="filesystem" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.filesystem"></a>

```java
public java.lang.String getFilesystem();
```

- *Type:* java.lang.String

---

##### `instanceIp`<sup>Required</sup> <a name="instanceIp" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.instanceIp"></a>

```java
public java.lang.String getInstanceIp();
```

- *Type:* java.lang.String

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

---

##### `volumeHandle`<sup>Required</sup> <a name="volumeHandle" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.volumeHandle"></a>

```java
public java.lang.String getVolumeHandle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.internalValue"></a>

```java
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference;

new VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.putReservationAffinity">putReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetAcceleratorCount">resetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetReservationAffinity">resetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetTpuTopology">resetTpuTopology</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReservationAffinity` <a name="putReservationAffinity" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.putReservationAffinity"></a>

```java
public void putReservationAffinity(VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a>

---

##### `resetAcceleratorCount` <a name="resetAcceleratorCount" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetAcceleratorCount"></a>

```java
public void resetAcceleratorCount()
```

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetAcceleratorType"></a>

```java
public void resetAcceleratorType()
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetMachineType"></a>

```java
public void resetMachineType()
```

##### `resetReservationAffinity` <a name="resetReservationAffinity" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetReservationAffinity"></a>

```java
public void resetReservationAffinity()
```

##### `resetTpuTopology` <a name="resetTpuTopology" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetTpuTopology"></a>

```java
public void resetTpuTopology()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorCountInput">acceleratorCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.reservationAffinityInput">reservationAffinityInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.tpuTopologyInput">tpuTopologyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.tpuTopology">tpuTopology</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `reservationAffinity`<sup>Required</sup> <a name="reservationAffinity" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.reservationAffinity"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference getReservationAffinity();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference</a>

---

##### `acceleratorCountInput`<sup>Optional</sup> <a name="acceleratorCountInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorCountInput"></a>

```java
public java.lang.Number getAcceleratorCountInput();
```

- *Type:* java.lang.Number

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```java
public java.lang.String getAcceleratorTypeInput();
```

- *Type:* java.lang.String

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `reservationAffinityInput`<sup>Optional</sup> <a name="reservationAffinityInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.reservationAffinityInput"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity getReservationAffinityInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a>

---

##### `tpuTopologyInput`<sup>Optional</sup> <a name="tpuTopologyInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.tpuTopologyInput"></a>

```java
public java.lang.String getTpuTopologyInput();
```

- *Type:* java.lang.String

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `tpuTopology`<sup>Required</sup> <a name="tpuTopology" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.tpuTopology"></a>

```java
public java.lang.String getTpuTopology();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.internalValue"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference;

new VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.reservationAffinityTypeInput">reservationAffinityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.reservationAffinityType">reservationAffinityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `reservationAffinityTypeInput`<sup>Optional</sup> <a name="reservationAffinityTypeInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.reservationAffinityTypeInput"></a>

```java
public java.lang.String getReservationAffinityTypeInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `reservationAffinityType`<sup>Required</sup> <a name="reservationAffinityType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.reservationAffinityType"></a>

```java
public java.lang.String getReservationAffinityType();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.internalValue"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList;

new VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.get"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference;

new VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.serverInput">serverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.server">server</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.mountPointInput"></a>

```java
public java.lang.String getMountPointInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.serverInput"></a>

```java
public java.lang.String getServerInput();
```

- *Type:* java.lang.String

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.internalValue"></a>

```java
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference;

new VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putContainerSpec">putContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putDiskSpec">putDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putLustreMounts">putLustreMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putMachineSpec">putMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putNfsMounts">putNfsMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putPythonPackageSpec">putPythonPackageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetContainerSpec">resetContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetDiskSpec">resetDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetLustreMounts">resetLustreMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetMachineSpec">resetMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetNfsMounts">resetNfsMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetPythonPackageSpec">resetPythonPackageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetReplicaCount">resetReplicaCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerSpec` <a name="putContainerSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putContainerSpec"></a>

```java
public void putContainerSpec(VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putContainerSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a>

---

##### `putDiskSpec` <a name="putDiskSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putDiskSpec"></a>

```java
public void putDiskSpec(VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putDiskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a>

---

##### `putLustreMounts` <a name="putLustreMounts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putLustreMounts"></a>

```java
public void putLustreMounts(IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putLustreMounts.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>>

---

##### `putMachineSpec` <a name="putMachineSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putMachineSpec"></a>

```java
public void putMachineSpec(VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a>

---

##### `putNfsMounts` <a name="putNfsMounts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putNfsMounts"></a>

```java
public void putNfsMounts(IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putNfsMounts.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>>

---

##### `putPythonPackageSpec` <a name="putPythonPackageSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putPythonPackageSpec"></a>

```java
public void putPythonPackageSpec(VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putPythonPackageSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a>

---

##### `resetContainerSpec` <a name="resetContainerSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetContainerSpec"></a>

```java
public void resetContainerSpec()
```

##### `resetDiskSpec` <a name="resetDiskSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetDiskSpec"></a>

```java
public void resetDiskSpec()
```

##### `resetLustreMounts` <a name="resetLustreMounts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetLustreMounts"></a>

```java
public void resetLustreMounts()
```

##### `resetMachineSpec` <a name="resetMachineSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetMachineSpec"></a>

```java
public void resetMachineSpec()
```

##### `resetNfsMounts` <a name="resetNfsMounts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetNfsMounts"></a>

```java
public void resetNfsMounts()
```

##### `resetPythonPackageSpec` <a name="resetPythonPackageSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetPythonPackageSpec"></a>

```java
public void resetPythonPackageSpec()
```

##### `resetReplicaCount` <a name="resetReplicaCount" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetReplicaCount"></a>

```java
public void resetReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.containerSpec">containerSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.diskSpec">diskSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference">VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.lustreMounts">lustreMounts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList">VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.nfsMounts">nfsMounts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList">VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.pythonPackageSpec">pythonPackageSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.containerSpecInput">containerSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.diskSpecInput">diskSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.lustreMountsInput">lustreMountsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.machineSpecInput">machineSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.nfsMountsInput">nfsMountsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.pythonPackageSpecInput">pythonPackageSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.replicaCountInput">replicaCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.replicaCount">replicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs">VertexAiCustomJobJobSpecWorkerPoolSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerSpec`<sup>Required</sup> <a name="containerSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.containerSpec"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference getContainerSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference</a>

---

##### `diskSpec`<sup>Required</sup> <a name="diskSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.diskSpec"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference getDiskSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference">VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference</a>

---

##### `lustreMounts`<sup>Required</sup> <a name="lustreMounts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.lustreMounts"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList getLustreMounts();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList">VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList</a>

---

##### `machineSpec`<sup>Required</sup> <a name="machineSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.machineSpec"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference getMachineSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference</a>

---

##### `nfsMounts`<sup>Required</sup> <a name="nfsMounts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.nfsMounts"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList getNfsMounts();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList">VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList</a>

---

##### `pythonPackageSpec`<sup>Required</sup> <a name="pythonPackageSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.pythonPackageSpec"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference getPythonPackageSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference</a>

---

##### `containerSpecInput`<sup>Optional</sup> <a name="containerSpecInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.containerSpecInput"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec getContainerSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a>

---

##### `diskSpecInput`<sup>Optional</sup> <a name="diskSpecInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.diskSpecInput"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec getDiskSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a>

---

##### `lustreMountsInput`<sup>Optional</sup> <a name="lustreMountsInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.lustreMountsInput"></a>

```java
public IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts> getLustreMountsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>>

---

##### `machineSpecInput`<sup>Optional</sup> <a name="machineSpecInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.machineSpecInput"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec getMachineSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a>

---

##### `nfsMountsInput`<sup>Optional</sup> <a name="nfsMountsInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.nfsMountsInput"></a>

```java
public IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts> getNfsMountsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>>

---

##### `pythonPackageSpecInput`<sup>Optional</sup> <a name="pythonPackageSpecInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.pythonPackageSpecInput"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec getPythonPackageSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a>

---

##### `replicaCountInput`<sup>Optional</sup> <a name="replicaCountInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.replicaCountInput"></a>

```java
public java.lang.Number getReplicaCountInput();
```

- *Type:* java.lang.Number

---

##### `replicaCount`<sup>Required</sup> <a name="replicaCount" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.replicaCount"></a>

```java
public java.lang.Number getReplicaCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.internalValue"></a>

```java
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs">VertexAiCustomJobJobSpecWorkerPoolSpecs</a>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList;

new VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.get"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference;

new VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.internalValue"></a>

```java
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference;

new VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resetEnv">resetEnv</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.putEnv"></a>

```java
public void putEnv(IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.putEnv.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>>

---

##### `resetArgs` <a name="resetArgs" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetEnv` <a name="resetEnv" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resetEnv"></a>

```java
public void resetEnv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.env">env</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.envInput">envInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.executorImageUriInput">executorImageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.packageUrisInput">packageUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.pythonModuleInput">pythonModuleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.executorImageUri">executorImageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.packageUris">packageUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.pythonModule">pythonModule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.env"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList getEnv();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.envInput"></a>

```java
public IResolvable|java.util.List<VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv> getEnvInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>>

---

##### `executorImageUriInput`<sup>Optional</sup> <a name="executorImageUriInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.executorImageUriInput"></a>

```java
public java.lang.String getExecutorImageUriInput();
```

- *Type:* java.lang.String

---

##### `packageUrisInput`<sup>Optional</sup> <a name="packageUrisInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.packageUrisInput"></a>

```java
public java.util.List<java.lang.String> getPackageUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pythonModuleInput`<sup>Optional</sup> <a name="pythonModuleInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.pythonModuleInput"></a>

```java
public java.lang.String getPythonModuleInput();
```

- *Type:* java.lang.String

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `executorImageUri`<sup>Required</sup> <a name="executorImageUri" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.executorImageUri"></a>

```java
public java.lang.String getExecutorImageUri();
```

- *Type:* java.lang.String

---

##### `packageUris`<sup>Required</sup> <a name="packageUris" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.packageUris"></a>

```java
public java.util.List<java.lang.String> getPackageUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pythonModule`<sup>Required</sup> <a name="pythonModule" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.pythonModule"></a>

```java
public java.lang.String getPythonModule();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.internalValue"></a>

```java
public VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a>

---


### VertexAiCustomJobTimeoutsOutputReference <a name="VertexAiCustomJobTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_custom_job.VertexAiCustomJobTimeoutsOutputReference;

new VertexAiCustomJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts">VertexAiCustomJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VertexAiCustomJobTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts">VertexAiCustomJobTimeouts</a>

---



