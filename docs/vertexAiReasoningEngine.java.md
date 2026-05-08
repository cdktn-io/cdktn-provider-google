# `vertexAiReasoningEngine` Submodule <a name="`vertexAiReasoningEngine` Submodule" id="@cdktn/provider-google.vertexAiReasoningEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiReasoningEngine <a name="VertexAiReasoningEngine" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine google_vertex_ai_reasoning_engine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngine;

VertexAiReasoningEngine.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .encryptionSpec(VertexAiReasoningEngineEncryptionSpec)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .spec(VertexAiReasoningEngineSpec)
//  .timeouts(VertexAiReasoningEngineTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the ReasoningEngine. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the ReasoningEngine. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec">VertexAiReasoningEngineEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#id VertexAiReasoningEngine#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels associated with this ReasoningEngine. You can use these to organize and group your ReasoningEngines. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#project VertexAiReasoningEngine#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the reasoning engine. eg us-central1. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec">VertexAiReasoningEngineSpec</a></code> | spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts">VertexAiReasoningEngineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the ReasoningEngine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#display_name VertexAiReasoningEngine#display_name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Optional.

The deletion policy for the reasoning engine. Setting this to FORCE allows the reasoning engine to be deleted regardless of child undeleted resources. Possible values: ["FORCE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#deletion_policy VertexAiReasoningEngine#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the ReasoningEngine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#description VertexAiReasoningEngine#description}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec">VertexAiReasoningEngineEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#encryption_spec VertexAiReasoningEngine#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#id VertexAiReasoningEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels associated with this ReasoningEngine. You can use these to organize and group your ReasoningEngines.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#labels VertexAiReasoningEngine#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#project VertexAiReasoningEngine#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the reasoning engine. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#region VertexAiReasoningEngine#region}

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec">VertexAiReasoningEngineSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#spec VertexAiReasoningEngine#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts">VertexAiReasoningEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#timeouts VertexAiReasoningEngine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetEncryptionSpec">resetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetSpec">resetSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.putEncryptionSpec"></a>

```java
public void putEncryptionSpec(VertexAiReasoningEngineEncryptionSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec">VertexAiReasoningEngineEncryptionSpec</a>

---

##### `putSpec` <a name="putSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.putSpec"></a>

```java
public void putSpec(VertexAiReasoningEngineSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec">VertexAiReasoningEngineSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.putTimeouts"></a>

```java
public void putTimeouts(VertexAiReasoningEngineTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts">VertexAiReasoningEngineTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncryptionSpec` <a name="resetEncryptionSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetEncryptionSpec"></a>

```java
public void resetEncryptionSpec()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSpec` <a name="resetSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetSpec"></a>

```java
public void resetSpec()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiReasoningEngine resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.isConstruct"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngine;

VertexAiReasoningEngine.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.isTerraformElement"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngine;

VertexAiReasoningEngine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.isTerraformResource"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngine;

VertexAiReasoningEngine.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngine;

VertexAiReasoningEngine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VertexAiReasoningEngine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VertexAiReasoningEngine resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VertexAiReasoningEngine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VertexAiReasoningEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiReasoningEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference">VertexAiReasoningEngineEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference">VertexAiReasoningEngineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference">VertexAiReasoningEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec">VertexAiReasoningEngineEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.specInput">specInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec">VertexAiReasoningEngineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts">VertexAiReasoningEngineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.encryptionSpec"></a>

```java
public VertexAiReasoningEngineEncryptionSpecOutputReference getEncryptionSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference">VertexAiReasoningEngineEncryptionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.spec"></a>

```java
public VertexAiReasoningEngineSpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference">VertexAiReasoningEngineSpecOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.timeouts"></a>

```java
public VertexAiReasoningEngineTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference">VertexAiReasoningEngineTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.encryptionSpecInput"></a>

```java
public VertexAiReasoningEngineEncryptionSpec getEncryptionSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec">VertexAiReasoningEngineEncryptionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.specInput"></a>

```java
public VertexAiReasoningEngineSpec getSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec">VertexAiReasoningEngineSpec</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.timeoutsInput"></a>

```java
public IResolvable|VertexAiReasoningEngineTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts">VertexAiReasoningEngineTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiReasoningEngineConfig <a name="VertexAiReasoningEngineConfig" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineConfig;

VertexAiReasoningEngineConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .encryptionSpec(VertexAiReasoningEngineEncryptionSpec)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .spec(VertexAiReasoningEngineSpec)
//  .timeouts(VertexAiReasoningEngineTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the ReasoningEngine. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the ReasoningEngine. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec">VertexAiReasoningEngineEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#id VertexAiReasoningEngine#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels associated with this ReasoningEngine. You can use these to organize and group your ReasoningEngines. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#project VertexAiReasoningEngine#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the reasoning engine. eg us-central1. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec">VertexAiReasoningEngineSpec</a></code> | spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts">VertexAiReasoningEngineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the ReasoningEngine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#display_name VertexAiReasoningEngine#display_name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Optional.

The deletion policy for the reasoning engine. Setting this to FORCE allows the reasoning engine to be deleted regardless of child undeleted resources. Possible values: ["FORCE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#deletion_policy VertexAiReasoningEngine#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the ReasoningEngine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#description VertexAiReasoningEngine#description}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.encryptionSpec"></a>

```java
public VertexAiReasoningEngineEncryptionSpec getEncryptionSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec">VertexAiReasoningEngineEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#encryption_spec VertexAiReasoningEngine#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#id VertexAiReasoningEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels associated with this ReasoningEngine. You can use these to organize and group your ReasoningEngines.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#labels VertexAiReasoningEngine#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#project VertexAiReasoningEngine#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the reasoning engine. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#region VertexAiReasoningEngine#region}

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.spec"></a>

```java
public VertexAiReasoningEngineSpec getSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec">VertexAiReasoningEngineSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#spec VertexAiReasoningEngine#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.timeouts"></a>

```java
public VertexAiReasoningEngineTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts">VertexAiReasoningEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#timeouts VertexAiReasoningEngine#timeouts}

---

### VertexAiReasoningEngineEncryptionSpec <a name="VertexAiReasoningEngineEncryptionSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineEncryptionSpec;

VertexAiReasoningEngineEncryptionSpec.builder()
    .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Required. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

Required.

The Cloud KMS resource identifier of the customer managed
encryption key used to protect a resource. Has the form:
projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key.
The key needs to be in the same region as where the compute resource
is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#kms_key_name VertexAiReasoningEngine#kms_key_name}

---

### VertexAiReasoningEngineSpec <a name="VertexAiReasoningEngineSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpec;

VertexAiReasoningEngineSpec.builder()
//  .agentFramework(java.lang.String)
//  .classMethods(java.lang.String)
//  .containerSpec(VertexAiReasoningEngineSpecContainerSpec)
//  .deploymentSpec(VertexAiReasoningEngineSpecDeploymentSpec)
//  .identityType(java.lang.String)
//  .packageSpec(VertexAiReasoningEngineSpecPackageSpec)
//  .serviceAccount(java.lang.String)
//  .sourceCodeSpec(VertexAiReasoningEngineSpecSourceCodeSpec)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.agentFramework">agentFramework</a></code> | <code>java.lang.String</code> | Optional. The OSS agent framework used to develop the agent. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.classMethods">classMethods</a></code> | <code>java.lang.String</code> | Optional. Declarations for object class methods in OpenAPI specification format. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.containerSpec">containerSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpec">VertexAiReasoningEngineSpecContainerSpec</a></code> | container_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.deploymentSpec">deploymentSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec">VertexAiReasoningEngineSpecDeploymentSpec</a></code> | deployment_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.identityType">identityType</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.packageSpec">packageSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec">VertexAiReasoningEngineSpecPackageSpec</a></code> | package_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.sourceCodeSpec">sourceCodeSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec">VertexAiReasoningEngineSpecSourceCodeSpec</a></code> | source_code_spec block. |

---

##### `agentFramework`<sup>Optional</sup> <a name="agentFramework" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.agentFramework"></a>

```java
public java.lang.String getAgentFramework();
```

- *Type:* java.lang.String

Optional. The OSS agent framework used to develop the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#agent_framework VertexAiReasoningEngine#agent_framework}

---

##### `classMethods`<sup>Optional</sup> <a name="classMethods" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.classMethods"></a>

```java
public java.lang.String getClassMethods();
```

- *Type:* java.lang.String

Optional. Declarations for object class methods in OpenAPI specification format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#class_methods VertexAiReasoningEngine#class_methods}

---

##### `containerSpec`<sup>Optional</sup> <a name="containerSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.containerSpec"></a>

```java
public VertexAiReasoningEngineSpecContainerSpec getContainerSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpec">VertexAiReasoningEngineSpecContainerSpec</a>

container_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#container_spec VertexAiReasoningEngine#container_spec}

---

##### `deploymentSpec`<sup>Optional</sup> <a name="deploymentSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.deploymentSpec"></a>

```java
public VertexAiReasoningEngineSpecDeploymentSpec getDeploymentSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec">VertexAiReasoningEngineSpecDeploymentSpec</a>

deployment_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#deployment_spec VertexAiReasoningEngine#deployment_spec}

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

Optional.

The identity type to use for the Reasoning Engine.
If not specified, the 'service_account' field will be used if set,
otherwise the default Vertex AI Reasoning Engine Service Agent in the project will be used.
Possible values:

* 'SERVICE_ACCOUNT': Use a custom service account if the 'service_account' field is set, otherwise use the default Vertex AI Reasoning Engine Service Agent in the project.
* 'AGENT_IDENTITY': Use Agent Identity. The 'service_account' field must not be set. Possible values: ["SERVICE_ACCOUNT", "AGENT_IDENTITY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#identity_type VertexAiReasoningEngine#identity_type}

---

##### `packageSpec`<sup>Optional</sup> <a name="packageSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.packageSpec"></a>

```java
public VertexAiReasoningEngineSpecPackageSpec getPackageSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec">VertexAiReasoningEngineSpecPackageSpec</a>

package_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#package_spec VertexAiReasoningEngine#package_spec}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Optional.

The service account that the Reasoning Engine artifact runs
as. It should have "roles/storage.objectViewer" for reading the user
project's Cloud Storage and "roles/aiplatform.user" for using Vertex
extensions. If not specified, the Vertex AI Reasoning Engine service
Agent in the project will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#service_account VertexAiReasoningEngine#service_account}

---

##### `sourceCodeSpec`<sup>Optional</sup> <a name="sourceCodeSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.sourceCodeSpec"></a>

```java
public VertexAiReasoningEngineSpecSourceCodeSpec getSourceCodeSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec">VertexAiReasoningEngineSpecSourceCodeSpec</a>

source_code_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#source_code_spec VertexAiReasoningEngine#source_code_spec}

---

### VertexAiReasoningEngineSpecContainerSpec <a name="VertexAiReasoningEngineSpecContainerSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpec.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecContainerSpec;

VertexAiReasoningEngineSpecContainerSpec.builder()
    .imageUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpec.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | The Artifact Registry Docker image URI (e.g., 'us-central1-docker.pkg.dev/my-project/my-repo/my-image:tag') of the container image that is to be run on each worker replica. |

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpec.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

The Artifact Registry Docker image URI (e.g., 'us-central1-docker.pkg.dev/my-project/my-repo/my-image:tag') of the container image that is to be run on each worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#image_uri VertexAiReasoningEngine#image_uri}

---

### VertexAiReasoningEngineSpecDeploymentSpec <a name="VertexAiReasoningEngineSpecDeploymentSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecDeploymentSpec;

VertexAiReasoningEngineSpecDeploymentSpec.builder()
//  .containerConcurrency(java.lang.Number)
//  .env(IResolvable|java.util.List<VertexAiReasoningEngineSpecDeploymentSpecEnv>)
//  .maxInstances(java.lang.Number)
//  .minInstances(java.lang.Number)
//  .pscInterfaceConfig(VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig)
//  .resourceLimits(java.util.Map<java.lang.String, java.lang.String>)
//  .secretEnv(IResolvable|java.util.List<VertexAiReasoningEngineSpecDeploymentSpecSecretEnv>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.containerConcurrency">containerConcurrency</a></code> | <code>java.lang.Number</code> | Optional. Concurrency for each container and agent server. Recommended value: 2 * cpu + 1. Defaults to 9. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.env">env</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnv">VertexAiReasoningEngineSpecDeploymentSpecEnv</a>></code> | env block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.maxInstances">maxInstances</a></code> | <code>java.lang.Number</code> | Optional. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.minInstances">minInstances</a></code> | <code>java.lang.Number</code> | Optional. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.pscInterfaceConfig">pscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.resourceLimits">resourceLimits</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Resource limits for each container. Only 'cpu' and 'memory' keys are supported. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.secretEnv">secretEnv</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnv">VertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>></code> | secret_env block. |

---

##### `containerConcurrency`<sup>Optional</sup> <a name="containerConcurrency" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.containerConcurrency"></a>

```java
public java.lang.Number getContainerConcurrency();
```

- *Type:* java.lang.Number

Optional. Concurrency for each container and agent server. Recommended value: 2 * cpu + 1. Defaults to 9.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#container_concurrency VertexAiReasoningEngine#container_concurrency}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.env"></a>

```java
public IResolvable|java.util.List<VertexAiReasoningEngineSpecDeploymentSpecEnv> getEnv();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnv">VertexAiReasoningEngineSpecDeploymentSpecEnv</a>>

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#env VertexAiReasoningEngine#env}

---

##### `maxInstances`<sup>Optional</sup> <a name="maxInstances" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.maxInstances"></a>

```java
public java.lang.Number getMaxInstances();
```

- *Type:* java.lang.Number

Optional.

The maximum number of application instances that can be
launched to handle increased traffic. Defaults to 100.
Range: [1, 1000]. If VPC-SC or PSC-I is enabled, the acceptable
range is [1, 100].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#max_instances VertexAiReasoningEngine#max_instances}

---

##### `minInstances`<sup>Optional</sup> <a name="minInstances" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.minInstances"></a>

```java
public java.lang.Number getMinInstances();
```

- *Type:* java.lang.Number

Optional.

The minimum number of application instances that will be
kept running at all times. Defaults to 1. Range: [0, 10].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#min_instances VertexAiReasoningEngine#min_instances}

---

##### `pscInterfaceConfig`<sup>Optional</sup> <a name="pscInterfaceConfig" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.pscInterfaceConfig"></a>

```java
public VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig getPscInterfaceConfig();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#psc_interface_config VertexAiReasoningEngine#psc_interface_config}

---

##### `resourceLimits`<sup>Optional</sup> <a name="resourceLimits" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.resourceLimits"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceLimits();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Resource limits for each container. Only 'cpu' and 'memory' keys are supported.

Defaults to {"cpu": "4", "memory": "4Gi"}.

The only supported values for CPU are '1', '2', '4', '6' and '8'.
For more information, go to
https://cloud.google.com/run/docs/configuring/cpu.

The only supported values for memory are '1Gi', '2Gi', ... '32 Gi'.
For more information, go to
https://cloud.google.com/run/docs/configuring/memory-limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#resource_limits VertexAiReasoningEngine#resource_limits}

---

##### `secretEnv`<sup>Optional</sup> <a name="secretEnv" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.secretEnv"></a>

```java
public IResolvable|java.util.List<VertexAiReasoningEngineSpecDeploymentSpecSecretEnv> getSecretEnv();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnv">VertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>>

secret_env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#secret_env VertexAiReasoningEngine#secret_env}

---

### VertexAiReasoningEngineSpecDeploymentSpecEnv <a name="VertexAiReasoningEngineSpecDeploymentSpecEnv" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnv.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecDeploymentSpecEnv;

VertexAiReasoningEngineSpecDeploymentSpecEnv.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnv.property.name">name</a></code> | <code>java.lang.String</code> | The name of the environment variable. Must be a valid C identifier. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnv.property.value">value</a></code> | <code>java.lang.String</code> | Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnv.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the environment variable. Must be a valid C identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#name VertexAiReasoningEngine#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnv.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables.

If a variable cannot
be resolved, the reference in the input string will be
unchanged. The $(VAR_NAME) syntax can be escaped with a
double $$, ie: $$(VAR_NAME). Escaped references will never
be expanded, regardless of whether the variable exists
or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#value VertexAiReasoningEngine#value}

---

### VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig <a name="VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig;

VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig.builder()
//  .dnsPeeringConfigs(IResolvable|java.util.List<VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs>)
//  .networkAttachment(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig.property.dnsPeeringConfigs">dnsPeeringConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>></code> | dns_peering_configs block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig.property.networkAttachment">networkAttachment</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `dnsPeeringConfigs`<sup>Optional</sup> <a name="dnsPeeringConfigs" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig.property.dnsPeeringConfigs"></a>

```java
public IResolvable|java.util.List<VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs> getDnsPeeringConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>>

dns_peering_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#dns_peering_configs VertexAiReasoningEngine#dns_peering_configs}

---

##### `networkAttachment`<sup>Optional</sup> <a name="networkAttachment" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig.property.networkAttachment"></a>

```java
public java.lang.String getNetworkAttachment();
```

- *Type:* java.lang.String

Optional.

The name of the Compute Engine network attachment
to attach to the resource within the region and user project.
To specify this field, you must have already created a network attachment.
This field is only used for resources using PSC-Interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#network_attachment VertexAiReasoningEngine#network_attachment}

---

### VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs <a name="VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs;

VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.builder()
    .domain(java.lang.String)
    .targetNetwork(java.lang.String)
    .targetProject(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.property.domain">domain</a></code> | <code>java.lang.String</code> | Required. The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork">targetNetwork</a></code> | <code>java.lang.String</code> | Required. The VPC network name in the targetProject where the DNS zone specified by 'domain' is visible. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.property.targetProject">targetProject</a></code> | <code>java.lang.String</code> | Required. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Required. The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#domain VertexAiReasoningEngine#domain}

---

##### `targetNetwork`<sup>Required</sup> <a name="targetNetwork" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork"></a>

```java
public java.lang.String getTargetNetwork();
```

- *Type:* java.lang.String

Required. The VPC network name in the targetProject where the DNS zone specified by 'domain' is visible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#target_network VertexAiReasoningEngine#target_network}

---

##### `targetProject`<sup>Required</sup> <a name="targetProject" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.property.targetProject"></a>

```java
public java.lang.String getTargetProject();
```

- *Type:* java.lang.String

Required.

The project id hosting the Cloud DNS managed
zone that contains the 'domain'.
The Vertex AI service Agent requires the dns.peer role
on this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#target_project VertexAiReasoningEngine#target_project}

---

### VertexAiReasoningEngineSpecDeploymentSpecSecretEnv <a name="VertexAiReasoningEngineSpecDeploymentSpecSecretEnv" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnv.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnv;

VertexAiReasoningEngineSpecDeploymentSpecSecretEnv.builder()
    .name(java.lang.String)
    .secretRef(VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnv.property.name">name</a></code> | <code>java.lang.String</code> | The name of the environment variable. Must be a valid C identifier. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnv.property.secretRef">secretRef</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a></code> | secret_ref block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnv.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the environment variable. Must be a valid C identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#name VertexAiReasoningEngine#name}

---

##### `secretRef`<sup>Required</sup> <a name="secretRef" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnv.property.secretRef"></a>

```java
public VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef getSecretRef();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#secret_ref VertexAiReasoningEngine#secret_ref}

---

### VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef <a name="VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef;

VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef.builder()
    .secret(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef.property.secret">secret</a></code> | <code>java.lang.String</code> | The name of the secret in Cloud Secret Manager. Format: {secret_name}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef.property.version">version</a></code> | <code>java.lang.String</code> | The Cloud Secret Manager secret version. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

The name of the secret in Cloud Secret Manager. Format: {secret_name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#secret VertexAiReasoningEngine#secret}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The Cloud Secret Manager secret version.

Can be 'latest'
for the latest version, an integer for a specific
version, or a version alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#version VertexAiReasoningEngine#version}

---

### VertexAiReasoningEngineSpecPackageSpec <a name="VertexAiReasoningEngineSpecPackageSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecPackageSpec;

VertexAiReasoningEngineSpecPackageSpec.builder()
//  .dependencyFilesGcsUri(java.lang.String)
//  .pickleObjectGcsUri(java.lang.String)
//  .pythonVersion(java.lang.String)
//  .requirementsGcsUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec.property.dependencyFilesGcsUri">dependencyFilesGcsUri</a></code> | <code>java.lang.String</code> | Optional. The Cloud Storage URI of the dependency files in tar.gz format. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec.property.pickleObjectGcsUri">pickleObjectGcsUri</a></code> | <code>java.lang.String</code> | Optional. The Cloud Storage URI of the pickled python object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec.property.pythonVersion">pythonVersion</a></code> | <code>java.lang.String</code> | Optional. The Python version. Currently support 3.8, 3.9, 3.10, 3.11, 3.12, 3.13. If not specified, default value is 3.10. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec.property.requirementsGcsUri">requirementsGcsUri</a></code> | <code>java.lang.String</code> | Optional. The Cloud Storage URI of the requirements.txtfile. |

---

##### `dependencyFilesGcsUri`<sup>Optional</sup> <a name="dependencyFilesGcsUri" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec.property.dependencyFilesGcsUri"></a>

```java
public java.lang.String getDependencyFilesGcsUri();
```

- *Type:* java.lang.String

Optional. The Cloud Storage URI of the dependency files in tar.gz format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#dependency_files_gcs_uri VertexAiReasoningEngine#dependency_files_gcs_uri}

---

##### `pickleObjectGcsUri`<sup>Optional</sup> <a name="pickleObjectGcsUri" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec.property.pickleObjectGcsUri"></a>

```java
public java.lang.String getPickleObjectGcsUri();
```

- *Type:* java.lang.String

Optional. The Cloud Storage URI of the pickled python object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#pickle_object_gcs_uri VertexAiReasoningEngine#pickle_object_gcs_uri}

---

##### `pythonVersion`<sup>Optional</sup> <a name="pythonVersion" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec.property.pythonVersion"></a>

```java
public java.lang.String getPythonVersion();
```

- *Type:* java.lang.String

Optional. The Python version. Currently support 3.8, 3.9, 3.10, 3.11, 3.12, 3.13. If not specified, default value is 3.10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#python_version VertexAiReasoningEngine#python_version}

---

##### `requirementsGcsUri`<sup>Optional</sup> <a name="requirementsGcsUri" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec.property.requirementsGcsUri"></a>

```java
public java.lang.String getRequirementsGcsUri();
```

- *Type:* java.lang.String

Optional. The Cloud Storage URI of the requirements.txtfile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#requirements_gcs_uri VertexAiReasoningEngine#requirements_gcs_uri}

---

### VertexAiReasoningEngineSpecSourceCodeSpec <a name="VertexAiReasoningEngineSpecSourceCodeSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecSourceCodeSpec;

VertexAiReasoningEngineSpecSourceCodeSpec.builder()
//  .developerConnectSource(VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource)
//  .imageSpec(VertexAiReasoningEngineSpecSourceCodeSpecImageSpec)
//  .inlineSource(VertexAiReasoningEngineSpecSourceCodeSpecInlineSource)
//  .pythonSpec(VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec.property.developerConnectSource">developerConnectSource</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a></code> | developer_connect_source block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec.property.imageSpec">imageSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec">VertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a></code> | image_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec.property.inlineSource">inlineSource</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource">VertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a></code> | inline_source block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec.property.pythonSpec">pythonSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a></code> | python_spec block. |

---

##### `developerConnectSource`<sup>Optional</sup> <a name="developerConnectSource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec.property.developerConnectSource"></a>

```java
public VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource getDeveloperConnectSource();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a>

developer_connect_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#developer_connect_source VertexAiReasoningEngine#developer_connect_source}

---

##### `imageSpec`<sup>Optional</sup> <a name="imageSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec.property.imageSpec"></a>

```java
public VertexAiReasoningEngineSpecSourceCodeSpecImageSpec getImageSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec">VertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a>

image_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#image_spec VertexAiReasoningEngine#image_spec}

---

##### `inlineSource`<sup>Optional</sup> <a name="inlineSource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec.property.inlineSource"></a>

```java
public VertexAiReasoningEngineSpecSourceCodeSpecInlineSource getInlineSource();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource">VertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a>

inline_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#inline_source VertexAiReasoningEngine#inline_source}

---

##### `pythonSpec`<sup>Optional</sup> <a name="pythonSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec.property.pythonSpec"></a>

```java
public VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec getPythonSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a>

python_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#python_spec VertexAiReasoningEngine#python_spec}

---

### VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource <a name="VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource;

VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource.builder()
    .config(VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource.property.config">config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a></code> | config block. |

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource.property.config"></a>

```java
public VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig getConfig();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#config VertexAiReasoningEngine#config}

---

### VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig <a name="VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig;

VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.builder()
    .dir(java.lang.String)
    .gitRepositoryLink(java.lang.String)
    .revision(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.property.dir">dir</a></code> | <code>java.lang.String</code> | Directory, relative to the source root, in which to run the build. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.property.gitRepositoryLink">gitRepositoryLink</a></code> | <code>java.lang.String</code> | The Developer Connect Git repository link, formatted as projects/* /locations/* /connections/* /gitRepositoryLink/*. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.property.revision">revision</a></code> | <code>java.lang.String</code> | The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. |

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.property.dir"></a>

```java
public java.lang.String getDir();
```

- *Type:* java.lang.String

Directory, relative to the source root, in which to run the build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#dir VertexAiReasoningEngine#dir}

---

##### `gitRepositoryLink`<sup>Required</sup> <a name="gitRepositoryLink" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.property.gitRepositoryLink"></a>

```java
public java.lang.String getGitRepositoryLink();
```

- *Type:* java.lang.String

The Developer Connect Git repository link, formatted as projects/* /locations/* /connections/* /gitRepositoryLink/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#git_repository_link VertexAiReasoningEngine#git_repository_link}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#revision VertexAiReasoningEngine#revision}

---

### VertexAiReasoningEngineSpecSourceCodeSpecImageSpec <a name="VertexAiReasoningEngineSpecSourceCodeSpecImageSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec;

VertexAiReasoningEngineSpecSourceCodeSpecImageSpec.builder()
//  .buildArgs(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec.property.buildArgs">buildArgs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Build arguments to be used. They will be passed through --build-arg flags. |

---

##### `buildArgs`<sup>Optional</sup> <a name="buildArgs" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec.property.buildArgs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getBuildArgs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Build arguments to be used. They will be passed through --build-arg flags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#build_args VertexAiReasoningEngine#build_args}

---

### VertexAiReasoningEngineSpecSourceCodeSpecInlineSource <a name="VertexAiReasoningEngineSpecSourceCodeSpecInlineSource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource;

VertexAiReasoningEngineSpecSourceCodeSpecInlineSource.builder()
//  .sourceArchive(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource.property.sourceArchive">sourceArchive</a></code> | <code>java.lang.String</code> | Required. Input only. The application source code archive, provided as a compressed tarball (.tar.gz) file. A base64-encoded string. |

---

##### `sourceArchive`<sup>Optional</sup> <a name="sourceArchive" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource.property.sourceArchive"></a>

```java
public java.lang.String getSourceArchive();
```

- *Type:* java.lang.String

Required. Input only. The application source code archive, provided as a compressed tarball (.tar.gz) file. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#source_archive VertexAiReasoningEngine#source_archive}

---

### VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec <a name="VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec;

VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.builder()
//  .entrypointModule(java.lang.String)
//  .entrypointObject(java.lang.String)
//  .requirementsFile(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.entrypointModule">entrypointModule</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.entrypointObject">entrypointObject</a></code> | <code>java.lang.String</code> | Optional. The name of the callable object within the entrypointModule to use as the application If not specified, defaults to "root_agent". |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.requirementsFile">requirementsFile</a></code> | <code>java.lang.String</code> | Optional. The path to the requirements file, relative to the source root. If not specified, defaults to "requirements.txt". |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.version">version</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `entrypointModule`<sup>Optional</sup> <a name="entrypointModule" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.entrypointModule"></a>

```java
public java.lang.String getEntrypointModule();
```

- *Type:* java.lang.String

Optional.

The Python module to load as the entrypoint,
specified as a fully qualified module name. For example:
path.to.agent. If not specified, defaults to "agent".
The project root will be added to Python sys.path, allowing
imports to be specified relative to the root.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#entrypoint_module VertexAiReasoningEngine#entrypoint_module}

---

##### `entrypointObject`<sup>Optional</sup> <a name="entrypointObject" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.entrypointObject"></a>

```java
public java.lang.String getEntrypointObject();
```

- *Type:* java.lang.String

Optional. The name of the callable object within the entrypointModule to use as the application If not specified, defaults to "root_agent".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#entrypoint_object VertexAiReasoningEngine#entrypoint_object}

---

##### `requirementsFile`<sup>Optional</sup> <a name="requirementsFile" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.requirementsFile"></a>

```java
public java.lang.String getRequirementsFile();
```

- *Type:* java.lang.String

Optional. The path to the requirements file, relative to the source root. If not specified, defaults to "requirements.txt".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#requirements_file VertexAiReasoningEngine#requirements_file}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Optional.

The version of Python to use. Support version
includes 3.9, 3.10, 3.11, 3.12, 3.13. If not specified,
default value is 3.10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#version VertexAiReasoningEngine#version}

---

### VertexAiReasoningEngineTimeouts <a name="VertexAiReasoningEngineTimeouts" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineTimeouts;

VertexAiReasoningEngineTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#create VertexAiReasoningEngine#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#delete VertexAiReasoningEngine#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#update VertexAiReasoningEngine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#create VertexAiReasoningEngine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#delete VertexAiReasoningEngine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_reasoning_engine#update VertexAiReasoningEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiReasoningEngineEncryptionSpecOutputReference <a name="VertexAiReasoningEngineEncryptionSpecOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineEncryptionSpecOutputReference;

new VertexAiReasoningEngineEncryptionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec">VertexAiReasoningEngineEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.property.internalValue"></a>

```java
public VertexAiReasoningEngineEncryptionSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec">VertexAiReasoningEngineEncryptionSpec</a>

---


### VertexAiReasoningEngineSpecContainerSpecOutputReference <a name="VertexAiReasoningEngineSpecContainerSpecOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecContainerSpecOutputReference;

new VertexAiReasoningEngineSpecContainerSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpec">VertexAiReasoningEngineSpecContainerSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.property.imageUriInput"></a>

```java
public java.lang.String getImageUriInput();
```

- *Type:* java.lang.String

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.property.internalValue"></a>

```java
public VertexAiReasoningEngineSpecContainerSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpec">VertexAiReasoningEngineSpecContainerSpec</a>

---


### VertexAiReasoningEngineSpecDeploymentSpecEnvList <a name="VertexAiReasoningEngineSpecDeploymentSpecEnvList" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecDeploymentSpecEnvList;

new VertexAiReasoningEngineSpecDeploymentSpecEnvList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.get"></a>

```java
public VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnv">VertexAiReasoningEngineSpecDeploymentSpecEnv</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VertexAiReasoningEngineSpecDeploymentSpecEnv> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnv">VertexAiReasoningEngineSpecDeploymentSpecEnv</a>>

---


### VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference <a name="VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference;

new VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnv">VertexAiReasoningEngineSpecDeploymentSpecEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.internalValue"></a>

```java
public IResolvable|VertexAiReasoningEngineSpecDeploymentSpecEnv getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnv">VertexAiReasoningEngineSpecDeploymentSpecEnv</a>

---


### VertexAiReasoningEngineSpecDeploymentSpecOutputReference <a name="VertexAiReasoningEngineSpecDeploymentSpecOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference;

new VertexAiReasoningEngineSpecDeploymentSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.putPscInterfaceConfig">putPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.putSecretEnv">putSecretEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetContainerConcurrency">resetContainerConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetMaxInstances">resetMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetMinInstances">resetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetPscInterfaceConfig">resetPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetResourceLimits">resetResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetSecretEnv">resetSecretEnv</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.putEnv"></a>

```java
public void putEnv(IResolvable|java.util.List<VertexAiReasoningEngineSpecDeploymentSpecEnv> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.putEnv.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnv">VertexAiReasoningEngineSpecDeploymentSpecEnv</a>>

---

##### `putPscInterfaceConfig` <a name="putPscInterfaceConfig" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.putPscInterfaceConfig"></a>

```java
public void putPscInterfaceConfig(VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.putPscInterfaceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a>

---

##### `putSecretEnv` <a name="putSecretEnv" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.putSecretEnv"></a>

```java
public void putSecretEnv(IResolvable|java.util.List<VertexAiReasoningEngineSpecDeploymentSpecSecretEnv> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.putSecretEnv.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnv">VertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>>

---

##### `resetContainerConcurrency` <a name="resetContainerConcurrency" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetContainerConcurrency"></a>

```java
public void resetContainerConcurrency()
```

##### `resetEnv` <a name="resetEnv" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetEnv"></a>

```java
public void resetEnv()
```

##### `resetMaxInstances` <a name="resetMaxInstances" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetMaxInstances"></a>

```java
public void resetMaxInstances()
```

##### `resetMinInstances` <a name="resetMinInstances" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetMinInstances"></a>

```java
public void resetMinInstances()
```

##### `resetPscInterfaceConfig` <a name="resetPscInterfaceConfig" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetPscInterfaceConfig"></a>

```java
public void resetPscInterfaceConfig()
```

##### `resetResourceLimits` <a name="resetResourceLimits" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetResourceLimits"></a>

```java
public void resetResourceLimits()
```

##### `resetSecretEnv` <a name="resetSecretEnv" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetSecretEnv"></a>

```java
public void resetSecretEnv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.env">env</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList">VertexAiReasoningEngineSpecDeploymentSpecEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.pscInterfaceConfig">pscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.secretEnv">secretEnv</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList">VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.containerConcurrencyInput">containerConcurrencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.envInput">envInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnv">VertexAiReasoningEngineSpecDeploymentSpecEnv</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.maxInstancesInput">maxInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.minInstancesInput">minInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.pscInterfaceConfigInput">pscInterfaceConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.resourceLimitsInput">resourceLimitsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.secretEnvInput">secretEnvInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnv">VertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.containerConcurrency">containerConcurrency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.maxInstances">maxInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.minInstances">minInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.resourceLimits">resourceLimits</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec">VertexAiReasoningEngineSpecDeploymentSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.env"></a>

```java
public VertexAiReasoningEngineSpecDeploymentSpecEnvList getEnv();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList">VertexAiReasoningEngineSpecDeploymentSpecEnvList</a>

---

##### `pscInterfaceConfig`<sup>Required</sup> <a name="pscInterfaceConfig" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.pscInterfaceConfig"></a>

```java
public VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference getPscInterfaceConfig();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference</a>

---

##### `secretEnv`<sup>Required</sup> <a name="secretEnv" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.secretEnv"></a>

```java
public VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList getSecretEnv();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList">VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList</a>

---

##### `containerConcurrencyInput`<sup>Optional</sup> <a name="containerConcurrencyInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.containerConcurrencyInput"></a>

```java
public java.lang.Number getContainerConcurrencyInput();
```

- *Type:* java.lang.Number

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.envInput"></a>

```java
public IResolvable|java.util.List<VertexAiReasoningEngineSpecDeploymentSpecEnv> getEnvInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnv">VertexAiReasoningEngineSpecDeploymentSpecEnv</a>>

---

##### `maxInstancesInput`<sup>Optional</sup> <a name="maxInstancesInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.maxInstancesInput"></a>

```java
public java.lang.Number getMaxInstancesInput();
```

- *Type:* java.lang.Number

---

##### `minInstancesInput`<sup>Optional</sup> <a name="minInstancesInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.minInstancesInput"></a>

```java
public java.lang.Number getMinInstancesInput();
```

- *Type:* java.lang.Number

---

##### `pscInterfaceConfigInput`<sup>Optional</sup> <a name="pscInterfaceConfigInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.pscInterfaceConfigInput"></a>

```java
public VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig getPscInterfaceConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a>

---

##### `resourceLimitsInput`<sup>Optional</sup> <a name="resourceLimitsInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.resourceLimitsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceLimitsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `secretEnvInput`<sup>Optional</sup> <a name="secretEnvInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.secretEnvInput"></a>

```java
public IResolvable|java.util.List<VertexAiReasoningEngineSpecDeploymentSpecSecretEnv> getSecretEnvInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnv">VertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>>

---

##### `containerConcurrency`<sup>Required</sup> <a name="containerConcurrency" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.containerConcurrency"></a>

```java
public java.lang.Number getContainerConcurrency();
```

- *Type:* java.lang.Number

---

##### `maxInstances`<sup>Required</sup> <a name="maxInstances" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.maxInstances"></a>

```java
public java.lang.Number getMaxInstances();
```

- *Type:* java.lang.Number

---

##### `minInstances`<sup>Required</sup> <a name="minInstances" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.minInstances"></a>

```java
public java.lang.Number getMinInstances();
```

- *Type:* java.lang.Number

---

##### `resourceLimits`<sup>Required</sup> <a name="resourceLimits" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.resourceLimits"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceLimits();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.internalValue"></a>

```java
public VertexAiReasoningEngineSpecDeploymentSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec">VertexAiReasoningEngineSpecDeploymentSpec</a>

---


### VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList <a name="VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList;

new VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.get"></a>

```java
public VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>>

---


### VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference <a name="VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference;

new VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput">targetNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput">targetProjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork">targetNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject">targetProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `targetNetworkInput`<sup>Optional</sup> <a name="targetNetworkInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput"></a>

```java
public java.lang.String getTargetNetworkInput();
```

- *Type:* java.lang.String

---

##### `targetProjectInput`<sup>Optional</sup> <a name="targetProjectInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput"></a>

```java
public java.lang.String getTargetProjectInput();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `targetNetwork`<sup>Required</sup> <a name="targetNetwork" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork"></a>

```java
public java.lang.String getTargetNetwork();
```

- *Type:* java.lang.String

---

##### `targetProject`<sup>Required</sup> <a name="targetProject" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject"></a>

```java
public java.lang.String getTargetProject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>

---


### VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference <a name="VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference;

new VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs">putDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resetDnsPeeringConfigs">resetDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resetNetworkAttachment">resetNetworkAttachment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDnsPeeringConfigs` <a name="putDnsPeeringConfigs" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs"></a>

```java
public void putDnsPeeringConfigs(IResolvable|java.util.List<VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>>

---

##### `resetDnsPeeringConfigs` <a name="resetDnsPeeringConfigs" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resetDnsPeeringConfigs"></a>

```java
public void resetDnsPeeringConfigs()
```

##### `resetNetworkAttachment` <a name="resetNetworkAttachment" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resetNetworkAttachment"></a>

```java
public void resetNetworkAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigs">dnsPeeringConfigs</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput">dnsPeeringConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.networkAttachmentInput">networkAttachmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsPeeringConfigs`<sup>Required</sup> <a name="dnsPeeringConfigs" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigs"></a>

```java
public VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList getDnsPeeringConfigs();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList</a>

---

##### `dnsPeeringConfigsInput`<sup>Optional</sup> <a name="dnsPeeringConfigsInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput"></a>

```java
public IResolvable|java.util.List<VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs> getDnsPeeringConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>>

---

##### `networkAttachmentInput`<sup>Optional</sup> <a name="networkAttachmentInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.networkAttachmentInput"></a>

```java
public java.lang.String getNetworkAttachmentInput();
```

- *Type:* java.lang.String

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.networkAttachment"></a>

```java
public java.lang.String getNetworkAttachment();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.internalValue"></a>

```java
public VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a>

---


### VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList <a name="VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList;

new VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.get"></a>

```java
public VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnv">VertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VertexAiReasoningEngineSpecDeploymentSpecSecretEnv> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnv">VertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>>

---


### VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference <a name="VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference;

new VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.putSecretRef">putSecretRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretRef` <a name="putSecretRef" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.putSecretRef"></a>

```java
public void putSecretRef(VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.putSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.secretRef">secretRef</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference">VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.secretRefInput">secretRefInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnv">VertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretRef`<sup>Required</sup> <a name="secretRef" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.secretRef"></a>

```java
public VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference getSecretRef();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference">VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `secretRefInput`<sup>Optional</sup> <a name="secretRefInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.secretRefInput"></a>

```java
public VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef getSecretRefInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.internalValue"></a>

```java
public IResolvable|VertexAiReasoningEngineSpecDeploymentSpecSecretEnv getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnv">VertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>

---


### VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference <a name="VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference;

new VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.secretInput">secretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.secretInput"></a>

```java
public java.lang.String getSecretInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.internalValue"></a>

```java
public VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a>

---


### VertexAiReasoningEngineSpecOutputReference <a name="VertexAiReasoningEngineSpecOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecOutputReference;

new VertexAiReasoningEngineSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.putContainerSpec">putContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.putDeploymentSpec">putDeploymentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.putPackageSpec">putPackageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.putSourceCodeSpec">putSourceCodeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetAgentFramework">resetAgentFramework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetClassMethods">resetClassMethods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetContainerSpec">resetContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetDeploymentSpec">resetDeploymentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetPackageSpec">resetPackageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetSourceCodeSpec">resetSourceCodeSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerSpec` <a name="putContainerSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.putContainerSpec"></a>

```java
public void putContainerSpec(VertexAiReasoningEngineSpecContainerSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.putContainerSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpec">VertexAiReasoningEngineSpecContainerSpec</a>

---

##### `putDeploymentSpec` <a name="putDeploymentSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.putDeploymentSpec"></a>

```java
public void putDeploymentSpec(VertexAiReasoningEngineSpecDeploymentSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.putDeploymentSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec">VertexAiReasoningEngineSpecDeploymentSpec</a>

---

##### `putPackageSpec` <a name="putPackageSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.putPackageSpec"></a>

```java
public void putPackageSpec(VertexAiReasoningEngineSpecPackageSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.putPackageSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec">VertexAiReasoningEngineSpecPackageSpec</a>

---

##### `putSourceCodeSpec` <a name="putSourceCodeSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.putSourceCodeSpec"></a>

```java
public void putSourceCodeSpec(VertexAiReasoningEngineSpecSourceCodeSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.putSourceCodeSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec">VertexAiReasoningEngineSpecSourceCodeSpec</a>

---

##### `resetAgentFramework` <a name="resetAgentFramework" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetAgentFramework"></a>

```java
public void resetAgentFramework()
```

##### `resetClassMethods` <a name="resetClassMethods" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetClassMethods"></a>

```java
public void resetClassMethods()
```

##### `resetContainerSpec` <a name="resetContainerSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetContainerSpec"></a>

```java
public void resetContainerSpec()
```

##### `resetDeploymentSpec` <a name="resetDeploymentSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetDeploymentSpec"></a>

```java
public void resetDeploymentSpec()
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetIdentityType"></a>

```java
public void resetIdentityType()
```

##### `resetPackageSpec` <a name="resetPackageSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetPackageSpec"></a>

```java
public void resetPackageSpec()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetSourceCodeSpec` <a name="resetSourceCodeSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetSourceCodeSpec"></a>

```java
public void resetSourceCodeSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.containerSpec">containerSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference">VertexAiReasoningEngineSpecContainerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.deploymentSpec">deploymentSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference">VertexAiReasoningEngineSpecDeploymentSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.effectiveIdentity">effectiveIdentity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.packageSpec">packageSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference">VertexAiReasoningEngineSpecPackageSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.sourceCodeSpec">sourceCodeSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference">VertexAiReasoningEngineSpecSourceCodeSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.agentFrameworkInput">agentFrameworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.classMethodsInput">classMethodsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.containerSpecInput">containerSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpec">VertexAiReasoningEngineSpecContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.deploymentSpecInput">deploymentSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec">VertexAiReasoningEngineSpecDeploymentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.packageSpecInput">packageSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec">VertexAiReasoningEngineSpecPackageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.sourceCodeSpecInput">sourceCodeSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec">VertexAiReasoningEngineSpecSourceCodeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.agentFramework">agentFramework</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.classMethods">classMethods</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.identityType">identityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec">VertexAiReasoningEngineSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerSpec`<sup>Required</sup> <a name="containerSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.containerSpec"></a>

```java
public VertexAiReasoningEngineSpecContainerSpecOutputReference getContainerSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference">VertexAiReasoningEngineSpecContainerSpecOutputReference</a>

---

##### `deploymentSpec`<sup>Required</sup> <a name="deploymentSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.deploymentSpec"></a>

```java
public VertexAiReasoningEngineSpecDeploymentSpecOutputReference getDeploymentSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference">VertexAiReasoningEngineSpecDeploymentSpecOutputReference</a>

---

##### `effectiveIdentity`<sup>Required</sup> <a name="effectiveIdentity" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.effectiveIdentity"></a>

```java
public java.lang.String getEffectiveIdentity();
```

- *Type:* java.lang.String

---

##### `packageSpec`<sup>Required</sup> <a name="packageSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.packageSpec"></a>

```java
public VertexAiReasoningEngineSpecPackageSpecOutputReference getPackageSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference">VertexAiReasoningEngineSpecPackageSpecOutputReference</a>

---

##### `sourceCodeSpec`<sup>Required</sup> <a name="sourceCodeSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.sourceCodeSpec"></a>

```java
public VertexAiReasoningEngineSpecSourceCodeSpecOutputReference getSourceCodeSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference">VertexAiReasoningEngineSpecSourceCodeSpecOutputReference</a>

---

##### `agentFrameworkInput`<sup>Optional</sup> <a name="agentFrameworkInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.agentFrameworkInput"></a>

```java
public java.lang.String getAgentFrameworkInput();
```

- *Type:* java.lang.String

---

##### `classMethodsInput`<sup>Optional</sup> <a name="classMethodsInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.classMethodsInput"></a>

```java
public java.lang.String getClassMethodsInput();
```

- *Type:* java.lang.String

---

##### `containerSpecInput`<sup>Optional</sup> <a name="containerSpecInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.containerSpecInput"></a>

```java
public VertexAiReasoningEngineSpecContainerSpec getContainerSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpec">VertexAiReasoningEngineSpecContainerSpec</a>

---

##### `deploymentSpecInput`<sup>Optional</sup> <a name="deploymentSpecInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.deploymentSpecInput"></a>

```java
public VertexAiReasoningEngineSpecDeploymentSpec getDeploymentSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec">VertexAiReasoningEngineSpecDeploymentSpec</a>

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.identityTypeInput"></a>

```java
public java.lang.String getIdentityTypeInput();
```

- *Type:* java.lang.String

---

##### `packageSpecInput`<sup>Optional</sup> <a name="packageSpecInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.packageSpecInput"></a>

```java
public VertexAiReasoningEngineSpecPackageSpec getPackageSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec">VertexAiReasoningEngineSpecPackageSpec</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `sourceCodeSpecInput`<sup>Optional</sup> <a name="sourceCodeSpecInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.sourceCodeSpecInput"></a>

```java
public VertexAiReasoningEngineSpecSourceCodeSpec getSourceCodeSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec">VertexAiReasoningEngineSpecSourceCodeSpec</a>

---

##### `agentFramework`<sup>Required</sup> <a name="agentFramework" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.agentFramework"></a>

```java
public java.lang.String getAgentFramework();
```

- *Type:* java.lang.String

---

##### `classMethods`<sup>Required</sup> <a name="classMethods" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.classMethods"></a>

```java
public java.lang.String getClassMethods();
```

- *Type:* java.lang.String

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.internalValue"></a>

```java
public VertexAiReasoningEngineSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec">VertexAiReasoningEngineSpec</a>

---


### VertexAiReasoningEngineSpecPackageSpecOutputReference <a name="VertexAiReasoningEngineSpecPackageSpecOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecPackageSpecOutputReference;

new VertexAiReasoningEngineSpecPackageSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.resetDependencyFilesGcsUri">resetDependencyFilesGcsUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.resetPickleObjectGcsUri">resetPickleObjectGcsUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.resetPythonVersion">resetPythonVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.resetRequirementsGcsUri">resetRequirementsGcsUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDependencyFilesGcsUri` <a name="resetDependencyFilesGcsUri" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.resetDependencyFilesGcsUri"></a>

```java
public void resetDependencyFilesGcsUri()
```

##### `resetPickleObjectGcsUri` <a name="resetPickleObjectGcsUri" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.resetPickleObjectGcsUri"></a>

```java
public void resetPickleObjectGcsUri()
```

##### `resetPythonVersion` <a name="resetPythonVersion" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.resetPythonVersion"></a>

```java
public void resetPythonVersion()
```

##### `resetRequirementsGcsUri` <a name="resetRequirementsGcsUri" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.resetRequirementsGcsUri"></a>

```java
public void resetRequirementsGcsUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.dependencyFilesGcsUriInput">dependencyFilesGcsUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.pickleObjectGcsUriInput">pickleObjectGcsUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.pythonVersionInput">pythonVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.requirementsGcsUriInput">requirementsGcsUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.dependencyFilesGcsUri">dependencyFilesGcsUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.pickleObjectGcsUri">pickleObjectGcsUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.pythonVersion">pythonVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.requirementsGcsUri">requirementsGcsUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec">VertexAiReasoningEngineSpecPackageSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dependencyFilesGcsUriInput`<sup>Optional</sup> <a name="dependencyFilesGcsUriInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.dependencyFilesGcsUriInput"></a>

```java
public java.lang.String getDependencyFilesGcsUriInput();
```

- *Type:* java.lang.String

---

##### `pickleObjectGcsUriInput`<sup>Optional</sup> <a name="pickleObjectGcsUriInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.pickleObjectGcsUriInput"></a>

```java
public java.lang.String getPickleObjectGcsUriInput();
```

- *Type:* java.lang.String

---

##### `pythonVersionInput`<sup>Optional</sup> <a name="pythonVersionInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.pythonVersionInput"></a>

```java
public java.lang.String getPythonVersionInput();
```

- *Type:* java.lang.String

---

##### `requirementsGcsUriInput`<sup>Optional</sup> <a name="requirementsGcsUriInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.requirementsGcsUriInput"></a>

```java
public java.lang.String getRequirementsGcsUriInput();
```

- *Type:* java.lang.String

---

##### `dependencyFilesGcsUri`<sup>Required</sup> <a name="dependencyFilesGcsUri" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.dependencyFilesGcsUri"></a>

```java
public java.lang.String getDependencyFilesGcsUri();
```

- *Type:* java.lang.String

---

##### `pickleObjectGcsUri`<sup>Required</sup> <a name="pickleObjectGcsUri" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.pickleObjectGcsUri"></a>

```java
public java.lang.String getPickleObjectGcsUri();
```

- *Type:* java.lang.String

---

##### `pythonVersion`<sup>Required</sup> <a name="pythonVersion" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.pythonVersion"></a>

```java
public java.lang.String getPythonVersion();
```

- *Type:* java.lang.String

---

##### `requirementsGcsUri`<sup>Required</sup> <a name="requirementsGcsUri" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.requirementsGcsUri"></a>

```java
public java.lang.String getRequirementsGcsUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.internalValue"></a>

```java
public VertexAiReasoningEngineSpecPackageSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec">VertexAiReasoningEngineSpecPackageSpec</a>

---


### VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference <a name="VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference;

new VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.dirInput">dirInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.gitRepositoryLinkInput">gitRepositoryLinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.revisionInput">revisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.dir">dir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.gitRepositoryLink">gitRepositoryLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dirInput`<sup>Optional</sup> <a name="dirInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.dirInput"></a>

```java
public java.lang.String getDirInput();
```

- *Type:* java.lang.String

---

##### `gitRepositoryLinkInput`<sup>Optional</sup> <a name="gitRepositoryLinkInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.gitRepositoryLinkInput"></a>

```java
public java.lang.String getGitRepositoryLinkInput();
```

- *Type:* java.lang.String

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.revisionInput"></a>

```java
public java.lang.String getRevisionInput();
```

- *Type:* java.lang.String

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.dir"></a>

```java
public java.lang.String getDir();
```

- *Type:* java.lang.String

---

##### `gitRepositoryLink`<sup>Required</sup> <a name="gitRepositoryLink" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.gitRepositoryLink"></a>

```java
public java.lang.String getGitRepositoryLink();
```

- *Type:* java.lang.String

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.internalValue"></a>

```java
public VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a>

---


### VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference <a name="VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference;

new VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.putConfig">putConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.putConfig"></a>

```java
public void putConfig(VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.configInput">configInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.config"></a>

```java
public VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference getConfig();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.configInput"></a>

```java
public VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig getConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.internalValue"></a>

```java
public VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a>

---


### VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference <a name="VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference;

new VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.resetBuildArgs">resetBuildArgs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBuildArgs` <a name="resetBuildArgs" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.resetBuildArgs"></a>

```java
public void resetBuildArgs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.buildArgsInput">buildArgsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.buildArgs">buildArgs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec">VertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buildArgsInput`<sup>Optional</sup> <a name="buildArgsInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.buildArgsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getBuildArgsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `buildArgs`<sup>Required</sup> <a name="buildArgs" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.buildArgs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getBuildArgs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.internalValue"></a>

```java
public VertexAiReasoningEngineSpecSourceCodeSpecImageSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec">VertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a>

---


### VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference <a name="VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference;

new VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.resetSourceArchive">resetSourceArchive</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceArchive` <a name="resetSourceArchive" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.resetSourceArchive"></a>

```java
public void resetSourceArchive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.sourceArchiveInput">sourceArchiveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.sourceArchive">sourceArchive</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource">VertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceArchiveInput`<sup>Optional</sup> <a name="sourceArchiveInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.sourceArchiveInput"></a>

```java
public java.lang.String getSourceArchiveInput();
```

- *Type:* java.lang.String

---

##### `sourceArchive`<sup>Required</sup> <a name="sourceArchive" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.sourceArchive"></a>

```java
public java.lang.String getSourceArchive();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.internalValue"></a>

```java
public VertexAiReasoningEngineSpecSourceCodeSpecInlineSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource">VertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a>

---


### VertexAiReasoningEngineSpecSourceCodeSpecOutputReference <a name="VertexAiReasoningEngineSpecSourceCodeSpecOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference;

new VertexAiReasoningEngineSpecSourceCodeSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putDeveloperConnectSource">putDeveloperConnectSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putImageSpec">putImageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putInlineSource">putInlineSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putPythonSpec">putPythonSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetDeveloperConnectSource">resetDeveloperConnectSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetImageSpec">resetImageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetInlineSource">resetInlineSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetPythonSpec">resetPythonSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeveloperConnectSource` <a name="putDeveloperConnectSource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putDeveloperConnectSource"></a>

```java
public void putDeveloperConnectSource(VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putDeveloperConnectSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a>

---

##### `putImageSpec` <a name="putImageSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putImageSpec"></a>

```java
public void putImageSpec(VertexAiReasoningEngineSpecSourceCodeSpecImageSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putImageSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec">VertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a>

---

##### `putInlineSource` <a name="putInlineSource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putInlineSource"></a>

```java
public void putInlineSource(VertexAiReasoningEngineSpecSourceCodeSpecInlineSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putInlineSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource">VertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a>

---

##### `putPythonSpec` <a name="putPythonSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putPythonSpec"></a>

```java
public void putPythonSpec(VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putPythonSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a>

---

##### `resetDeveloperConnectSource` <a name="resetDeveloperConnectSource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetDeveloperConnectSource"></a>

```java
public void resetDeveloperConnectSource()
```

##### `resetImageSpec` <a name="resetImageSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetImageSpec"></a>

```java
public void resetImageSpec()
```

##### `resetInlineSource` <a name="resetInlineSource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetInlineSource"></a>

```java
public void resetInlineSource()
```

##### `resetPythonSpec` <a name="resetPythonSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetPythonSpec"></a>

```java
public void resetPythonSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.developerConnectSource">developerConnectSource</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.imageSpec">imageSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference">VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.inlineSource">inlineSource</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference">VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.pythonSpec">pythonSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference">VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.developerConnectSourceInput">developerConnectSourceInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.imageSpecInput">imageSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec">VertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.inlineSourceInput">inlineSourceInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource">VertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.pythonSpecInput">pythonSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec">VertexAiReasoningEngineSpecSourceCodeSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `developerConnectSource`<sup>Required</sup> <a name="developerConnectSource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.developerConnectSource"></a>

```java
public VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference getDeveloperConnectSource();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference</a>

---

##### `imageSpec`<sup>Required</sup> <a name="imageSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.imageSpec"></a>

```java
public VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference getImageSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference">VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference</a>

---

##### `inlineSource`<sup>Required</sup> <a name="inlineSource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.inlineSource"></a>

```java
public VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference getInlineSource();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference">VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference</a>

---

##### `pythonSpec`<sup>Required</sup> <a name="pythonSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.pythonSpec"></a>

```java
public VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference getPythonSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference">VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference</a>

---

##### `developerConnectSourceInput`<sup>Optional</sup> <a name="developerConnectSourceInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.developerConnectSourceInput"></a>

```java
public VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource getDeveloperConnectSourceInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a>

---

##### `imageSpecInput`<sup>Optional</sup> <a name="imageSpecInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.imageSpecInput"></a>

```java
public VertexAiReasoningEngineSpecSourceCodeSpecImageSpec getImageSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec">VertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a>

---

##### `inlineSourceInput`<sup>Optional</sup> <a name="inlineSourceInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.inlineSourceInput"></a>

```java
public VertexAiReasoningEngineSpecSourceCodeSpecInlineSource getInlineSourceInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource">VertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a>

---

##### `pythonSpecInput`<sup>Optional</sup> <a name="pythonSpecInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.pythonSpecInput"></a>

```java
public VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec getPythonSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.internalValue"></a>

```java
public VertexAiReasoningEngineSpecSourceCodeSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec">VertexAiReasoningEngineSpecSourceCodeSpec</a>

---


### VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference <a name="VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference;

new VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetEntrypointModule">resetEntrypointModule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetEntrypointObject">resetEntrypointObject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetRequirementsFile">resetRequirementsFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEntrypointModule` <a name="resetEntrypointModule" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetEntrypointModule"></a>

```java
public void resetEntrypointModule()
```

##### `resetEntrypointObject` <a name="resetEntrypointObject" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetEntrypointObject"></a>

```java
public void resetEntrypointObject()
```

##### `resetRequirementsFile` <a name="resetRequirementsFile" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetRequirementsFile"></a>

```java
public void resetRequirementsFile()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointModuleInput">entrypointModuleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointObjectInput">entrypointObjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.requirementsFileInput">requirementsFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointModule">entrypointModule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointObject">entrypointObject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.requirementsFile">requirementsFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entrypointModuleInput`<sup>Optional</sup> <a name="entrypointModuleInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointModuleInput"></a>

```java
public java.lang.String getEntrypointModuleInput();
```

- *Type:* java.lang.String

---

##### `entrypointObjectInput`<sup>Optional</sup> <a name="entrypointObjectInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointObjectInput"></a>

```java
public java.lang.String getEntrypointObjectInput();
```

- *Type:* java.lang.String

---

##### `requirementsFileInput`<sup>Optional</sup> <a name="requirementsFileInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.requirementsFileInput"></a>

```java
public java.lang.String getRequirementsFileInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `entrypointModule`<sup>Required</sup> <a name="entrypointModule" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointModule"></a>

```java
public java.lang.String getEntrypointModule();
```

- *Type:* java.lang.String

---

##### `entrypointObject`<sup>Required</sup> <a name="entrypointObject" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointObject"></a>

```java
public java.lang.String getEntrypointObject();
```

- *Type:* java.lang.String

---

##### `requirementsFile`<sup>Required</sup> <a name="requirementsFile" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.requirementsFile"></a>

```java
public java.lang.String getRequirementsFile();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.internalValue"></a>

```java
public VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a>

---


### VertexAiReasoningEngineTimeoutsOutputReference <a name="VertexAiReasoningEngineTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine.VertexAiReasoningEngineTimeoutsOutputReference;

new VertexAiReasoningEngineTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts">VertexAiReasoningEngineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VertexAiReasoningEngineTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts">VertexAiReasoningEngineTimeouts</a>

---



