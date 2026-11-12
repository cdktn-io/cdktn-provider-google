# `vertexAiTrainingPipeline` Submodule <a name="`vertexAiTrainingPipeline` Submodule" id="@cdktn/provider-google.vertexAiTrainingPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiTrainingPipeline <a name="VertexAiTrainingPipeline" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline google_vertex_ai_training_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipeline(Construct Scope, string Id, VertexAiTrainingPipelineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig">VertexAiTrainingPipelineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig">VertexAiTrainingPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putInputDataConfig">PutInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putModelToUpload">PutModelToUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetInputDataConfig">ResetInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetModelToUpload">ResetModelToUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetParentModel">ResetParentModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putEncryptionSpec"></a>

```csharp
private void PutEncryptionSpec(VertexAiTrainingPipelineEncryptionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec">VertexAiTrainingPipelineEncryptionSpec</a>

---

##### `PutInputDataConfig` <a name="PutInputDataConfig" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putInputDataConfig"></a>

```csharp
private void PutInputDataConfig(VertexAiTrainingPipelineInputDataConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putInputDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig">VertexAiTrainingPipelineInputDataConfig</a>

---

##### `PutModelToUpload` <a name="PutModelToUpload" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putModelToUpload"></a>

```csharp
private void PutModelToUpload(VertexAiTrainingPipelineModelToUpload Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putModelToUpload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload">VertexAiTrainingPipelineModelToUpload</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putTimeouts"></a>

```csharp
private void PutTimeouts(VertexAiTrainingPipelineTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts">VertexAiTrainingPipelineTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetEncryptionSpec"></a>

```csharp
private void ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInputDataConfig` <a name="ResetInputDataConfig" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetInputDataConfig"></a>

```csharp
private void ResetInputDataConfig()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetModelToUpload` <a name="ResetModelToUpload" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetModelToUpload"></a>

```csharp
private void ResetModelToUpload()
```

##### `ResetParentModel` <a name="ResetParentModel" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetParentModel"></a>

```csharp
private void ResetParentModel()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiTrainingPipeline resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiTrainingPipeline.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiTrainingPipeline.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiTrainingPipeline.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiTrainingPipeline.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VertexAiTrainingPipeline resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VertexAiTrainingPipeline to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VertexAiTrainingPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiTrainingPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference">VertexAiTrainingPipelineEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList">VertexAiTrainingPipelineErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.inputDataConfig">InputDataConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference">VertexAiTrainingPipelineInputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.modelToUpload">ModelToUpload</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference">VertexAiTrainingPipelineModelToUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference">VertexAiTrainingPipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskMetadata">TrainingTaskMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec">VertexAiTrainingPipelineEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.inputDataConfigInput">InputDataConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig">VertexAiTrainingPipelineInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.modelIdInput">ModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.modelToUploadInput">ModelToUploadInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload">VertexAiTrainingPipelineModelToUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.parentModelInput">ParentModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts">VertexAiTrainingPipelineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskDefinitionInput">TrainingTaskDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskInputsInput">TrainingTaskInputsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.modelId">ModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.parentModel">ParentModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskDefinition">TrainingTaskDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskInputs">TrainingTaskInputs</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.encryptionSpec"></a>

```csharp
public VertexAiTrainingPipelineEncryptionSpecOutputReference EncryptionSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference">VertexAiTrainingPipelineEncryptionSpecOutputReference</a>

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.error"></a>

```csharp
public VertexAiTrainingPipelineErrorList Error { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList">VertexAiTrainingPipelineErrorList</a>

---

##### `InputDataConfig`<sup>Required</sup> <a name="InputDataConfig" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.inputDataConfig"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigOutputReference InputDataConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference">VertexAiTrainingPipelineInputDataConfigOutputReference</a>

---

##### `ModelToUpload`<sup>Required</sup> <a name="ModelToUpload" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.modelToUpload"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadOutputReference ModelToUpload { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference">VertexAiTrainingPipelineModelToUploadOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.timeouts"></a>

```csharp
public VertexAiTrainingPipelineTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference">VertexAiTrainingPipelineTimeoutsOutputReference</a>

---

##### `TrainingTaskMetadata`<sup>Required</sup> <a name="TrainingTaskMetadata" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskMetadata"></a>

```csharp
public string TrainingTaskMetadata { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.encryptionSpecInput"></a>

```csharp
public VertexAiTrainingPipelineEncryptionSpec EncryptionSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec">VertexAiTrainingPipelineEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputDataConfigInput`<sup>Optional</sup> <a name="InputDataConfigInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.inputDataConfigInput"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfig InputDataConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig">VertexAiTrainingPipelineInputDataConfig</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.modelIdInput"></a>

```csharp
public string ModelIdInput { get; }
```

- *Type:* string

---

##### `ModelToUploadInput`<sup>Optional</sup> <a name="ModelToUploadInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.modelToUploadInput"></a>

```csharp
public VertexAiTrainingPipelineModelToUpload ModelToUploadInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload">VertexAiTrainingPipelineModelToUpload</a>

---

##### `ParentModelInput`<sup>Optional</sup> <a name="ParentModelInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.parentModelInput"></a>

```csharp
public string ParentModelInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.timeoutsInput"></a>

```csharp
public IResolvable|VertexAiTrainingPipelineTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts">VertexAiTrainingPipelineTimeouts</a>

---

##### `TrainingTaskDefinitionInput`<sup>Optional</sup> <a name="TrainingTaskDefinitionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskDefinitionInput"></a>

```csharp
public string TrainingTaskDefinitionInput { get; }
```

- *Type:* string

---

##### `TrainingTaskInputsInput`<sup>Optional</sup> <a name="TrainingTaskInputsInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskInputsInput"></a>

```csharp
public string TrainingTaskInputsInput { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.modelId"></a>

```csharp
public string ModelId { get; }
```

- *Type:* string

---

##### `ParentModel`<sup>Required</sup> <a name="ParentModel" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.parentModel"></a>

```csharp
public string ParentModel { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TrainingTaskDefinition`<sup>Required</sup> <a name="TrainingTaskDefinition" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskDefinition"></a>

```csharp
public string TrainingTaskDefinition { get; }
```

- *Type:* string

---

##### `TrainingTaskInputs`<sup>Required</sup> <a name="TrainingTaskInputs" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskInputs"></a>

```csharp
public string TrainingTaskInputs { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiTrainingPipelineConfig <a name="VertexAiTrainingPipelineConfig" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string ModelId,
    string TrainingTaskDefinition,
    string TrainingTaskInputs,
    string DeletionPolicy = null,
    VertexAiTrainingPipelineEncryptionSpec EncryptionSpec = null,
    string Id = null,
    VertexAiTrainingPipelineInputDataConfig InputDataConfig = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    VertexAiTrainingPipelineModelToUpload ModelToUpload = null,
    string ParentModel = null,
    string Project = null,
    string Region = null,
    VertexAiTrainingPipelineTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The user-defined name of this TrainingPipeline. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.modelId">ModelId</a></code> | <code>string</code> | The ID to use for the uploaded Model, which will become the final component of the model resource name. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.trainingTaskDefinition">TrainingTaskDefinition</a></code> | <code>string</code> | A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.trainingTaskInputs">TrainingTaskInputs</a></code> | <code>string</code> | The training task's parameter(s), as specified in the training_task_definition's inputs. This field uses JSON data as a string. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec">VertexAiTrainingPipelineEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#id VertexAiTrainingPipeline#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.inputDataConfig">InputDataConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig">VertexAiTrainingPipelineInputDataConfig</a></code> | input_data_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels with user-defined metadata to organize TrainingPipelines. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.modelToUpload">ModelToUpload</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload">VertexAiTrainingPipelineModelToUpload</a></code> | model_to_upload block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.parentModel">ParentModel</a></code> | <code>string</code> | When specified, the model_to_upload will become a new version of this parent_model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#project VertexAiTrainingPipeline#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.region">Region</a></code> | <code>string</code> | The region of the training pipeline. eg us-central1. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts">VertexAiTrainingPipelineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The user-defined name of this TrainingPipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#display_name VertexAiTrainingPipeline#display_name}

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.modelId"></a>

```csharp
public string ModelId { get; set; }
```

- *Type:* string

The ID to use for the uploaded Model, which will become the final component of the model resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#model_id VertexAiTrainingPipeline#model_id}

---

##### `TrainingTaskDefinition`<sup>Required</sup> <a name="TrainingTaskDefinition" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.trainingTaskDefinition"></a>

```csharp
public string TrainingTaskDefinition { get; set; }
```

- *Type:* string

A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work.

The definition files that can be used here are found in gs://google-cloud-aiplatform/schema/trainingjob/definition/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_task_definition VertexAiTrainingPipeline#training_task_definition}

---

##### `TrainingTaskInputs`<sup>Required</sup> <a name="TrainingTaskInputs" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.trainingTaskInputs"></a>

```csharp
public string TrainingTaskInputs { get; set; }
```

- *Type:* string

The training task's parameter(s), as specified in the training_task_definition's inputs. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_task_inputs VertexAiTrainingPipeline#training_task_inputs}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#deletion_policy VertexAiTrainingPipeline#deletion_policy}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.encryptionSpec"></a>

```csharp
public VertexAiTrainingPipelineEncryptionSpec EncryptionSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec">VertexAiTrainingPipelineEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#encryption_spec VertexAiTrainingPipeline#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#id VertexAiTrainingPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputDataConfig`<sup>Optional</sup> <a name="InputDataConfig" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.inputDataConfig"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfig InputDataConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig">VertexAiTrainingPipelineInputDataConfig</a>

input_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#input_data_config VertexAiTrainingPipeline#input_data_config}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels with user-defined metadata to organize TrainingPipelines.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#labels VertexAiTrainingPipeline#labels}

---

##### `ModelToUpload`<sup>Optional</sup> <a name="ModelToUpload" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.modelToUpload"></a>

```csharp
public VertexAiTrainingPipelineModelToUpload ModelToUpload { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload">VertexAiTrainingPipelineModelToUpload</a>

model_to_upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#model_to_upload VertexAiTrainingPipeline#model_to_upload}

---

##### `ParentModel`<sup>Optional</sup> <a name="ParentModel" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.parentModel"></a>

```csharp
public string ParentModel { get; set; }
```

- *Type:* string

When specified, the model_to_upload will become a new version of this parent_model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#parent_model VertexAiTrainingPipeline#parent_model}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#project VertexAiTrainingPipeline#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the training pipeline. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#region VertexAiTrainingPipeline#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.timeouts"></a>

```csharp
public VertexAiTrainingPipelineTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts">VertexAiTrainingPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#timeouts VertexAiTrainingPipeline#timeouts}

---

### VertexAiTrainingPipelineEncryptionSpec <a name="VertexAiTrainingPipelineEncryptionSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineEncryptionSpec {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The Cloud KMS resource identifier of the customer-managed encryption key used to protect the training pipeline. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The Cloud KMS resource identifier of the customer-managed encryption key used to protect the training pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#kms_key_name VertexAiTrainingPipeline#kms_key_name}

---

### VertexAiTrainingPipelineError <a name="VertexAiTrainingPipelineError" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineError {

};
```


### VertexAiTrainingPipelineInputDataConfig <a name="VertexAiTrainingPipelineInputDataConfig" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineInputDataConfig {
    string DatasetId,
    string AnnotationSchemaUri = null,
    string AnnotationsFilter = null,
    VertexAiTrainingPipelineInputDataConfigBigqueryDestination BigqueryDestination = null,
    VertexAiTrainingPipelineInputDataConfigFilterSplit FilterSplit = null,
    VertexAiTrainingPipelineInputDataConfigFractionSplit FractionSplit = null,
    VertexAiTrainingPipelineInputDataConfigGcsDestination GcsDestination = null,
    bool|IResolvable PersistMlUseAssignment = null,
    VertexAiTrainingPipelineInputDataConfigPredefinedSplit PredefinedSplit = null,
    string SavedQueryId = null,
    VertexAiTrainingPipelineInputDataConfigStratifiedSplit StratifiedSplit = null,
    VertexAiTrainingPipelineInputDataConfigTimestampSplit TimestampSplit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.datasetId">DatasetId</a></code> | <code>string</code> | The ID of the Dataset in the same Project and Location which data will be used to train the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.annotationSchemaUri">AnnotationSchemaUri</a></code> | <code>string</code> | Applicable only to custom training with Datasets that have DataItems and Annotations. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.annotationsFilter">AnnotationsFilter</a></code> | <code>string</code> | Applicable only to Datasets that have DataItems and Annotations. A filter on Annotations of the Dataset. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.bigqueryDestination">BigqueryDestination</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination">VertexAiTrainingPipelineInputDataConfigBigqueryDestination</a></code> | bigquery_destination block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.filterSplit">FilterSplit</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit">VertexAiTrainingPipelineInputDataConfigFilterSplit</a></code> | filter_split block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.fractionSplit">FractionSplit</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit">VertexAiTrainingPipelineInputDataConfigFractionSplit</a></code> | fraction_split block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.gcsDestination">GcsDestination</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination">VertexAiTrainingPipelineInputDataConfigGcsDestination</a></code> | gcs_destination block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.persistMlUseAssignment">PersistMlUseAssignment</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to persist the ML use assignment to data item system labels. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.predefinedSplit">PredefinedSplit</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit">VertexAiTrainingPipelineInputDataConfigPredefinedSplit</a></code> | predefined_split block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.savedQueryId">SavedQueryId</a></code> | <code>string</code> | Only applicable to Datasets that have SavedQueries. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.stratifiedSplit">StratifiedSplit</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit">VertexAiTrainingPipelineInputDataConfigStratifiedSplit</a></code> | stratified_split block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.timestampSplit">TimestampSplit</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit">VertexAiTrainingPipelineInputDataConfigTimestampSplit</a></code> | timestamp_split block. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

The ID of the Dataset in the same Project and Location which data will be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#dataset_id VertexAiTrainingPipeline#dataset_id}

---

##### `AnnotationSchemaUri`<sup>Optional</sup> <a name="AnnotationSchemaUri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.annotationSchemaUri"></a>

```csharp
public string AnnotationSchemaUri { get; set; }
```

- *Type:* string

Applicable only to custom training with Datasets that have DataItems and Annotations.

Cloud Storage URI that points to a YAML file describing the annotation schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#annotation_schema_uri VertexAiTrainingPipeline#annotation_schema_uri}

---

##### `AnnotationsFilter`<sup>Optional</sup> <a name="AnnotationsFilter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.annotationsFilter"></a>

```csharp
public string AnnotationsFilter { get; set; }
```

- *Type:* string

Applicable only to Datasets that have DataItems and Annotations. A filter on Annotations of the Dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#annotations_filter VertexAiTrainingPipeline#annotations_filter}

---

##### `BigqueryDestination`<sup>Optional</sup> <a name="BigqueryDestination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.bigqueryDestination"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigBigqueryDestination BigqueryDestination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination">VertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

bigquery_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#bigquery_destination VertexAiTrainingPipeline#bigquery_destination}

---

##### `FilterSplit`<sup>Optional</sup> <a name="FilterSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.filterSplit"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigFilterSplit FilterSplit { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit">VertexAiTrainingPipelineInputDataConfigFilterSplit</a>

filter_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#filter_split VertexAiTrainingPipeline#filter_split}

---

##### `FractionSplit`<sup>Optional</sup> <a name="FractionSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.fractionSplit"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigFractionSplit FractionSplit { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit">VertexAiTrainingPipelineInputDataConfigFractionSplit</a>

fraction_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#fraction_split VertexAiTrainingPipeline#fraction_split}

---

##### `GcsDestination`<sup>Optional</sup> <a name="GcsDestination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.gcsDestination"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigGcsDestination GcsDestination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination">VertexAiTrainingPipelineInputDataConfigGcsDestination</a>

gcs_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#gcs_destination VertexAiTrainingPipeline#gcs_destination}

---

##### `PersistMlUseAssignment`<sup>Optional</sup> <a name="PersistMlUseAssignment" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.persistMlUseAssignment"></a>

```csharp
public bool|IResolvable PersistMlUseAssignment { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to persist the ML use assignment to data item system labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#persist_ml_use_assignment VertexAiTrainingPipeline#persist_ml_use_assignment}

---

##### `PredefinedSplit`<sup>Optional</sup> <a name="PredefinedSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.predefinedSplit"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigPredefinedSplit PredefinedSplit { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit">VertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

predefined_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#predefined_split VertexAiTrainingPipeline#predefined_split}

---

##### `SavedQueryId`<sup>Optional</sup> <a name="SavedQueryId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.savedQueryId"></a>

```csharp
public string SavedQueryId { get; set; }
```

- *Type:* string

Only applicable to Datasets that have SavedQueries.

The ID of a SavedQuery under the Dataset specified by dataset_id used for filtering Annotations for training.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#saved_query_id VertexAiTrainingPipeline#saved_query_id}

---

##### `StratifiedSplit`<sup>Optional</sup> <a name="StratifiedSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.stratifiedSplit"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigStratifiedSplit StratifiedSplit { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit">VertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

stratified_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#stratified_split VertexAiTrainingPipeline#stratified_split}

---

##### `TimestampSplit`<sup>Optional</sup> <a name="TimestampSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.timestampSplit"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigTimestampSplit TimestampSplit { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit">VertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

timestamp_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#timestamp_split VertexAiTrainingPipeline#timestamp_split}

---

### VertexAiTrainingPipelineInputDataConfigBigqueryDestination <a name="VertexAiTrainingPipelineInputDataConfigBigqueryDestination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineInputDataConfigBigqueryDestination {
    string OutputUri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination.property.outputUri">OutputUri</a></code> | <code>string</code> | The BigQuery table to which the output is to be written. |

---

##### `OutputUri`<sup>Required</sup> <a name="OutputUri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination.property.outputUri"></a>

```csharp
public string OutputUri { get; set; }
```

- *Type:* string

The BigQuery table to which the output is to be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#output_uri VertexAiTrainingPipeline#output_uri}

---

### VertexAiTrainingPipelineInputDataConfigFilterSplit <a name="VertexAiTrainingPipelineInputDataConfigFilterSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineInputDataConfigFilterSplit {
    string TestFilter,
    string TrainingFilter,
    string ValidationFilter
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit.property.testFilter">TestFilter</a></code> | <code>string</code> | A filter on DataItems of the Dataset for test set. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit.property.trainingFilter">TrainingFilter</a></code> | <code>string</code> | A filter on DataItems of the Dataset for training set. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit.property.validationFilter">ValidationFilter</a></code> | <code>string</code> | A filter on DataItems of the Dataset for validation set. |

---

##### `TestFilter`<sup>Required</sup> <a name="TestFilter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit.property.testFilter"></a>

```csharp
public string TestFilter { get; set; }
```

- *Type:* string

A filter on DataItems of the Dataset for test set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#test_filter VertexAiTrainingPipeline#test_filter}

---

##### `TrainingFilter`<sup>Required</sup> <a name="TrainingFilter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit.property.trainingFilter"></a>

```csharp
public string TrainingFilter { get; set; }
```

- *Type:* string

A filter on DataItems of the Dataset for training set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_filter VertexAiTrainingPipeline#training_filter}

---

##### `ValidationFilter`<sup>Required</sup> <a name="ValidationFilter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit.property.validationFilter"></a>

```csharp
public string ValidationFilter { get; set; }
```

- *Type:* string

A filter on DataItems of the Dataset for validation set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#validation_filter VertexAiTrainingPipeline#validation_filter}

---

### VertexAiTrainingPipelineInputDataConfigFractionSplit <a name="VertexAiTrainingPipelineInputDataConfigFractionSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineInputDataConfigFractionSplit {
    double TestFraction = null,
    double TrainingFraction = null,
    double ValidationFraction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit.property.testFraction">TestFraction</a></code> | <code>double</code> | The fraction of the input data that is to be used to evaluate the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit.property.trainingFraction">TrainingFraction</a></code> | <code>double</code> | The fraction of the input data that is to be used to train the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit.property.validationFraction">ValidationFraction</a></code> | <code>double</code> | The fraction of the input data that is to be used to validate the Model. |

---

##### `TestFraction`<sup>Optional</sup> <a name="TestFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit.property.testFraction"></a>

```csharp
public double TestFraction { get; set; }
```

- *Type:* double

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#test_fraction VertexAiTrainingPipeline#test_fraction}

---

##### `TrainingFraction`<sup>Optional</sup> <a name="TrainingFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit.property.trainingFraction"></a>

```csharp
public double TrainingFraction { get; set; }
```

- *Type:* double

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_fraction VertexAiTrainingPipeline#training_fraction}

---

##### `ValidationFraction`<sup>Optional</sup> <a name="ValidationFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit.property.validationFraction"></a>

```csharp
public double ValidationFraction { get; set; }
```

- *Type:* double

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#validation_fraction VertexAiTrainingPipeline#validation_fraction}

---

### VertexAiTrainingPipelineInputDataConfigGcsDestination <a name="VertexAiTrainingPipelineInputDataConfigGcsDestination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineInputDataConfigGcsDestination {
    string OutputUriPrefix
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination.property.outputUriPrefix">OutputUriPrefix</a></code> | <code>string</code> | The Cloud Storage URI prefix to write to. |

---

##### `OutputUriPrefix`<sup>Required</sup> <a name="OutputUriPrefix" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination.property.outputUriPrefix"></a>

```csharp
public string OutputUriPrefix { get; set; }
```

- *Type:* string

The Cloud Storage URI prefix to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#output_uri_prefix VertexAiTrainingPipeline#output_uri_prefix}

---

### VertexAiTrainingPipelineInputDataConfigPredefinedSplit <a name="VertexAiTrainingPipelineInputDataConfigPredefinedSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineInputDataConfigPredefinedSplit {
    string Key
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit.property.key">Key</a></code> | <code>string</code> | The key is a name of one of the Dataset's data columns. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#key VertexAiTrainingPipeline#key}

---

### VertexAiTrainingPipelineInputDataConfigStratifiedSplit <a name="VertexAiTrainingPipelineInputDataConfigStratifiedSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineInputDataConfigStratifiedSplit {
    string Key,
    double TestFraction = null,
    double TrainingFraction = null,
    double ValidationFraction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.key">Key</a></code> | <code>string</code> | The key is a name of one of the Dataset's data columns. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.testFraction">TestFraction</a></code> | <code>double</code> | The fraction of the input data that is to be used to evaluate the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.trainingFraction">TrainingFraction</a></code> | <code>double</code> | The fraction of the input data that is to be used to train the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.validationFraction">ValidationFraction</a></code> | <code>double</code> | The fraction of the input data that is to be used to validate the Model. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#key VertexAiTrainingPipeline#key}

---

##### `TestFraction`<sup>Optional</sup> <a name="TestFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.testFraction"></a>

```csharp
public double TestFraction { get; set; }
```

- *Type:* double

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#test_fraction VertexAiTrainingPipeline#test_fraction}

---

##### `TrainingFraction`<sup>Optional</sup> <a name="TrainingFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.trainingFraction"></a>

```csharp
public double TrainingFraction { get; set; }
```

- *Type:* double

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_fraction VertexAiTrainingPipeline#training_fraction}

---

##### `ValidationFraction`<sup>Optional</sup> <a name="ValidationFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.validationFraction"></a>

```csharp
public double ValidationFraction { get; set; }
```

- *Type:* double

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#validation_fraction VertexAiTrainingPipeline#validation_fraction}

---

### VertexAiTrainingPipelineInputDataConfigTimestampSplit <a name="VertexAiTrainingPipelineInputDataConfigTimestampSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineInputDataConfigTimestampSplit {
    string Key,
    double TestFraction = null,
    double TrainingFraction = null,
    double ValidationFraction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.property.key">Key</a></code> | <code>string</code> | The key is a name of one of the Dataset's data columns. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.property.testFraction">TestFraction</a></code> | <code>double</code> | The fraction of the input data that is to be used to evaluate the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.property.trainingFraction">TrainingFraction</a></code> | <code>double</code> | The fraction of the input data that is to be used to train the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.property.validationFraction">ValidationFraction</a></code> | <code>double</code> | The fraction of the input data that is to be used to validate the Model. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#key VertexAiTrainingPipeline#key}

---

##### `TestFraction`<sup>Optional</sup> <a name="TestFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.property.testFraction"></a>

```csharp
public double TestFraction { get; set; }
```

- *Type:* double

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#test_fraction VertexAiTrainingPipeline#test_fraction}

---

##### `TrainingFraction`<sup>Optional</sup> <a name="TrainingFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.property.trainingFraction"></a>

```csharp
public double TrainingFraction { get; set; }
```

- *Type:* double

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_fraction VertexAiTrainingPipeline#training_fraction}

---

##### `ValidationFraction`<sup>Optional</sup> <a name="ValidationFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.property.validationFraction"></a>

```csharp
public double ValidationFraction { get; set; }
```

- *Type:* double

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#validation_fraction VertexAiTrainingPipeline#validation_fraction}

---

### VertexAiTrainingPipelineModelToUpload <a name="VertexAiTrainingPipelineModelToUpload" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUpload {
    string DisplayName,
    string ArtifactUri = null,
    VertexAiTrainingPipelineModelToUploadContainerSpec ContainerSpec = null,
    string Description = null,
    VertexAiTrainingPipelineModelToUploadEncryptionSpec EncryptionSpec = null,
    VertexAiTrainingPipelineModelToUploadExplanationSpec ExplanationSpec = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string[] VersionAliases = null,
    string VersionDescription = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.displayName">DisplayName</a></code> | <code>string</code> | The user-defined name of the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.artifactUri">ArtifactUri</a></code> | <code>string</code> | The path to the directory containing the Model artifact and any of its supporting files. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.containerSpec">ContainerSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec">VertexAiTrainingPipelineModelToUploadContainerSpec</a></code> | container_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.description">Description</a></code> | <code>string</code> | The description of the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec">VertexAiTrainingPipelineModelToUploadEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.explanationSpec">ExplanationSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec">VertexAiTrainingPipelineModelToUploadExplanationSpec</a></code> | explanation_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels with user-defined metadata to organize your Models. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.versionAliases">VersionAliases</a></code> | <code>string[]</code> | User provided version aliases so that a model version can be referenced using alias. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.versionDescription">VersionDescription</a></code> | <code>string</code> | The description of this version. |

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The user-defined name of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#display_name VertexAiTrainingPipeline#display_name}

---

##### `ArtifactUri`<sup>Optional</sup> <a name="ArtifactUri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.artifactUri"></a>

```csharp
public string ArtifactUri { get; set; }
```

- *Type:* string

The path to the directory containing the Model artifact and any of its supporting files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#artifact_uri VertexAiTrainingPipeline#artifact_uri}

---

##### `ContainerSpec`<sup>Optional</sup> <a name="ContainerSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.containerSpec"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadContainerSpec ContainerSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec">VertexAiTrainingPipelineModelToUploadContainerSpec</a>

container_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#container_spec VertexAiTrainingPipeline#container_spec}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#description VertexAiTrainingPipeline#description}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.encryptionSpec"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadEncryptionSpec EncryptionSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec">VertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#encryption_spec VertexAiTrainingPipeline#encryption_spec}

---

##### `ExplanationSpec`<sup>Optional</sup> <a name="ExplanationSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.explanationSpec"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadExplanationSpec ExplanationSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec">VertexAiTrainingPipelineModelToUploadExplanationSpec</a>

explanation_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#explanation_spec VertexAiTrainingPipeline#explanation_spec}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels with user-defined metadata to organize your Models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#labels VertexAiTrainingPipeline#labels}

---

##### `VersionAliases`<sup>Optional</sup> <a name="VersionAliases" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.versionAliases"></a>

```csharp
public string[] VersionAliases { get; set; }
```

- *Type:* string[]

User provided version aliases so that a model version can be referenced using alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#version_aliases VertexAiTrainingPipeline#version_aliases}

---

##### `VersionDescription`<sup>Optional</sup> <a name="VersionDescription" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.versionDescription"></a>

```csharp
public string VersionDescription { get; set; }
```

- *Type:* string

The description of this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#version_description VertexAiTrainingPipeline#version_description}

---

### VertexAiTrainingPipelineModelToUploadContainerSpec <a name="VertexAiTrainingPipelineModelToUploadContainerSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUploadContainerSpec {
    string ImageUri,
    string[] Args = null,
    string[] Command = null,
    string DeploymentTimeout = null,
    IResolvable|VertexAiTrainingPipelineModelToUploadContainerSpecEnv[] Env = null,
    IResolvable|VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts[] GrpcPorts = null,
    VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe HealthProbe = null,
    string HealthRoute = null,
    IResolvable|VertexAiTrainingPipelineModelToUploadContainerSpecPorts[] Ports = null,
    string PredictRoute = null,
    string SharedMemorySizeMb = null,
    VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe StartupProbe = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.imageUri">ImageUri</a></code> | <code>string</code> | URI of the Docker image to be used as the custom container for serving predictions. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.args">Args</a></code> | <code>string[]</code> | Specifies the arguments to the command when the container starts. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.command">Command</a></code> | <code>string[]</code> | Specifies the command that runs when the container starts. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.deploymentTimeout">DeploymentTimeout</a></code> | <code>string</code> | Deployment timeout. Limit for deployment timeout is 2 hours. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.env">Env</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>[]</code> | env block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.grpcPorts">GrpcPorts</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>[]</code> | grpc_ports block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.healthProbe">HealthProbe</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a></code> | health_probe block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.healthRoute">HealthRoute</a></code> | <code>string</code> | HTTP path on the container to send health checks to. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.ports">Ports</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>[]</code> | ports block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.predictRoute">PredictRoute</a></code> | <code>string</code> | HTTP path on the container to send prediction requests to. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.sharedMemorySizeMb">SharedMemorySizeMb</a></code> | <code>string</code> | The amount of the VM memory to reserve as the shared memory for the model in megabytes. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.startupProbe">StartupProbe</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a></code> | startup_probe block. |

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.imageUri"></a>

```csharp
public string ImageUri { get; set; }
```

- *Type:* string

URI of the Docker image to be used as the custom container for serving predictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#image_uri VertexAiTrainingPipeline#image_uri}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

Specifies the arguments to the command when the container starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#args VertexAiTrainingPipeline#args}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

Specifies the command that runs when the container starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#command VertexAiTrainingPipeline#command}

---

##### `DeploymentTimeout`<sup>Optional</sup> <a name="DeploymentTimeout" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.deploymentTimeout"></a>

```csharp
public string DeploymentTimeout { get; set; }
```

- *Type:* string

Deployment timeout. Limit for deployment timeout is 2 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#deployment_timeout VertexAiTrainingPipeline#deployment_timeout}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.env"></a>

```csharp
public IResolvable|VertexAiTrainingPipelineModelToUploadContainerSpecEnv[] Env { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>[]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#env VertexAiTrainingPipeline#env}

---

##### `GrpcPorts`<sup>Optional</sup> <a name="GrpcPorts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.grpcPorts"></a>

```csharp
public IResolvable|VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts[] GrpcPorts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>[]

grpc_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#grpc_ports VertexAiTrainingPipeline#grpc_ports}

---

##### `HealthProbe`<sup>Optional</sup> <a name="HealthProbe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.healthProbe"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe HealthProbe { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

health_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#health_probe VertexAiTrainingPipeline#health_probe}

---

##### `HealthRoute`<sup>Optional</sup> <a name="HealthRoute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.healthRoute"></a>

```csharp
public string HealthRoute { get; set; }
```

- *Type:* string

HTTP path on the container to send health checks to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#health_route VertexAiTrainingPipeline#health_route}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.ports"></a>

```csharp
public IResolvable|VertexAiTrainingPipelineModelToUploadContainerSpecPorts[] Ports { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>[]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#ports VertexAiTrainingPipeline#ports}

---

##### `PredictRoute`<sup>Optional</sup> <a name="PredictRoute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.predictRoute"></a>

```csharp
public string PredictRoute { get; set; }
```

- *Type:* string

HTTP path on the container to send prediction requests to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#predict_route VertexAiTrainingPipeline#predict_route}

---

##### `SharedMemorySizeMb`<sup>Optional</sup> <a name="SharedMemorySizeMb" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.sharedMemorySizeMb"></a>

```csharp
public string SharedMemorySizeMb { get; set; }
```

- *Type:* string

The amount of the VM memory to reserve as the shared memory for the model in megabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#shared_memory_size_mb VertexAiTrainingPipeline#shared_memory_size_mb}

---

##### `StartupProbe`<sup>Optional</sup> <a name="StartupProbe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.startupProbe"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe StartupProbe { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#startup_probe VertexAiTrainingPipeline#startup_probe}

---

### VertexAiTrainingPipelineModelToUploadContainerSpecEnv <a name="VertexAiTrainingPipelineModelToUploadContainerSpecEnv" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUploadContainerSpecEnv {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.name">Name</a></code> | <code>string</code> | The name of the environment variable. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.value">Value</a></code> | <code>string</code> | The value of the environment variable. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#name VertexAiTrainingPipeline#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#value VertexAiTrainingPipeline#value}

---

### VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts <a name="VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts {
    double ContainerPort
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts.property.containerPort">ContainerPort</a></code> | <code>double</code> | The number of the port on the container. |

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts.property.containerPort"></a>

```csharp
public double ContainerPort { get; set; }
```

- *Type:* double

The number of the port on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#container_port VertexAiTrainingPipeline#container_port}

---

### VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe <a name="VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe {
    VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec Exec = null,
    double PeriodSeconds = null,
    double TimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.exec">Exec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a></code> | exec block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | Number of seconds after which the probe times out. |

---

##### `Exec`<sup>Optional</sup> <a name="Exec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.exec"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec Exec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#exec VertexAiTrainingPipeline#exec}

---

##### `PeriodSeconds`<sup>Optional</sup> <a name="PeriodSeconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; set; }
```

- *Type:* double

How often (in seconds) to perform the probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#period_seconds VertexAiTrainingPipeline#period_seconds}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; set; }
```

- *Type:* double

Number of seconds after which the probe times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#timeout_seconds VertexAiTrainingPipeline#timeout_seconds}

---

### VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec <a name="VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec {
    string[] Command = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec.property.command">Command</a></code> | <code>string[]</code> | Command is the command line to execute inside the container. |

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

Command is the command line to execute inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#command VertexAiTrainingPipeline#command}

---

### VertexAiTrainingPipelineModelToUploadContainerSpecPorts <a name="VertexAiTrainingPipelineModelToUploadContainerSpecPorts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUploadContainerSpecPorts {
    double ContainerPort
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts.property.containerPort">ContainerPort</a></code> | <code>double</code> | The number of the port on the container. |

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts.property.containerPort"></a>

```csharp
public double ContainerPort { get; set; }
```

- *Type:* double

The number of the port on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#container_port VertexAiTrainingPipeline#container_port}

---

### VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe <a name="VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe {
    VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec Exec = null,
    double PeriodSeconds = null,
    double TimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.exec">Exec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a></code> | exec block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | Number of seconds after which the probe times out. |

---

##### `Exec`<sup>Optional</sup> <a name="Exec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.exec"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec Exec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#exec VertexAiTrainingPipeline#exec}

---

##### `PeriodSeconds`<sup>Optional</sup> <a name="PeriodSeconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; set; }
```

- *Type:* double

How often (in seconds) to perform the probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#period_seconds VertexAiTrainingPipeline#period_seconds}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; set; }
```

- *Type:* double

Number of seconds after which the probe times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#timeout_seconds VertexAiTrainingPipeline#timeout_seconds}

---

### VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec <a name="VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec {
    string[] Command = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec.property.command">Command</a></code> | <code>string[]</code> | Command is the command line to execute inside the container. |

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

Command is the command line to execute inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#command VertexAiTrainingPipeline#command}

---

### VertexAiTrainingPipelineModelToUploadEncryptionSpec <a name="VertexAiTrainingPipelineModelToUploadEncryptionSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUploadEncryptionSpec {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The Cloud KMS resource identifier of the customer-managed encryption key used to protect the model. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The Cloud KMS resource identifier of the customer-managed encryption key used to protect the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#kms_key_name VertexAiTrainingPipeline#kms_key_name}

---

### VertexAiTrainingPipelineModelToUploadExplanationSpec <a name="VertexAiTrainingPipelineModelToUploadExplanationSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUploadExplanationSpec {
    string Metadata = null,
    string Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec.property.metadata">Metadata</a></code> | <code>string</code> | Metadata describing the Model's input and output for explanation. This field uses JSON data as a string. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec.property.parameters">Parameters</a></code> | <code>string</code> | Parameters that configure explaining of the Model's predictions. This field uses JSON data as a string. |

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec.property.metadata"></a>

```csharp
public string Metadata { get; set; }
```

- *Type:* string

Metadata describing the Model's input and output for explanation. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#metadata VertexAiTrainingPipeline#metadata}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

Parameters that configure explaining of the Model's predictions. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#parameters VertexAiTrainingPipeline#parameters}

---

### VertexAiTrainingPipelineTimeouts <a name="VertexAiTrainingPipelineTimeouts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#create VertexAiTrainingPipeline#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#delete VertexAiTrainingPipeline#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#update VertexAiTrainingPipeline#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#create VertexAiTrainingPipeline#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#delete VertexAiTrainingPipeline#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#update VertexAiTrainingPipeline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiTrainingPipelineEncryptionSpecOutputReference <a name="VertexAiTrainingPipelineEncryptionSpecOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineEncryptionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec">VertexAiTrainingPipelineEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.internalValue"></a>

```csharp
public VertexAiTrainingPipelineEncryptionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec">VertexAiTrainingPipelineEncryptionSpec</a>

---


### VertexAiTrainingPipelineErrorList <a name="VertexAiTrainingPipelineErrorList" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.get"></a>

```csharp
private VertexAiTrainingPipelineErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiTrainingPipelineErrorOutputReference <a name="VertexAiTrainingPipelineErrorOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineError">VertexAiTrainingPipelineError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.internalValue"></a>

```csharp
public VertexAiTrainingPipelineError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineError">VertexAiTrainingPipelineError</a>

---


### VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference <a name="VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUriInput">OutputUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUri">OutputUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination">VertexAiTrainingPipelineInputDataConfigBigqueryDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutputUriInput`<sup>Optional</sup> <a name="OutputUriInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUriInput"></a>

```csharp
public string OutputUriInput { get; }
```

- *Type:* string

---

##### `OutputUri`<sup>Required</sup> <a name="OutputUri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUri"></a>

```csharp
public string OutputUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.internalValue"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigBigqueryDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination">VertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

---


### VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference <a name="VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilterInput">TestFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilterInput">TrainingFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilterInput">ValidationFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilter">TestFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilter">TrainingFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilter">ValidationFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit">VertexAiTrainingPipelineInputDataConfigFilterSplit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TestFilterInput`<sup>Optional</sup> <a name="TestFilterInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilterInput"></a>

```csharp
public string TestFilterInput { get; }
```

- *Type:* string

---

##### `TrainingFilterInput`<sup>Optional</sup> <a name="TrainingFilterInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilterInput"></a>

```csharp
public string TrainingFilterInput { get; }
```

- *Type:* string

---

##### `ValidationFilterInput`<sup>Optional</sup> <a name="ValidationFilterInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilterInput"></a>

```csharp
public string ValidationFilterInput { get; }
```

- *Type:* string

---

##### `TestFilter`<sup>Required</sup> <a name="TestFilter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilter"></a>

```csharp
public string TestFilter { get; }
```

- *Type:* string

---

##### `TrainingFilter`<sup>Required</sup> <a name="TrainingFilter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilter"></a>

```csharp
public string TrainingFilter { get; }
```

- *Type:* string

---

##### `ValidationFilter`<sup>Required</sup> <a name="ValidationFilter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilter"></a>

```csharp
public string ValidationFilter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.internalValue"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigFilterSplit InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit">VertexAiTrainingPipelineInputDataConfigFilterSplit</a>

---


### VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference <a name="VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTestFraction">ResetTestFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTrainingFraction">ResetTrainingFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetValidationFraction">ResetValidationFraction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTestFraction` <a name="ResetTestFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTestFraction"></a>

```csharp
private void ResetTestFraction()
```

##### `ResetTrainingFraction` <a name="ResetTrainingFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTrainingFraction"></a>

```csharp
private void ResetTrainingFraction()
```

##### `ResetValidationFraction` <a name="ResetValidationFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetValidationFraction"></a>

```csharp
private void ResetValidationFraction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFractionInput">TestFractionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFractionInput">TrainingFractionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFractionInput">ValidationFractionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFraction">TestFraction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFraction">TrainingFraction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFraction">ValidationFraction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit">VertexAiTrainingPipelineInputDataConfigFractionSplit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TestFractionInput`<sup>Optional</sup> <a name="TestFractionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFractionInput"></a>

```csharp
public double TestFractionInput { get; }
```

- *Type:* double

---

##### `TrainingFractionInput`<sup>Optional</sup> <a name="TrainingFractionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFractionInput"></a>

```csharp
public double TrainingFractionInput { get; }
```

- *Type:* double

---

##### `ValidationFractionInput`<sup>Optional</sup> <a name="ValidationFractionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFractionInput"></a>

```csharp
public double ValidationFractionInput { get; }
```

- *Type:* double

---

##### `TestFraction`<sup>Required</sup> <a name="TestFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFraction"></a>

```csharp
public double TestFraction { get; }
```

- *Type:* double

---

##### `TrainingFraction`<sup>Required</sup> <a name="TrainingFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFraction"></a>

```csharp
public double TrainingFraction { get; }
```

- *Type:* double

---

##### `ValidationFraction`<sup>Required</sup> <a name="ValidationFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFraction"></a>

```csharp
public double ValidationFraction { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.internalValue"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigFractionSplit InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit">VertexAiTrainingPipelineInputDataConfigFractionSplit</a>

---


### VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference <a name="VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefixInput">OutputUriPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefix">OutputUriPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination">VertexAiTrainingPipelineInputDataConfigGcsDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutputUriPrefixInput`<sup>Optional</sup> <a name="OutputUriPrefixInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefixInput"></a>

```csharp
public string OutputUriPrefixInput { get; }
```

- *Type:* string

---

##### `OutputUriPrefix`<sup>Required</sup> <a name="OutputUriPrefix" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefix"></a>

```csharp
public string OutputUriPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.internalValue"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigGcsDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination">VertexAiTrainingPipelineInputDataConfigGcsDestination</a>

---


### VertexAiTrainingPipelineInputDataConfigOutputReference <a name="VertexAiTrainingPipelineInputDataConfigOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineInputDataConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putBigqueryDestination">PutBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit">PutFilterSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit">PutFractionSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putGcsDestination">PutGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putPredefinedSplit">PutPredefinedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit">PutStratifiedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit">PutTimestampSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationSchemaUri">ResetAnnotationSchemaUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationsFilter">ResetAnnotationsFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetBigqueryDestination">ResetBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetFilterSplit">ResetFilterSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetFractionSplit">ResetFractionSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetGcsDestination">ResetGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetPersistMlUseAssignment">ResetPersistMlUseAssignment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetPredefinedSplit">ResetPredefinedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetSavedQueryId">ResetSavedQueryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetStratifiedSplit">ResetStratifiedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetTimestampSplit">ResetTimestampSplit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBigqueryDestination` <a name="PutBigqueryDestination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putBigqueryDestination"></a>

```csharp
private void PutBigqueryDestination(VertexAiTrainingPipelineInputDataConfigBigqueryDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putBigqueryDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination">VertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

---

##### `PutFilterSplit` <a name="PutFilterSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit"></a>

```csharp
private void PutFilterSplit(VertexAiTrainingPipelineInputDataConfigFilterSplit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit">VertexAiTrainingPipelineInputDataConfigFilterSplit</a>

---

##### `PutFractionSplit` <a name="PutFractionSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit"></a>

```csharp
private void PutFractionSplit(VertexAiTrainingPipelineInputDataConfigFractionSplit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit">VertexAiTrainingPipelineInputDataConfigFractionSplit</a>

---

##### `PutGcsDestination` <a name="PutGcsDestination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putGcsDestination"></a>

```csharp
private void PutGcsDestination(VertexAiTrainingPipelineInputDataConfigGcsDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putGcsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination">VertexAiTrainingPipelineInputDataConfigGcsDestination</a>

---

##### `PutPredefinedSplit` <a name="PutPredefinedSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putPredefinedSplit"></a>

```csharp
private void PutPredefinedSplit(VertexAiTrainingPipelineInputDataConfigPredefinedSplit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putPredefinedSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit">VertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

---

##### `PutStratifiedSplit` <a name="PutStratifiedSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit"></a>

```csharp
private void PutStratifiedSplit(VertexAiTrainingPipelineInputDataConfigStratifiedSplit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit">VertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

---

##### `PutTimestampSplit` <a name="PutTimestampSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit"></a>

```csharp
private void PutTimestampSplit(VertexAiTrainingPipelineInputDataConfigTimestampSplit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit">VertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

---

##### `ResetAnnotationSchemaUri` <a name="ResetAnnotationSchemaUri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationSchemaUri"></a>

```csharp
private void ResetAnnotationSchemaUri()
```

##### `ResetAnnotationsFilter` <a name="ResetAnnotationsFilter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationsFilter"></a>

```csharp
private void ResetAnnotationsFilter()
```

##### `ResetBigqueryDestination` <a name="ResetBigqueryDestination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetBigqueryDestination"></a>

```csharp
private void ResetBigqueryDestination()
```

##### `ResetFilterSplit` <a name="ResetFilterSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetFilterSplit"></a>

```csharp
private void ResetFilterSplit()
```

##### `ResetFractionSplit` <a name="ResetFractionSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetFractionSplit"></a>

```csharp
private void ResetFractionSplit()
```

##### `ResetGcsDestination` <a name="ResetGcsDestination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetGcsDestination"></a>

```csharp
private void ResetGcsDestination()
```

##### `ResetPersistMlUseAssignment` <a name="ResetPersistMlUseAssignment" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetPersistMlUseAssignment"></a>

```csharp
private void ResetPersistMlUseAssignment()
```

##### `ResetPredefinedSplit` <a name="ResetPredefinedSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetPredefinedSplit"></a>

```csharp
private void ResetPredefinedSplit()
```

##### `ResetSavedQueryId` <a name="ResetSavedQueryId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetSavedQueryId"></a>

```csharp
private void ResetSavedQueryId()
```

##### `ResetStratifiedSplit` <a name="ResetStratifiedSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetStratifiedSplit"></a>

```csharp
private void ResetStratifiedSplit()
```

##### `ResetTimestampSplit` <a name="ResetTimestampSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetTimestampSplit"></a>

```csharp
private void ResetTimestampSplit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestination">BigqueryDestination</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference">VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplit">FilterSplit</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference">VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplit">FractionSplit</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference">VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestination">GcsDestination</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference">VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplit">PredefinedSplit</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference">VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplit">StratifiedSplit</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference">VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplit">TimestampSplit</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference">VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUriInput">AnnotationSchemaUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilterInput">AnnotationsFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestinationInput">BigqueryDestinationInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination">VertexAiTrainingPipelineInputDataConfigBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplitInput">FilterSplitInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit">VertexAiTrainingPipelineInputDataConfigFilterSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplitInput">FractionSplitInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit">VertexAiTrainingPipelineInputDataConfigFractionSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestinationInput">GcsDestinationInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination">VertexAiTrainingPipelineInputDataConfigGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignmentInput">PersistMlUseAssignmentInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplitInput">PredefinedSplitInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit">VertexAiTrainingPipelineInputDataConfigPredefinedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryIdInput">SavedQueryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplitInput">StratifiedSplitInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit">VertexAiTrainingPipelineInputDataConfigStratifiedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplitInput">TimestampSplitInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit">VertexAiTrainingPipelineInputDataConfigTimestampSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUri">AnnotationSchemaUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilter">AnnotationsFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignment">PersistMlUseAssignment</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryId">SavedQueryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig">VertexAiTrainingPipelineInputDataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BigqueryDestination`<sup>Required</sup> <a name="BigqueryDestination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestination"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference BigqueryDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference">VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference</a>

---

##### `FilterSplit`<sup>Required</sup> <a name="FilterSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplit"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference FilterSplit { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference">VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference</a>

---

##### `FractionSplit`<sup>Required</sup> <a name="FractionSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplit"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference FractionSplit { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference">VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference</a>

---

##### `GcsDestination`<sup>Required</sup> <a name="GcsDestination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestination"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference GcsDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference">VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference</a>

---

##### `PredefinedSplit`<sup>Required</sup> <a name="PredefinedSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplit"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference PredefinedSplit { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference">VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference</a>

---

##### `StratifiedSplit`<sup>Required</sup> <a name="StratifiedSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplit"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference StratifiedSplit { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference">VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference</a>

---

##### `TimestampSplit`<sup>Required</sup> <a name="TimestampSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplit"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference TimestampSplit { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference">VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference</a>

---

##### `AnnotationSchemaUriInput`<sup>Optional</sup> <a name="AnnotationSchemaUriInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUriInput"></a>

```csharp
public string AnnotationSchemaUriInput { get; }
```

- *Type:* string

---

##### `AnnotationsFilterInput`<sup>Optional</sup> <a name="AnnotationsFilterInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilterInput"></a>

```csharp
public string AnnotationsFilterInput { get; }
```

- *Type:* string

---

##### `BigqueryDestinationInput`<sup>Optional</sup> <a name="BigqueryDestinationInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestinationInput"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigBigqueryDestination BigqueryDestinationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination">VertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `FilterSplitInput`<sup>Optional</sup> <a name="FilterSplitInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplitInput"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigFilterSplit FilterSplitInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit">VertexAiTrainingPipelineInputDataConfigFilterSplit</a>

---

##### `FractionSplitInput`<sup>Optional</sup> <a name="FractionSplitInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplitInput"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigFractionSplit FractionSplitInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit">VertexAiTrainingPipelineInputDataConfigFractionSplit</a>

---

##### `GcsDestinationInput`<sup>Optional</sup> <a name="GcsDestinationInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestinationInput"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigGcsDestination GcsDestinationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination">VertexAiTrainingPipelineInputDataConfigGcsDestination</a>

---

##### `PersistMlUseAssignmentInput`<sup>Optional</sup> <a name="PersistMlUseAssignmentInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignmentInput"></a>

```csharp
public bool|IResolvable PersistMlUseAssignmentInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PredefinedSplitInput`<sup>Optional</sup> <a name="PredefinedSplitInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplitInput"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigPredefinedSplit PredefinedSplitInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit">VertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

---

##### `SavedQueryIdInput`<sup>Optional</sup> <a name="SavedQueryIdInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryIdInput"></a>

```csharp
public string SavedQueryIdInput { get; }
```

- *Type:* string

---

##### `StratifiedSplitInput`<sup>Optional</sup> <a name="StratifiedSplitInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplitInput"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigStratifiedSplit StratifiedSplitInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit">VertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

---

##### `TimestampSplitInput`<sup>Optional</sup> <a name="TimestampSplitInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplitInput"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigTimestampSplit TimestampSplitInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit">VertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

---

##### `AnnotationSchemaUri`<sup>Required</sup> <a name="AnnotationSchemaUri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUri"></a>

```csharp
public string AnnotationSchemaUri { get; }
```

- *Type:* string

---

##### `AnnotationsFilter`<sup>Required</sup> <a name="AnnotationsFilter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilter"></a>

```csharp
public string AnnotationsFilter { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `PersistMlUseAssignment`<sup>Required</sup> <a name="PersistMlUseAssignment" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignment"></a>

```csharp
public bool|IResolvable PersistMlUseAssignment { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SavedQueryId`<sup>Required</sup> <a name="SavedQueryId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryId"></a>

```csharp
public string SavedQueryId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.internalValue"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig">VertexAiTrainingPipelineInputDataConfig</a>

---


### VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference <a name="VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit">VertexAiTrainingPipelineInputDataConfigPredefinedSplit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.internalValue"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigPredefinedSplit InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit">VertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

---


### VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference <a name="VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTestFraction">ResetTestFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTrainingFraction">ResetTrainingFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetValidationFraction">ResetValidationFraction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTestFraction` <a name="ResetTestFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTestFraction"></a>

```csharp
private void ResetTestFraction()
```

##### `ResetTrainingFraction` <a name="ResetTrainingFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTrainingFraction"></a>

```csharp
private void ResetTrainingFraction()
```

##### `ResetValidationFraction` <a name="ResetValidationFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetValidationFraction"></a>

```csharp
private void ResetValidationFraction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFractionInput">TestFractionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFractionInput">TrainingFractionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFractionInput">ValidationFractionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFraction">TestFraction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFraction">TrainingFraction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFraction">ValidationFraction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit">VertexAiTrainingPipelineInputDataConfigStratifiedSplit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `TestFractionInput`<sup>Optional</sup> <a name="TestFractionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFractionInput"></a>

```csharp
public double TestFractionInput { get; }
```

- *Type:* double

---

##### `TrainingFractionInput`<sup>Optional</sup> <a name="TrainingFractionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFractionInput"></a>

```csharp
public double TrainingFractionInput { get; }
```

- *Type:* double

---

##### `ValidationFractionInput`<sup>Optional</sup> <a name="ValidationFractionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFractionInput"></a>

```csharp
public double ValidationFractionInput { get; }
```

- *Type:* double

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `TestFraction`<sup>Required</sup> <a name="TestFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFraction"></a>

```csharp
public double TestFraction { get; }
```

- *Type:* double

---

##### `TrainingFraction`<sup>Required</sup> <a name="TrainingFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFraction"></a>

```csharp
public double TrainingFraction { get; }
```

- *Type:* double

---

##### `ValidationFraction`<sup>Required</sup> <a name="ValidationFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFraction"></a>

```csharp
public double ValidationFraction { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.internalValue"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigStratifiedSplit InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit">VertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

---


### VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference <a name="VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTestFraction">ResetTestFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTrainingFraction">ResetTrainingFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetValidationFraction">ResetValidationFraction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTestFraction` <a name="ResetTestFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTestFraction"></a>

```csharp
private void ResetTestFraction()
```

##### `ResetTrainingFraction` <a name="ResetTrainingFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTrainingFraction"></a>

```csharp
private void ResetTrainingFraction()
```

##### `ResetValidationFraction` <a name="ResetValidationFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetValidationFraction"></a>

```csharp
private void ResetValidationFraction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFractionInput">TestFractionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFractionInput">TrainingFractionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFractionInput">ValidationFractionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFraction">TestFraction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFraction">TrainingFraction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFraction">ValidationFraction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit">VertexAiTrainingPipelineInputDataConfigTimestampSplit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `TestFractionInput`<sup>Optional</sup> <a name="TestFractionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFractionInput"></a>

```csharp
public double TestFractionInput { get; }
```

- *Type:* double

---

##### `TrainingFractionInput`<sup>Optional</sup> <a name="TrainingFractionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFractionInput"></a>

```csharp
public double TrainingFractionInput { get; }
```

- *Type:* double

---

##### `ValidationFractionInput`<sup>Optional</sup> <a name="ValidationFractionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFractionInput"></a>

```csharp
public double ValidationFractionInput { get; }
```

- *Type:* double

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `TestFraction`<sup>Required</sup> <a name="TestFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFraction"></a>

```csharp
public double TestFraction { get; }
```

- *Type:* double

---

##### `TrainingFraction`<sup>Required</sup> <a name="TrainingFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFraction"></a>

```csharp
public double TrainingFraction { get; }
```

- *Type:* double

---

##### `ValidationFraction`<sup>Required</sup> <a name="ValidationFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFraction"></a>

```csharp
public double ValidationFraction { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.internalValue"></a>

```csharp
public VertexAiTrainingPipelineInputDataConfigTimestampSplit InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit">VertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecEnvList <a name="VertexAiTrainingPipelineModelToUploadContainerSpecEnvList" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUploadContainerSpecEnvList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.get"></a>

```csharp
private VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.internalValue"></a>

```csharp
public IResolvable|VertexAiTrainingPipelineModelToUploadContainerSpecEnv[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>[]

---


### VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference <a name="VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiTrainingPipelineModelToUploadContainerSpecEnv InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList <a name="VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.get"></a>

```csharp
private VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.internalValue"></a>

```csharp
public IResolvable|VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>[]

---


### VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference <a name="VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPortInput">ContainerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPort">ContainerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerPortInput`<sup>Optional</sup> <a name="ContainerPortInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPortInput"></a>

```csharp
public double ContainerPortInput { get; }
```

- *Type:* double

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPort"></a>

```csharp
public double ContainerPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference <a name="VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.internalValue"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference <a name="VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.putExec">PutExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetExec">ResetExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetPeriodSeconds">ResetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExec` <a name="PutExec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.putExec"></a>

```csharp
private void PutExec(VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.putExec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

---

##### `ResetExec` <a name="ResetExec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetExec"></a>

```csharp
private void ResetExec()
```

##### `ResetPeriodSeconds` <a name="ResetPeriodSeconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetPeriodSeconds"></a>

```csharp
private void ResetPeriodSeconds()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetTimeoutSeconds"></a>

```csharp
private void ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.exec">Exec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.execInput">ExecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Exec`<sup>Required</sup> <a name="Exec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.exec"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference Exec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference</a>

---

##### `ExecInput`<sup>Optional</sup> <a name="ExecInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.execInput"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec ExecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSecondsInput"></a>

```csharp
public double PeriodSecondsInput { get; }
```

- *Type:* double

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSecondsInput"></a>

```csharp
public double TimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; }
```

- *Type:* double

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.internalValue"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference <a name="VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putEnv">PutEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putGrpcPorts">PutGrpcPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe">PutHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putPorts">PutPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe">PutStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetDeploymentTimeout">ResetDeploymentTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetGrpcPorts">ResetGrpcPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthProbe">ResetHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthRoute">ResetHealthRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPredictRoute">ResetPredictRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetSharedMemorySizeMb">ResetSharedMemorySizeMb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetStartupProbe">ResetStartupProbe</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnv` <a name="PutEnv" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putEnv"></a>

```csharp
private void PutEnv(IResolvable|VertexAiTrainingPipelineModelToUploadContainerSpecEnv[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putEnv.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>[]

---

##### `PutGrpcPorts` <a name="PutGrpcPorts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putGrpcPorts"></a>

```csharp
private void PutGrpcPorts(IResolvable|VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putGrpcPorts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>[]

---

##### `PutHealthProbe` <a name="PutHealthProbe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe"></a>

```csharp
private void PutHealthProbe(VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

---

##### `PutPorts` <a name="PutPorts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putPorts"></a>

```csharp
private void PutPorts(IResolvable|VertexAiTrainingPipelineModelToUploadContainerSpecPorts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putPorts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>[]

---

##### `PutStartupProbe` <a name="PutStartupProbe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe"></a>

```csharp
private void PutStartupProbe(VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetDeploymentTimeout` <a name="ResetDeploymentTimeout" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetDeploymentTimeout"></a>

```csharp
private void ResetDeploymentTimeout()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetEnv"></a>

```csharp
private void ResetEnv()
```

##### `ResetGrpcPorts` <a name="ResetGrpcPorts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetGrpcPorts"></a>

```csharp
private void ResetGrpcPorts()
```

##### `ResetHealthProbe` <a name="ResetHealthProbe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthProbe"></a>

```csharp
private void ResetHealthProbe()
```

##### `ResetHealthRoute` <a name="ResetHealthRoute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthRoute"></a>

```csharp
private void ResetHealthRoute()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPorts"></a>

```csharp
private void ResetPorts()
```

##### `ResetPredictRoute` <a name="ResetPredictRoute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPredictRoute"></a>

```csharp
private void ResetPredictRoute()
```

##### `ResetSharedMemorySizeMb` <a name="ResetSharedMemorySizeMb" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetSharedMemorySizeMb"></a>

```csharp
private void ResetSharedMemorySizeMb()
```

##### `ResetStartupProbe` <a name="ResetStartupProbe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetStartupProbe"></a>

```csharp
private void ResetStartupProbe()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.env">Env</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList">VertexAiTrainingPipelineModelToUploadContainerSpecEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPorts">GrpcPorts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbe">HealthProbe</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.ports">Ports</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList">VertexAiTrainingPipelineModelToUploadContainerSpecPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbe">StartupProbe</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeoutInput">DeploymentTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.envInput">EnvInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPortsInput">GrpcPortsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbeInput">HealthProbeInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRouteInput">HealthRouteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.portsInput">PortsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRouteInput">PredictRouteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMbInput">SharedMemorySizeMbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbeInput">StartupProbeInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeout">DeploymentTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRoute">HealthRoute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUri">ImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRoute">PredictRoute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMb">SharedMemorySizeMb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec">VertexAiTrainingPipelineModelToUploadContainerSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.env"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadContainerSpecEnvList Env { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList">VertexAiTrainingPipelineModelToUploadContainerSpecEnvList</a>

---

##### `GrpcPorts`<sup>Required</sup> <a name="GrpcPorts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPorts"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList GrpcPorts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList</a>

---

##### `HealthProbe`<sup>Required</sup> <a name="HealthProbe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbe"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference HealthProbe { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference</a>

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.ports"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadContainerSpecPortsList Ports { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList">VertexAiTrainingPipelineModelToUploadContainerSpecPortsList</a>

---

##### `StartupProbe`<sup>Required</sup> <a name="StartupProbe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbe"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference StartupProbe { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `DeploymentTimeoutInput`<sup>Optional</sup> <a name="DeploymentTimeoutInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeoutInput"></a>

```csharp
public string DeploymentTimeoutInput { get; }
```

- *Type:* string

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.envInput"></a>

```csharp
public IResolvable|VertexAiTrainingPipelineModelToUploadContainerSpecEnv[] EnvInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>[]

---

##### `GrpcPortsInput`<sup>Optional</sup> <a name="GrpcPortsInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPortsInput"></a>

```csharp
public IResolvable|VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts[] GrpcPortsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>[]

---

##### `HealthProbeInput`<sup>Optional</sup> <a name="HealthProbeInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbeInput"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe HealthProbeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

---

##### `HealthRouteInput`<sup>Optional</sup> <a name="HealthRouteInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRouteInput"></a>

```csharp
public string HealthRouteInput { get; }
```

- *Type:* string

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUriInput"></a>

```csharp
public string ImageUriInput { get; }
```

- *Type:* string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.portsInput"></a>

```csharp
public IResolvable|VertexAiTrainingPipelineModelToUploadContainerSpecPorts[] PortsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>[]

---

##### `PredictRouteInput`<sup>Optional</sup> <a name="PredictRouteInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRouteInput"></a>

```csharp
public string PredictRouteInput { get; }
```

- *Type:* string

---

##### `SharedMemorySizeMbInput`<sup>Optional</sup> <a name="SharedMemorySizeMbInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMbInput"></a>

```csharp
public string SharedMemorySizeMbInput { get; }
```

- *Type:* string

---

##### `StartupProbeInput`<sup>Optional</sup> <a name="StartupProbeInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbeInput"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe StartupProbeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `DeploymentTimeout`<sup>Required</sup> <a name="DeploymentTimeout" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeout"></a>

```csharp
public string DeploymentTimeout { get; }
```

- *Type:* string

---

##### `HealthRoute`<sup>Required</sup> <a name="HealthRoute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRoute"></a>

```csharp
public string HealthRoute { get; }
```

- *Type:* string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUri"></a>

```csharp
public string ImageUri { get; }
```

- *Type:* string

---

##### `PredictRoute`<sup>Required</sup> <a name="PredictRoute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRoute"></a>

```csharp
public string PredictRoute { get; }
```

- *Type:* string

---

##### `SharedMemorySizeMb`<sup>Required</sup> <a name="SharedMemorySizeMb" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMb"></a>

```csharp
public string SharedMemorySizeMb { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.internalValue"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadContainerSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec">VertexAiTrainingPipelineModelToUploadContainerSpec</a>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecPortsList <a name="VertexAiTrainingPipelineModelToUploadContainerSpecPortsList" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUploadContainerSpecPortsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.get"></a>

```csharp
private VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.internalValue"></a>

```csharp
public IResolvable|VertexAiTrainingPipelineModelToUploadContainerSpecPorts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>[]

---


### VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference <a name="VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPortInput">ContainerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPort">ContainerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerPortInput`<sup>Optional</sup> <a name="ContainerPortInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPortInput"></a>

```csharp
public double ContainerPortInput { get; }
```

- *Type:* double

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPort"></a>

```csharp
public double ContainerPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiTrainingPipelineModelToUploadContainerSpecPorts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference <a name="VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.internalValue"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference <a name="VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.putExec">PutExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetExec">ResetExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetPeriodSeconds">ResetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExec` <a name="PutExec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.putExec"></a>

```csharp
private void PutExec(VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.putExec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

---

##### `ResetExec` <a name="ResetExec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetExec"></a>

```csharp
private void ResetExec()
```

##### `ResetPeriodSeconds` <a name="ResetPeriodSeconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetPeriodSeconds"></a>

```csharp
private void ResetPeriodSeconds()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetTimeoutSeconds"></a>

```csharp
private void ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.exec">Exec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.execInput">ExecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Exec`<sup>Required</sup> <a name="Exec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.exec"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference Exec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference</a>

---

##### `ExecInput`<sup>Optional</sup> <a name="ExecInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.execInput"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec ExecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSecondsInput"></a>

```csharp
public double PeriodSecondsInput { get; }
```

- *Type:* double

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSecondsInput"></a>

```csharp
public double TimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; }
```

- *Type:* double

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.internalValue"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

---


### VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference <a name="VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec">VertexAiTrainingPipelineModelToUploadEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.internalValue"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadEncryptionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec">VertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

---


### VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference <a name="VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadataInput">MetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec">VertexAiTrainingPipelineModelToUploadExplanationSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadataInput"></a>

```csharp
public string MetadataInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.internalValue"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadExplanationSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec">VertexAiTrainingPipelineModelToUploadExplanationSpec</a>

---


### VertexAiTrainingPipelineModelToUploadOutputReference <a name="VertexAiTrainingPipelineModelToUploadOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineModelToUploadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec">PutContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putExplanationSpec">PutExplanationSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetArtifactUri">ResetArtifactUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetContainerSpec">ResetContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetExplanationSpec">ResetExplanationSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetVersionAliases">ResetVersionAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetVersionDescription">ResetVersionDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerSpec` <a name="PutContainerSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec"></a>

```csharp
private void PutContainerSpec(VertexAiTrainingPipelineModelToUploadContainerSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec">VertexAiTrainingPipelineModelToUploadContainerSpec</a>

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putEncryptionSpec"></a>

```csharp
private void PutEncryptionSpec(VertexAiTrainingPipelineModelToUploadEncryptionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec">VertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

---

##### `PutExplanationSpec` <a name="PutExplanationSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putExplanationSpec"></a>

```csharp
private void PutExplanationSpec(VertexAiTrainingPipelineModelToUploadExplanationSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putExplanationSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec">VertexAiTrainingPipelineModelToUploadExplanationSpec</a>

---

##### `ResetArtifactUri` <a name="ResetArtifactUri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetArtifactUri"></a>

```csharp
private void ResetArtifactUri()
```

##### `ResetContainerSpec` <a name="ResetContainerSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetContainerSpec"></a>

```csharp
private void ResetContainerSpec()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetEncryptionSpec"></a>

```csharp
private void ResetEncryptionSpec()
```

##### `ResetExplanationSpec` <a name="ResetExplanationSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetExplanationSpec"></a>

```csharp
private void ResetExplanationSpec()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetVersionAliases` <a name="ResetVersionAliases" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetVersionAliases"></a>

```csharp
private void ResetVersionAliases()
```

##### `ResetVersionDescription` <a name="ResetVersionDescription" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetVersionDescription"></a>

```csharp
private void ResetVersionDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpec">ContainerSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference">VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpec">ExplanationSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference">VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUriInput">ArtifactUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpecInput">ContainerSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec">VertexAiTrainingPipelineModelToUploadContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec">VertexAiTrainingPipelineModelToUploadEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpecInput">ExplanationSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec">VertexAiTrainingPipelineModelToUploadExplanationSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliasesInput">VersionAliasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescriptionInput">VersionDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUri">ArtifactUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliases">VersionAliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescription">VersionDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload">VertexAiTrainingPipelineModelToUpload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerSpec`<sup>Required</sup> <a name="ContainerSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpec"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference ContainerSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference</a>

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpec"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference EncryptionSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference">VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference</a>

---

##### `ExplanationSpec`<sup>Required</sup> <a name="ExplanationSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpec"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference ExplanationSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference">VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ArtifactUriInput`<sup>Optional</sup> <a name="ArtifactUriInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUriInput"></a>

```csharp
public string ArtifactUriInput { get; }
```

- *Type:* string

---

##### `ContainerSpecInput`<sup>Optional</sup> <a name="ContainerSpecInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpecInput"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadContainerSpec ContainerSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec">VertexAiTrainingPipelineModelToUploadContainerSpec</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpecInput"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadEncryptionSpec EncryptionSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec">VertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

---

##### `ExplanationSpecInput`<sup>Optional</sup> <a name="ExplanationSpecInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpecInput"></a>

```csharp
public VertexAiTrainingPipelineModelToUploadExplanationSpec ExplanationSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec">VertexAiTrainingPipelineModelToUploadExplanationSpec</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VersionAliasesInput`<sup>Optional</sup> <a name="VersionAliasesInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliasesInput"></a>

```csharp
public string[] VersionAliasesInput { get; }
```

- *Type:* string[]

---

##### `VersionDescriptionInput`<sup>Optional</sup> <a name="VersionDescriptionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescriptionInput"></a>

```csharp
public string VersionDescriptionInput { get; }
```

- *Type:* string

---

##### `ArtifactUri`<sup>Required</sup> <a name="ArtifactUri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUri"></a>

```csharp
public string ArtifactUri { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VersionAliases`<sup>Required</sup> <a name="VersionAliases" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliases"></a>

```csharp
public string[] VersionAliases { get; }
```

- *Type:* string[]

---

##### `VersionDescription`<sup>Required</sup> <a name="VersionDescription" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescription"></a>

```csharp
public string VersionDescription { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.internalValue"></a>

```csharp
public VertexAiTrainingPipelineModelToUpload InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload">VertexAiTrainingPipelineModelToUpload</a>

---


### VertexAiTrainingPipelineTimeoutsOutputReference <a name="VertexAiTrainingPipelineTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiTrainingPipelineTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts">VertexAiTrainingPipelineTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiTrainingPipelineTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts">VertexAiTrainingPipelineTimeouts</a>

---



