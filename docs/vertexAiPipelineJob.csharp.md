# `vertexAiPipelineJob` Submodule <a name="`vertexAiPipelineJob` Submodule" id="@cdktn/provider-google.vertexAiPipelineJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiPipelineJob <a name="VertexAiPipelineJob" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job google_vertex_ai_pipeline_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJob(Construct Scope, string Id, VertexAiPipelineJobConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig">VertexAiPipelineJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig">VertexAiPipelineJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.putPscInterfaceConfig">PutPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.putRuntimeConfig">PutRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetPipelineJobId">ResetPipelineJobId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetPipelineSpec">ResetPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetPreflightValidations">ResetPreflightValidations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetPscInterfaceConfig">ResetPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetReservedIpRanges">ResetReservedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetRuntimeConfig">ResetRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetTemplateUri">ResetTemplateUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.putEncryptionSpec"></a>

```csharp
private void PutEncryptionSpec(VertexAiPipelineJobEncryptionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpec">VertexAiPipelineJobEncryptionSpec</a>

---

##### `PutPscInterfaceConfig` <a name="PutPscInterfaceConfig" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.putPscInterfaceConfig"></a>

```csharp
private void PutPscInterfaceConfig(VertexAiPipelineJobPscInterfaceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.putPscInterfaceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfig">VertexAiPipelineJobPscInterfaceConfig</a>

---

##### `PutRuntimeConfig` <a name="PutRuntimeConfig" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.putRuntimeConfig"></a>

```csharp
private void PutRuntimeConfig(VertexAiPipelineJobRuntimeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.putRuntimeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfig">VertexAiPipelineJobRuntimeConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.putTimeouts"></a>

```csharp
private void PutTimeouts(VertexAiPipelineJobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeouts">VertexAiPipelineJobTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetEncryptionSpec"></a>

```csharp
private void ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetPipelineJobId` <a name="ResetPipelineJobId" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetPipelineJobId"></a>

```csharp
private void ResetPipelineJobId()
```

##### `ResetPipelineSpec` <a name="ResetPipelineSpec" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetPipelineSpec"></a>

```csharp
private void ResetPipelineSpec()
```

##### `ResetPreflightValidations` <a name="ResetPreflightValidations" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetPreflightValidations"></a>

```csharp
private void ResetPreflightValidations()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPscInterfaceConfig` <a name="ResetPscInterfaceConfig" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetPscInterfaceConfig"></a>

```csharp
private void ResetPscInterfaceConfig()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetReservedIpRanges` <a name="ResetReservedIpRanges" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetReservedIpRanges"></a>

```csharp
private void ResetReservedIpRanges()
```

##### `ResetRuntimeConfig` <a name="ResetRuntimeConfig" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetRuntimeConfig"></a>

```csharp
private void ResetRuntimeConfig()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetTemplateUri` <a name="ResetTemplateUri" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetTemplateUri"></a>

```csharp
private void ResetTemplateUri()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiPipelineJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiPipelineJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiPipelineJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiPipelineJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiPipelineJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VertexAiPipelineJob resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VertexAiPipelineJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VertexAiPipelineJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiPipelineJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference">VertexAiPipelineJobEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList">VertexAiPipelineJobErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.jobDetail">JobDetail</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList">VertexAiPipelineJobJobDetailList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.pscInterfaceConfig">PscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference">VertexAiPipelineJobPscInterfaceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference">VertexAiPipelineJobRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.scheduleName">ScheduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.templateMetadata">TemplateMetadata</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList">VertexAiPipelineJobTemplateMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference">VertexAiPipelineJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpec">VertexAiPipelineJobEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.pipelineJobIdInput">PipelineJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.pipelineSpecInput">PipelineSpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.preflightValidationsInput">PreflightValidationsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.pscInterfaceConfigInput">PscInterfaceConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfig">VertexAiPipelineJobPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.reservedIpRangesInput">ReservedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.runtimeConfigInput">RuntimeConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfig">VertexAiPipelineJobRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.templateUriInput">TemplateUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeouts">VertexAiPipelineJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.pipelineJobId">PipelineJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.pipelineSpec">PipelineSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.preflightValidations">PreflightValidations</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.reservedIpRanges">ReservedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.templateUri">TemplateUri</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.encryptionSpec"></a>

```csharp
public VertexAiPipelineJobEncryptionSpecOutputReference EncryptionSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference">VertexAiPipelineJobEncryptionSpecOutputReference</a>

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.error"></a>

```csharp
public VertexAiPipelineJobErrorList Error { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList">VertexAiPipelineJobErrorList</a>

---

##### `JobDetail`<sup>Required</sup> <a name="JobDetail" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.jobDetail"></a>

```csharp
public VertexAiPipelineJobJobDetailList JobDetail { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList">VertexAiPipelineJobJobDetailList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PscInterfaceConfig`<sup>Required</sup> <a name="PscInterfaceConfig" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.pscInterfaceConfig"></a>

```csharp
public VertexAiPipelineJobPscInterfaceConfigOutputReference PscInterfaceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference">VertexAiPipelineJobPscInterfaceConfigOutputReference</a>

---

##### `RuntimeConfig`<sup>Required</sup> <a name="RuntimeConfig" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.runtimeConfig"></a>

```csharp
public VertexAiPipelineJobRuntimeConfigOutputReference RuntimeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference">VertexAiPipelineJobRuntimeConfigOutputReference</a>

---

##### `ScheduleName`<sup>Required</sup> <a name="ScheduleName" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.scheduleName"></a>

```csharp
public string ScheduleName { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TemplateMetadata`<sup>Required</sup> <a name="TemplateMetadata" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.templateMetadata"></a>

```csharp
public VertexAiPipelineJobTemplateMetadataList TemplateMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList">VertexAiPipelineJobTemplateMetadataList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.timeouts"></a>

```csharp
public VertexAiPipelineJobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference">VertexAiPipelineJobTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.encryptionSpecInput"></a>

```csharp
public VertexAiPipelineJobEncryptionSpec EncryptionSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpec">VertexAiPipelineJobEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `PipelineJobIdInput`<sup>Optional</sup> <a name="PipelineJobIdInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.pipelineJobIdInput"></a>

```csharp
public string PipelineJobIdInput { get; }
```

- *Type:* string

---

##### `PipelineSpecInput`<sup>Optional</sup> <a name="PipelineSpecInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.pipelineSpecInput"></a>

```csharp
public string PipelineSpecInput { get; }
```

- *Type:* string

---

##### `PreflightValidationsInput`<sup>Optional</sup> <a name="PreflightValidationsInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.preflightValidationsInput"></a>

```csharp
public bool|IResolvable PreflightValidationsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PscInterfaceConfigInput`<sup>Optional</sup> <a name="PscInterfaceConfigInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.pscInterfaceConfigInput"></a>

```csharp
public VertexAiPipelineJobPscInterfaceConfig PscInterfaceConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfig">VertexAiPipelineJobPscInterfaceConfig</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ReservedIpRangesInput`<sup>Optional</sup> <a name="ReservedIpRangesInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.reservedIpRangesInput"></a>

```csharp
public string[] ReservedIpRangesInput { get; }
```

- *Type:* string[]

---

##### `RuntimeConfigInput`<sup>Optional</sup> <a name="RuntimeConfigInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.runtimeConfigInput"></a>

```csharp
public VertexAiPipelineJobRuntimeConfig RuntimeConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfig">VertexAiPipelineJobRuntimeConfig</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `TemplateUriInput`<sup>Optional</sup> <a name="TemplateUriInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.templateUriInput"></a>

```csharp
public string TemplateUriInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.timeoutsInput"></a>

```csharp
public IResolvable|VertexAiPipelineJobTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeouts">VertexAiPipelineJobTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `PipelineJobId`<sup>Required</sup> <a name="PipelineJobId" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.pipelineJobId"></a>

```csharp
public string PipelineJobId { get; }
```

- *Type:* string

---

##### `PipelineSpec`<sup>Required</sup> <a name="PipelineSpec" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.pipelineSpec"></a>

```csharp
public string PipelineSpec { get; }
```

- *Type:* string

---

##### `PreflightValidations`<sup>Required</sup> <a name="PreflightValidations" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.preflightValidations"></a>

```csharp
public bool|IResolvable PreflightValidations { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ReservedIpRanges`<sup>Required</sup> <a name="ReservedIpRanges" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.reservedIpRanges"></a>

```csharp
public string[] ReservedIpRanges { get; }
```

- *Type:* string[]

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `TemplateUri`<sup>Required</sup> <a name="TemplateUri" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.templateUri"></a>

```csharp
public string TemplateUri { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiPipelineJobConfig <a name="VertexAiPipelineJobConfig" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DeletionPolicy = null,
    string DisplayName = null,
    VertexAiPipelineJobEncryptionSpec EncryptionSpec = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Network = null,
    string PipelineJobId = null,
    string PipelineSpec = null,
    bool|IResolvable PreflightValidations = null,
    string Project = null,
    VertexAiPipelineJobPscInterfaceConfig PscInterfaceConfig = null,
    string Region = null,
    string[] ReservedIpRanges = null,
    VertexAiPipelineJobRuntimeConfig RuntimeConfig = null,
    string ServiceAccount = null,
    string TemplateUri = null,
    VertexAiPipelineJobTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_pipeline_job.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the Pipeline. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpec">VertexAiPipelineJobEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#id VertexAiPipelineJob#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels with user-defined metadata to organize PipelineJob. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.network">Network</a></code> | <code>string</code> | The full name of the Compute Engine network to which the Pipeline Job's workload should be peered. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.pipelineJobId">PipelineJobId</a></code> | <code>string</code> | The ID to use for the PipelineJob, which will become the final component of the PipelineJob name. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.pipelineSpec">PipelineSpec</a></code> | <code>string</code> | The spec of the pipeline. This is a JSON object that describes the pipeline. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.preflightValidations">PreflightValidations</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to do component level validations before job creation. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#project VertexAiPipelineJob#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.pscInterfaceConfig">PscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfig">VertexAiPipelineJobPscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.region">Region</a></code> | <code>string</code> | The region of the pipeline job. eg us-central1. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.reservedIpRanges">ReservedIpRanges</a></code> | <code>string[]</code> | A list of names for the reserved ip ranges under the VPC network that can be used for this Pipeline Job's workload. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfig">VertexAiPipelineJobRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | The service account that the pipeline workload runs as. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.templateUri">TemplateUri</a></code> | <code>string</code> | A template uri from where the PipelineJob.pipeline_spec, if empty, will be downloaded. Currently, only uri from Vertex Template Registry & Gallery is supported. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeouts">VertexAiPipelineJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_pipeline_job.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#deletion_policy VertexAiPipelineJob#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the Pipeline.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#display_name VertexAiPipelineJob#display_name}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.encryptionSpec"></a>

```csharp
public VertexAiPipelineJobEncryptionSpec EncryptionSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpec">VertexAiPipelineJobEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#encryption_spec VertexAiPipelineJob#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#id VertexAiPipelineJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels with user-defined metadata to organize PipelineJob.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#labels VertexAiPipelineJob#labels}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The full name of the Compute Engine network to which the Pipeline Job's workload should be peered.

For example, 'projects/12345/global/networks/myVPC'. Format is of the form 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is a network name. Private services access must already be configured for the network. Pipeline job will apply the network configuration to the Google Cloud resources being launched, if applied, such as Vertex AI Training or Dataflow job. If left unspecified, the workload is not peered with any network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#network VertexAiPipelineJob#network}

---

##### `PipelineJobId`<sup>Optional</sup> <a name="PipelineJobId" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.pipelineJobId"></a>

```csharp
public string PipelineJobId { get; set; }
```

- *Type:* string

The ID to use for the PipelineJob, which will become the final component of the PipelineJob name.

If not provided, an ID will be automatically generated.
This value should be less than 128 characters, and valid characters are '/[a-z][0-9]-/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#pipeline_job_id VertexAiPipelineJob#pipeline_job_id}

---

##### `PipelineSpec`<sup>Optional</sup> <a name="PipelineSpec" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.pipelineSpec"></a>

```csharp
public string PipelineSpec { get; set; }
```

- *Type:* string

The spec of the pipeline. This is a JSON object that describes the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#pipeline_spec VertexAiPipelineJob#pipeline_spec}

---

##### `PreflightValidations`<sup>Optional</sup> <a name="PreflightValidations" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.preflightValidations"></a>

```csharp
public bool|IResolvable PreflightValidations { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to do component level validations before job creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#preflight_validations VertexAiPipelineJob#preflight_validations}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#project VertexAiPipelineJob#project}.

---

##### `PscInterfaceConfig`<sup>Optional</sup> <a name="PscInterfaceConfig" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.pscInterfaceConfig"></a>

```csharp
public VertexAiPipelineJobPscInterfaceConfig PscInterfaceConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfig">VertexAiPipelineJobPscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#psc_interface_config VertexAiPipelineJob#psc_interface_config}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the pipeline job. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#region VertexAiPipelineJob#region}

---

##### `ReservedIpRanges`<sup>Optional</sup> <a name="ReservedIpRanges" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.reservedIpRanges"></a>

```csharp
public string[] ReservedIpRanges { get; set; }
```

- *Type:* string[]

A list of names for the reserved ip ranges under the VPC network that can be used for this Pipeline Job's workload.

If set, we will deploy the Pipeline Job's workload within the provided ip ranges. Otherwise, the job will be deployed to any ip ranges under the provided VPC network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#reserved_ip_ranges VertexAiPipelineJob#reserved_ip_ranges}

---

##### `RuntimeConfig`<sup>Optional</sup> <a name="RuntimeConfig" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.runtimeConfig"></a>

```csharp
public VertexAiPipelineJobRuntimeConfig RuntimeConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfig">VertexAiPipelineJobRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#runtime_config VertexAiPipelineJob#runtime_config}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

The service account that the pipeline workload runs as.

If not specified, the Compute Engine default service account in the project will be used. Users starting the pipeline must have the iam.serviceAccounts.actAs permission on this service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#service_account VertexAiPipelineJob#service_account}

---

##### `TemplateUri`<sup>Optional</sup> <a name="TemplateUri" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.templateUri"></a>

```csharp
public string TemplateUri { get; set; }
```

- *Type:* string

A template uri from where the PipelineJob.pipeline_spec, if empty, will be downloaded. Currently, only uri from Vertex Template Registry & Gallery is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#template_uri VertexAiPipelineJob#template_uri}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobConfig.property.timeouts"></a>

```csharp
public VertexAiPipelineJobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeouts">VertexAiPipelineJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#timeouts VertexAiPipelineJob#timeouts}

---

### VertexAiPipelineJobEncryptionSpec <a name="VertexAiPipelineJobEncryptionSpec" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobEncryptionSpec {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpec.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource.

Has the form: 'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'. The key needs to be in the same region as where the compute resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#kms_key_name VertexAiPipelineJob#kms_key_name}

---

### VertexAiPipelineJobError <a name="VertexAiPipelineJobError" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobError {

};
```


### VertexAiPipelineJobJobDetail <a name="VertexAiPipelineJobJobDetail" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetail.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobJobDetail {

};
```


### VertexAiPipelineJobJobDetailPipelineContext <a name="VertexAiPipelineJobJobDetailPipelineContext" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContext.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobJobDetailPipelineContext {

};
```


### VertexAiPipelineJobJobDetailPipelineRunContext <a name="VertexAiPipelineJobJobDetailPipelineRunContext" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContext.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobJobDetailPipelineRunContext {

};
```


### VertexAiPipelineJobJobDetailTaskDetails <a name="VertexAiPipelineJobJobDetailTaskDetails" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobJobDetailTaskDetails {

};
```


### VertexAiPipelineJobJobDetailTaskDetailsError <a name="VertexAiPipelineJobJobDetailTaskDetailsError" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobJobDetailTaskDetailsError {

};
```


### VertexAiPipelineJobPscInterfaceConfig <a name="VertexAiPipelineJobPscInterfaceConfig" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobPscInterfaceConfig {
    IResolvable|VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs[] DnsPeeringConfigs = null,
    string NetworkAttachment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfig.property.dnsPeeringConfigs">DnsPeeringConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>[]</code> | dns_peering_configs block. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfig.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | The name of the Compute Engine network attachment to attach to the resource within the region and user project. |

---

##### `DnsPeeringConfigs`<sup>Optional</sup> <a name="DnsPeeringConfigs" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfig.property.dnsPeeringConfigs"></a>

```csharp
public IResolvable|VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs[] DnsPeeringConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>[]

dns_peering_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#dns_peering_configs VertexAiPipelineJob#dns_peering_configs}

---

##### `NetworkAttachment`<sup>Optional</sup> <a name="NetworkAttachment" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfig.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; set; }
```

- *Type:* string

The name of the Compute Engine network attachment to attach to the resource within the region and user project.

To specify this field, you must have already created a network attachment. This field is only used for resources using PSC-I.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#network_attachment VertexAiPipelineJob#network_attachment}

---

### VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs <a name="VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs {
    string Domain,
    string TargetNetwork,
    string TargetProject
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.domain">Domain</a></code> | <code>string</code> | The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork">TargetNetwork</a></code> | <code>string</code> | The VPC network name in the targetProject where the DNS zone specified by domain is visible. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetProject">TargetProject</a></code> | <code>string</code> | The project ID hosting the Cloud DNS managed zone that contains the above domain. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#domain VertexAiPipelineJob#domain}

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork"></a>

```csharp
public string TargetNetwork { get; set; }
```

- *Type:* string

The VPC network name in the targetProject where the DNS zone specified by domain is visible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#target_network VertexAiPipelineJob#target_network}

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetProject"></a>

```csharp
public string TargetProject { get; set; }
```

- *Type:* string

The project ID hosting the Cloud DNS managed zone that contains the above domain.

The Vertex AI Service Agent must be granted the dns.peer role on this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#target_project VertexAiPipelineJob#target_project}

---

### VertexAiPipelineJobRuntimeConfig <a name="VertexAiPipelineJobRuntimeConfig" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobRuntimeConfig {
    string GcsOutputDirectory,
    string FailurePolicy = null,
    IResolvable|VertexAiPipelineJobRuntimeConfigInputArtifacts[] InputArtifacts = null,
    System.Collections.Generic.IDictionary<string, string> ParameterValues = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfig.property.gcsOutputDirectory">GcsOutputDirectory</a></code> | <code>string</code> | A path in a Cloud Storage bucket, which will be treated as the root output directory of the pipeline. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfig.property.failurePolicy">FailurePolicy</a></code> | <code>string</code> | Represents the failure policy of a pipeline. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfig.property.inputArtifacts">InputArtifacts</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifacts">VertexAiPipelineJobRuntimeConfigInputArtifacts</a>[]</code> | input_artifacts block. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfig.property.parameterValues">ParameterValues</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The runtime parameters of the PipelineJob. |

---

##### `GcsOutputDirectory`<sup>Required</sup> <a name="GcsOutputDirectory" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfig.property.gcsOutputDirectory"></a>

```csharp
public string GcsOutputDirectory { get; set; }
```

- *Type:* string

A path in a Cloud Storage bucket, which will be treated as the root output directory of the pipeline.

It is used by the system to generate the paths of output artifacts. The artifact paths are generated with a sub-directory pattern '{job_id}/{task_id}/{output_key}' under the specified output directory. The service account specified in this pipeline must have the 'storage.objects.get' and 'storage.objects.create' permissions for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#gcs_output_directory VertexAiPipelineJob#gcs_output_directory}

---

##### `FailurePolicy`<sup>Optional</sup> <a name="FailurePolicy" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfig.property.failurePolicy"></a>

```csharp
public string FailurePolicy { get; set; }
```

- *Type:* string

Represents the failure policy of a pipeline.

Currently, the default of a pipeline is that the pipeline will continue to run until no more tasks can be executed, also known as 'PIPELINE_FAILURE_POLICY_FAIL_SLOW'. However, if a pipeline is set to 'PIPELINE_FAILURE_POLICY_FAIL_FAST', it will stop scheduling any new tasks as soon as the pipeline fails.
Possible values are: 'PIPELINE_FAILURE_POLICY_UNSPECIFIED', 'PIPELINE_FAILURE_POLICY_FAIL_SLOW', 'PIPELINE_FAILURE_POLICY_FAIL_FAST'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#failure_policy VertexAiPipelineJob#failure_policy}

---

##### `InputArtifacts`<sup>Optional</sup> <a name="InputArtifacts" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfig.property.inputArtifacts"></a>

```csharp
public IResolvable|VertexAiPipelineJobRuntimeConfigInputArtifacts[] InputArtifacts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifacts">VertexAiPipelineJobRuntimeConfigInputArtifacts</a>[]

input_artifacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#input_artifacts VertexAiPipelineJob#input_artifacts}

---

##### `ParameterValues`<sup>Optional</sup> <a name="ParameterValues" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfig.property.parameterValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParameterValues { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The runtime parameters of the PipelineJob.

The parameters will be passed into PipelineJob.pipeline_spec to replace the placeholders at runtime. This field is used by pipelines built using 'PipelineJob.pipeline_spec.schema_version' 2.1.0, such as pipelines built using Kubeflow Pipelines SDK 1.9 or higher and the v2 DSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#parameter_values VertexAiPipelineJob#parameter_values}

---

### VertexAiPipelineJobRuntimeConfigInputArtifacts <a name="VertexAiPipelineJobRuntimeConfigInputArtifacts" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifacts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobRuntimeConfigInputArtifacts {
    string ArtifactId,
    string ArtifactKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifacts.property.artifactId">ArtifactId</a></code> | <code>string</code> | Artifact resource id from MLMD. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifacts.property.artifactKey">ArtifactKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#artifact_key VertexAiPipelineJob#artifact_key}. |

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifacts.property.artifactId"></a>

```csharp
public string ArtifactId { get; set; }
```

- *Type:* string

Artifact resource id from MLMD.

Which is the last portion of an artifact resource name: 'projects/{project}/locations/{location}/metadataStores/default/artifacts/{artifact_id}'. The artifact must be within the same project, location and default metadatastore as the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#artifact_id VertexAiPipelineJob#artifact_id}

---

##### `ArtifactKey`<sup>Required</sup> <a name="ArtifactKey" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifacts.property.artifactKey"></a>

```csharp
public string ArtifactKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#artifact_key VertexAiPipelineJob#artifact_key}.

---

### VertexAiPipelineJobTemplateMetadata <a name="VertexAiPipelineJobTemplateMetadata" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobTemplateMetadata {

};
```


### VertexAiPipelineJobTimeouts <a name="VertexAiPipelineJobTimeouts" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#create VertexAiPipelineJob#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#delete VertexAiPipelineJob#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#update VertexAiPipelineJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#create VertexAiPipelineJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#delete VertexAiPipelineJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#update VertexAiPipelineJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiPipelineJobEncryptionSpecOutputReference <a name="VertexAiPipelineJobEncryptionSpecOutputReference" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobEncryptionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpec">VertexAiPipelineJobEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpecOutputReference.property.internalValue"></a>

```csharp
public VertexAiPipelineJobEncryptionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobEncryptionSpec">VertexAiPipelineJobEncryptionSpec</a>

---


### VertexAiPipelineJobErrorList <a name="VertexAiPipelineJobErrorList" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList.get"></a>

```csharp
private VertexAiPipelineJobErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiPipelineJobErrorOutputReference <a name="VertexAiPipelineJobErrorOutputReference" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.property.details">Details</a></code> | <code>Io.Cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobError">VertexAiPipelineJobError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.property.details"></a>

```csharp
public StringMapList Details { get; }
```

- *Type:* Io.Cdktn.StringMapList

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobErrorOutputReference.property.internalValue"></a>

```csharp
public VertexAiPipelineJobError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobError">VertexAiPipelineJobError</a>

---


### VertexAiPipelineJobJobDetailList <a name="VertexAiPipelineJobJobDetailList" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobJobDetailList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList.get"></a>

```csharp
private VertexAiPipelineJobJobDetailOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiPipelineJobJobDetailOutputReference <a name="VertexAiPipelineJobJobDetailOutputReference" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobJobDetailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.property.pipelineContext">PipelineContext</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList">VertexAiPipelineJobJobDetailPipelineContextList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.property.pipelineRunContext">PipelineRunContext</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList">VertexAiPipelineJobJobDetailPipelineRunContextList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.property.taskDetails">TaskDetails</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList">VertexAiPipelineJobJobDetailTaskDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetail">VertexAiPipelineJobJobDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PipelineContext`<sup>Required</sup> <a name="PipelineContext" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.property.pipelineContext"></a>

```csharp
public VertexAiPipelineJobJobDetailPipelineContextList PipelineContext { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList">VertexAiPipelineJobJobDetailPipelineContextList</a>

---

##### `PipelineRunContext`<sup>Required</sup> <a name="PipelineRunContext" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.property.pipelineRunContext"></a>

```csharp
public VertexAiPipelineJobJobDetailPipelineRunContextList PipelineRunContext { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList">VertexAiPipelineJobJobDetailPipelineRunContextList</a>

---

##### `TaskDetails`<sup>Required</sup> <a name="TaskDetails" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.property.taskDetails"></a>

```csharp
public VertexAiPipelineJobJobDetailTaskDetailsList TaskDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList">VertexAiPipelineJobJobDetailTaskDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailOutputReference.property.internalValue"></a>

```csharp
public VertexAiPipelineJobJobDetail InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetail">VertexAiPipelineJobJobDetail</a>

---


### VertexAiPipelineJobJobDetailPipelineContextList <a name="VertexAiPipelineJobJobDetailPipelineContextList" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobJobDetailPipelineContextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList.get"></a>

```csharp
private VertexAiPipelineJobJobDetailPipelineContextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiPipelineJobJobDetailPipelineContextOutputReference <a name="VertexAiPipelineJobJobDetailPipelineContextOutputReference" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobJobDetailPipelineContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.labels">Labels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.parentContexts">ParentContexts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.schemaTitle">SchemaTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.schemaVersion">SchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContext">VertexAiPipelineJobJobDetailPipelineContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentContexts`<sup>Required</sup> <a name="ParentContexts" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.parentContexts"></a>

```csharp
public string[] ParentContexts { get; }
```

- *Type:* string[]

---

##### `SchemaTitle`<sup>Required</sup> <a name="SchemaTitle" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.schemaTitle"></a>

```csharp
public string SchemaTitle { get; }
```

- *Type:* string

---

##### `SchemaVersion`<sup>Required</sup> <a name="SchemaVersion" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.schemaVersion"></a>

```csharp
public string SchemaVersion { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContextOutputReference.property.internalValue"></a>

```csharp
public VertexAiPipelineJobJobDetailPipelineContext InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineContext">VertexAiPipelineJobJobDetailPipelineContext</a>

---


### VertexAiPipelineJobJobDetailPipelineRunContextList <a name="VertexAiPipelineJobJobDetailPipelineRunContextList" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobJobDetailPipelineRunContextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList.get"></a>

```csharp
private VertexAiPipelineJobJobDetailPipelineRunContextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiPipelineJobJobDetailPipelineRunContextOutputReference <a name="VertexAiPipelineJobJobDetailPipelineRunContextOutputReference" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobJobDetailPipelineRunContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.labels">Labels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.parentContexts">ParentContexts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.schemaTitle">SchemaTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.schemaVersion">SchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContext">VertexAiPipelineJobJobDetailPipelineRunContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentContexts`<sup>Required</sup> <a name="ParentContexts" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.parentContexts"></a>

```csharp
public string[] ParentContexts { get; }
```

- *Type:* string[]

---

##### `SchemaTitle`<sup>Required</sup> <a name="SchemaTitle" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.schemaTitle"></a>

```csharp
public string SchemaTitle { get; }
```

- *Type:* string

---

##### `SchemaVersion`<sup>Required</sup> <a name="SchemaVersion" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.schemaVersion"></a>

```csharp
public string SchemaVersion { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.internalValue"></a>

```csharp
public VertexAiPipelineJobJobDetailPipelineRunContext InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailPipelineRunContext">VertexAiPipelineJobJobDetailPipelineRunContext</a>

---


### VertexAiPipelineJobJobDetailTaskDetailsErrorList <a name="VertexAiPipelineJobJobDetailTaskDetailsErrorList" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobJobDetailTaskDetailsErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList.get"></a>

```csharp
private VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference <a name="VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsError">VertexAiPipelineJobJobDetailTaskDetailsError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.internalValue"></a>

```csharp
public VertexAiPipelineJobJobDetailTaskDetailsError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsError">VertexAiPipelineJobJobDetailTaskDetailsError</a>

---


### VertexAiPipelineJobJobDetailTaskDetailsList <a name="VertexAiPipelineJobJobDetailTaskDetailsList" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobJobDetailTaskDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList.get"></a>

```csharp
private VertexAiPipelineJobJobDetailTaskDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiPipelineJobJobDetailTaskDetailsOutputReference <a name="VertexAiPipelineJobJobDetailTaskDetailsOutputReference" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobJobDetailTaskDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList">VertexAiPipelineJobJobDetailTaskDetailsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.parentTaskId">ParentTaskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskId">TaskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskName">TaskName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskUniqueName">TaskUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetails">VertexAiPipelineJobJobDetailTaskDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.error"></a>

```csharp
public VertexAiPipelineJobJobDetailTaskDetailsErrorList Error { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsErrorList">VertexAiPipelineJobJobDetailTaskDetailsErrorList</a>

---

##### `ParentTaskId`<sup>Required</sup> <a name="ParentTaskId" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.parentTaskId"></a>

```csharp
public string ParentTaskId { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TaskId`<sup>Required</sup> <a name="TaskId" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskId"></a>

```csharp
public string TaskId { get; }
```

- *Type:* string

---

##### `TaskName`<sup>Required</sup> <a name="TaskName" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskName"></a>

```csharp
public string TaskName { get; }
```

- *Type:* string

---

##### `TaskUniqueName`<sup>Required</sup> <a name="TaskUniqueName" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskUniqueName"></a>

```csharp
public string TaskUniqueName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.internalValue"></a>

```csharp
public VertexAiPipelineJobJobDetailTaskDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobJobDetailTaskDetails">VertexAiPipelineJobJobDetailTaskDetails</a>

---


### VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList <a name="VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.get"></a>

```csharp
private VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.internalValue"></a>

```csharp
public IResolvable|VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>[]

---


### VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference <a name="VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput">TargetNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput">TargetProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork">TargetNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject">TargetProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `TargetNetworkInput`<sup>Optional</sup> <a name="TargetNetworkInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput"></a>

```csharp
public string TargetNetworkInput { get; }
```

- *Type:* string

---

##### `TargetProjectInput`<sup>Optional</sup> <a name="TargetProjectInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput"></a>

```csharp
public string TargetProjectInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork"></a>

```csharp
public string TargetNetwork { get; }
```

- *Type:* string

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject"></a>

```csharp
public string TargetProject { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>

---


### VertexAiPipelineJobPscInterfaceConfigOutputReference <a name="VertexAiPipelineJobPscInterfaceConfigOutputReference" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobPscInterfaceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.putDnsPeeringConfigs">PutDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.resetDnsPeeringConfigs">ResetDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.resetNetworkAttachment">ResetNetworkAttachment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDnsPeeringConfigs` <a name="PutDnsPeeringConfigs" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.putDnsPeeringConfigs"></a>

```csharp
private void PutDnsPeeringConfigs(IResolvable|VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.putDnsPeeringConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>[]

---

##### `ResetDnsPeeringConfigs` <a name="ResetDnsPeeringConfigs" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.resetDnsPeeringConfigs"></a>

```csharp
private void ResetDnsPeeringConfigs()
```

##### `ResetNetworkAttachment` <a name="ResetNetworkAttachment" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.resetNetworkAttachment"></a>

```csharp
private void ResetNetworkAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigs">DnsPeeringConfigs</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList">VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput">DnsPeeringConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfig">VertexAiPipelineJobPscInterfaceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsPeeringConfigs`<sup>Required</sup> <a name="DnsPeeringConfigs" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigs"></a>

```csharp
public VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList DnsPeeringConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList">VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList</a>

---

##### `DnsPeeringConfigsInput`<sup>Optional</sup> <a name="DnsPeeringConfigsInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput"></a>

```csharp
public IResolvable|VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs[] DnsPeeringConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>[]

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.property.networkAttachmentInput"></a>

```csharp
public string NetworkAttachmentInput { get; }
```

- *Type:* string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfigOutputReference.property.internalValue"></a>

```csharp
public VertexAiPipelineJobPscInterfaceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobPscInterfaceConfig">VertexAiPipelineJobPscInterfaceConfig</a>

---


### VertexAiPipelineJobRuntimeConfigInputArtifactsList <a name="VertexAiPipelineJobRuntimeConfigInputArtifactsList" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobRuntimeConfigInputArtifactsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.get"></a>

```csharp
private VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifacts">VertexAiPipelineJobRuntimeConfigInputArtifacts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList.property.internalValue"></a>

```csharp
public IResolvable|VertexAiPipelineJobRuntimeConfigInputArtifacts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifacts">VertexAiPipelineJobRuntimeConfigInputArtifacts</a>[]

---


### VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference <a name="VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactIdInput">ArtifactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactKeyInput">ArtifactKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactId">ArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactKey">ArtifactKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifacts">VertexAiPipelineJobRuntimeConfigInputArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArtifactIdInput`<sup>Optional</sup> <a name="ArtifactIdInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactIdInput"></a>

```csharp
public string ArtifactIdInput { get; }
```

- *Type:* string

---

##### `ArtifactKeyInput`<sup>Optional</sup> <a name="ArtifactKeyInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactKeyInput"></a>

```csharp
public string ArtifactKeyInput { get; }
```

- *Type:* string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactId"></a>

```csharp
public string ArtifactId { get; }
```

- *Type:* string

---

##### `ArtifactKey`<sup>Required</sup> <a name="ArtifactKey" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactKey"></a>

```csharp
public string ArtifactKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiPipelineJobRuntimeConfigInputArtifacts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifacts">VertexAiPipelineJobRuntimeConfigInputArtifacts</a>

---


### VertexAiPipelineJobRuntimeConfigOutputReference <a name="VertexAiPipelineJobRuntimeConfigOutputReference" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobRuntimeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.putInputArtifacts">PutInputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.resetFailurePolicy">ResetFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.resetInputArtifacts">ResetInputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.resetParameterValues">ResetParameterValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInputArtifacts` <a name="PutInputArtifacts" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.putInputArtifacts"></a>

```csharp
private void PutInputArtifacts(IResolvable|VertexAiPipelineJobRuntimeConfigInputArtifacts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.putInputArtifacts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifacts">VertexAiPipelineJobRuntimeConfigInputArtifacts</a>[]

---

##### `ResetFailurePolicy` <a name="ResetFailurePolicy" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.resetFailurePolicy"></a>

```csharp
private void ResetFailurePolicy()
```

##### `ResetInputArtifacts` <a name="ResetInputArtifacts" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.resetInputArtifacts"></a>

```csharp
private void ResetInputArtifacts()
```

##### `ResetParameterValues` <a name="ResetParameterValues" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.resetParameterValues"></a>

```csharp
private void ResetParameterValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.property.inputArtifacts">InputArtifacts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList">VertexAiPipelineJobRuntimeConfigInputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.property.failurePolicyInput">FailurePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectoryInput">GcsOutputDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.property.inputArtifactsInput">InputArtifactsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifacts">VertexAiPipelineJobRuntimeConfigInputArtifacts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.property.parameterValuesInput">ParameterValuesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.property.failurePolicy">FailurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectory">GcsOutputDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.property.parameterValues">ParameterValues</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfig">VertexAiPipelineJobRuntimeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputArtifacts`<sup>Required</sup> <a name="InputArtifacts" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.property.inputArtifacts"></a>

```csharp
public VertexAiPipelineJobRuntimeConfigInputArtifactsList InputArtifacts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifactsList">VertexAiPipelineJobRuntimeConfigInputArtifactsList</a>

---

##### `FailurePolicyInput`<sup>Optional</sup> <a name="FailurePolicyInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.property.failurePolicyInput"></a>

```csharp
public string FailurePolicyInput { get; }
```

- *Type:* string

---

##### `GcsOutputDirectoryInput`<sup>Optional</sup> <a name="GcsOutputDirectoryInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectoryInput"></a>

```csharp
public string GcsOutputDirectoryInput { get; }
```

- *Type:* string

---

##### `InputArtifactsInput`<sup>Optional</sup> <a name="InputArtifactsInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.property.inputArtifactsInput"></a>

```csharp
public IResolvable|VertexAiPipelineJobRuntimeConfigInputArtifacts[] InputArtifactsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigInputArtifacts">VertexAiPipelineJobRuntimeConfigInputArtifacts</a>[]

---

##### `ParameterValuesInput`<sup>Optional</sup> <a name="ParameterValuesInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.property.parameterValuesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParameterValuesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FailurePolicy`<sup>Required</sup> <a name="FailurePolicy" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.property.failurePolicy"></a>

```csharp
public string FailurePolicy { get; }
```

- *Type:* string

---

##### `GcsOutputDirectory`<sup>Required</sup> <a name="GcsOutputDirectory" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectory"></a>

```csharp
public string GcsOutputDirectory { get; }
```

- *Type:* string

---

##### `ParameterValues`<sup>Required</sup> <a name="ParameterValues" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.property.parameterValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParameterValues { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfigOutputReference.property.internalValue"></a>

```csharp
public VertexAiPipelineJobRuntimeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobRuntimeConfig">VertexAiPipelineJobRuntimeConfig</a>

---


### VertexAiPipelineJobTemplateMetadataList <a name="VertexAiPipelineJobTemplateMetadataList" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobTemplateMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList.get"></a>

```csharp
private VertexAiPipelineJobTemplateMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiPipelineJobTemplateMetadataOutputReference <a name="VertexAiPipelineJobTemplateMetadataOutputReference" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobTemplateMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadata">VertexAiPipelineJobTemplateMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadataOutputReference.property.internalValue"></a>

```csharp
public VertexAiPipelineJobTemplateMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTemplateMetadata">VertexAiPipelineJobTemplateMetadata</a>

---


### VertexAiPipelineJobTimeoutsOutputReference <a name="VertexAiPipelineJobTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiPipelineJobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeouts">VertexAiPipelineJobTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiPipelineJobTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiPipelineJob.VertexAiPipelineJobTimeouts">VertexAiPipelineJobTimeouts</a>

---



