# `vertexAiReasoningEngineIamBinding` Submodule <a name="`vertexAiReasoningEngineIamBinding` Submodule" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiReasoningEngineIamBinding <a name="VertexAiReasoningEngineIamBinding" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding google_vertex_ai_reasoning_engine_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine_iam_binding.VertexAiReasoningEngineIamBinding;

VertexAiReasoningEngineIamBinding.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .members(java.util.List<java.lang.String>)
    .reasoningEngine(java.lang.String)
    .role(java.lang.String)
//  .condition(VertexAiReasoningEngineIamBindingCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#members VertexAiReasoningEngineIamBinding#members}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.reasoningEngine">reasoningEngine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#reasoning_engine VertexAiReasoningEngineIamBinding#reasoning_engine}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#role VertexAiReasoningEngineIamBinding#role}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition">VertexAiReasoningEngineIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#id VertexAiReasoningEngineIamBinding#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#project VertexAiReasoningEngineIamBinding#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#region VertexAiReasoningEngineIamBinding#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.members"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#members VertexAiReasoningEngineIamBinding#members}.

---

##### `reasoningEngine`<sup>Required</sup> <a name="reasoningEngine" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.reasoningEngine"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#reasoning_engine VertexAiReasoningEngineIamBinding#reasoning_engine}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#role VertexAiReasoningEngineIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition">VertexAiReasoningEngineIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#condition VertexAiReasoningEngineIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#id VertexAiReasoningEngineIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#project VertexAiReasoningEngineIamBinding#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#region VertexAiReasoningEngineIamBinding#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.putCondition"></a>

```java
public void putCondition(VertexAiReasoningEngineIamBindingCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition">VertexAiReasoningEngineIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiReasoningEngineIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isConstruct"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine_iam_binding.VertexAiReasoningEngineIamBinding;

VertexAiReasoningEngineIamBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isTerraformElement"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine_iam_binding.VertexAiReasoningEngineIamBinding;

VertexAiReasoningEngineIamBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isTerraformResource"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine_iam_binding.VertexAiReasoningEngineIamBinding;

VertexAiReasoningEngineIamBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine_iam_binding.VertexAiReasoningEngineIamBinding;

VertexAiReasoningEngineIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VertexAiReasoningEngineIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VertexAiReasoningEngineIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VertexAiReasoningEngineIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VertexAiReasoningEngineIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiReasoningEngineIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference">VertexAiReasoningEngineIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition">VertexAiReasoningEngineIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.membersInput">membersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.reasoningEngineInput">reasoningEngineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.reasoningEngine">reasoningEngine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.condition"></a>

```java
public VertexAiReasoningEngineIamBindingConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference">VertexAiReasoningEngineIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.conditionInput"></a>

```java
public VertexAiReasoningEngineIamBindingCondition getConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition">VertexAiReasoningEngineIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.membersInput"></a>

```java
public java.util.List<java.lang.String> getMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `reasoningEngineInput`<sup>Optional</sup> <a name="reasoningEngineInput" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.reasoningEngineInput"></a>

```java
public java.lang.String getReasoningEngineInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `reasoningEngine`<sup>Required</sup> <a name="reasoningEngine" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.reasoningEngine"></a>

```java
public java.lang.String getReasoningEngine();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiReasoningEngineIamBindingCondition <a name="VertexAiReasoningEngineIamBindingCondition" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine_iam_binding.VertexAiReasoningEngineIamBindingCondition;

VertexAiReasoningEngineIamBindingCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#expression VertexAiReasoningEngineIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#title VertexAiReasoningEngineIamBinding#title}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#description VertexAiReasoningEngineIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#expression VertexAiReasoningEngineIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#title VertexAiReasoningEngineIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#description VertexAiReasoningEngineIamBinding#description}.

---

### VertexAiReasoningEngineIamBindingConfig <a name="VertexAiReasoningEngineIamBindingConfig" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine_iam_binding.VertexAiReasoningEngineIamBindingConfig;

VertexAiReasoningEngineIamBindingConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .members(java.util.List<java.lang.String>)
    .reasoningEngine(java.lang.String)
    .role(java.lang.String)
//  .condition(VertexAiReasoningEngineIamBindingCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#members VertexAiReasoningEngineIamBinding#members}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.reasoningEngine">reasoningEngine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#reasoning_engine VertexAiReasoningEngineIamBinding#reasoning_engine}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#role VertexAiReasoningEngineIamBinding#role}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition">VertexAiReasoningEngineIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#id VertexAiReasoningEngineIamBinding#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#project VertexAiReasoningEngineIamBinding#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#region VertexAiReasoningEngineIamBinding#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#members VertexAiReasoningEngineIamBinding#members}.

---

##### `reasoningEngine`<sup>Required</sup> <a name="reasoningEngine" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.reasoningEngine"></a>

```java
public java.lang.String getReasoningEngine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#reasoning_engine VertexAiReasoningEngineIamBinding#reasoning_engine}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#role VertexAiReasoningEngineIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.condition"></a>

```java
public VertexAiReasoningEngineIamBindingCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition">VertexAiReasoningEngineIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#condition VertexAiReasoningEngineIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#id VertexAiReasoningEngineIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#project VertexAiReasoningEngineIamBinding#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#region VertexAiReasoningEngineIamBinding#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiReasoningEngineIamBindingConditionOutputReference <a name="VertexAiReasoningEngineIamBindingConditionOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_reasoning_engine_iam_binding.VertexAiReasoningEngineIamBindingConditionOutputReference;

new VertexAiReasoningEngineIamBindingConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition">VertexAiReasoningEngineIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.internalValue"></a>

```java
public VertexAiReasoningEngineIamBindingCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition">VertexAiReasoningEngineIamBindingCondition</a>

---



