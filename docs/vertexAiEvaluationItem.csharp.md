# `vertexAiEvaluationItem` Submodule <a name="`vertexAiEvaluationItem` Submodule" id="@cdktn/provider-google.vertexAiEvaluationItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiEvaluationItem <a name="VertexAiEvaluationItem" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item google_vertex_ai_evaluation_item}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItem(Construct Scope, string Id, VertexAiEvaluationItemConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig">VertexAiEvaluationItemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig">VertexAiEvaluationItemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.putEvaluationRequest">PutEvaluationRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetEvaluationRequest">ResetEvaluationRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetGcsUri">ResetGcsUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEvaluationRequest` <a name="PutEvaluationRequest" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.putEvaluationRequest"></a>

```csharp
private void PutEvaluationRequest(VertexAiEvaluationItemEvaluationRequest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.putEvaluationRequest.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest">VertexAiEvaluationItemEvaluationRequest</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.putTimeouts"></a>

```csharp
private void PutTimeouts(VertexAiEvaluationItemTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts">VertexAiEvaluationItemTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetEvaluationRequest` <a name="ResetEvaluationRequest" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetEvaluationRequest"></a>

```csharp
private void ResetEvaluationRequest()
```

##### `ResetGcsUri` <a name="ResetGcsUri" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetGcsUri"></a>

```csharp
private void ResetGcsUri()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiEvaluationItem resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiEvaluationItem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiEvaluationItem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiEvaluationItem.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiEvaluationItem.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VertexAiEvaluationItem resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VertexAiEvaluationItem to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VertexAiEvaluationItem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiEvaluationItem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList">VertexAiEvaluationItemErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationRequest">EvaluationRequest</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference">VertexAiEvaluationItemEvaluationRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationResponse">EvaluationResponse</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList">VertexAiEvaluationItemEvaluationResponseList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference">VertexAiEvaluationItemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationItemTypeInput">EvaluationItemTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationRequestInput">EvaluationRequestInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest">VertexAiEvaluationItemEvaluationRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.gcsUriInput">GcsUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.metadataInput">MetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts">VertexAiEvaluationItemTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationItemType">EvaluationItemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.gcsUri">GcsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.error"></a>

```csharp
public VertexAiEvaluationItemErrorList Error { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList">VertexAiEvaluationItemErrorList</a>

---

##### `EvaluationRequest`<sup>Required</sup> <a name="EvaluationRequest" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationRequest"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestOutputReference EvaluationRequest { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference">VertexAiEvaluationItemEvaluationRequestOutputReference</a>

---

##### `EvaluationResponse`<sup>Required</sup> <a name="EvaluationResponse" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationResponse"></a>

```csharp
public VertexAiEvaluationItemEvaluationResponseList EvaluationResponse { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList">VertexAiEvaluationItemEvaluationResponseList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.timeouts"></a>

```csharp
public VertexAiEvaluationItemTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference">VertexAiEvaluationItemTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EvaluationItemTypeInput`<sup>Optional</sup> <a name="EvaluationItemTypeInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationItemTypeInput"></a>

```csharp
public string EvaluationItemTypeInput { get; }
```

- *Type:* string

---

##### `EvaluationRequestInput`<sup>Optional</sup> <a name="EvaluationRequestInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationRequestInput"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequest EvaluationRequestInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest">VertexAiEvaluationItemEvaluationRequest</a>

---

##### `GcsUriInput`<sup>Optional</sup> <a name="GcsUriInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.gcsUriInput"></a>

```csharp
public string GcsUriInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.metadataInput"></a>

```csharp
public string MetadataInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.timeoutsInput"></a>

```csharp
public IResolvable|VertexAiEvaluationItemTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts">VertexAiEvaluationItemTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EvaluationItemType`<sup>Required</sup> <a name="EvaluationItemType" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationItemType"></a>

```csharp
public string EvaluationItemType { get; }
```

- *Type:* string

---

##### `GcsUri`<sup>Required</sup> <a name="GcsUri" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.gcsUri"></a>

```csharp
public string GcsUri { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiEvaluationItemConfig <a name="VertexAiEvaluationItemConfig" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string EvaluationItemType,
    string Region,
    string DeletionPolicy = null,
    VertexAiEvaluationItemEvaluationRequest EvaluationRequest = null,
    string GcsUri = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Metadata = null,
    string Project = null,
    VertexAiEvaluationItemTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The user-friendly display name for the EvaluationItem. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.evaluationItemType">EvaluationItemType</a></code> | <code>string</code> | The type of the EvaluationItem. Possible values: ["REQUEST", "RESULT"]. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.region">Region</a></code> | <code>string</code> | The region of the EvaluationItem. eg us-central1. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.evaluationRequest">EvaluationRequest</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest">VertexAiEvaluationItemEvaluationRequest</a></code> | evaluation_request block. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.gcsUri">GcsUri</a></code> | <code>string</code> | The Cloud Storage object where the request or response is stored. Exactly one of 'evaluation_request' or 'gcs_uri' can be set. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#id VertexAiEvaluationItem#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels for the EvaluationItem. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.metadata">Metadata</a></code> | <code>string</code> | User-defined metadata for this evaluation item as a JSON string. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#project VertexAiEvaluationItem#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts">VertexAiEvaluationItemTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The user-friendly display name for the EvaluationItem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#display_name VertexAiEvaluationItem#display_name}

---

##### `EvaluationItemType`<sup>Required</sup> <a name="EvaluationItemType" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.evaluationItemType"></a>

```csharp
public string EvaluationItemType { get; set; }
```

- *Type:* string

The type of the EvaluationItem. Possible values: ["REQUEST", "RESULT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#evaluation_item_type VertexAiEvaluationItem#evaluation_item_type}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the EvaluationItem. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#region VertexAiEvaluationItem#region}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#deletion_policy VertexAiEvaluationItem#deletion_policy}

---

##### `EvaluationRequest`<sup>Optional</sup> <a name="EvaluationRequest" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.evaluationRequest"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequest EvaluationRequest { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest">VertexAiEvaluationItemEvaluationRequest</a>

evaluation_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#evaluation_request VertexAiEvaluationItem#evaluation_request}

---

##### `GcsUri`<sup>Optional</sup> <a name="GcsUri" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.gcsUri"></a>

```csharp
public string GcsUri { get; set; }
```

- *Type:* string

The Cloud Storage object where the request or response is stored. Exactly one of 'evaluation_request' or 'gcs_uri' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#gcs_uri VertexAiEvaluationItem#gcs_uri}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#id VertexAiEvaluationItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels for the EvaluationItem.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#labels VertexAiEvaluationItem#labels}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.metadata"></a>

```csharp
public string Metadata { get; set; }
```

- *Type:* string

User-defined metadata for this evaluation item as a JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#metadata VertexAiEvaluationItem#metadata}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#project VertexAiEvaluationItem#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.timeouts"></a>

```csharp
public VertexAiEvaluationItemTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts">VertexAiEvaluationItemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#timeouts VertexAiEvaluationItem#timeouts}

---

### VertexAiEvaluationItemError <a name="VertexAiEvaluationItemError" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemError {

};
```


### VertexAiEvaluationItemEvaluationRequest <a name="VertexAiEvaluationItemEvaluationRequest" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequest {
    IResolvable|VertexAiEvaluationItemEvaluationRequestCandidateResponses[] CandidateResponses = null,
    VertexAiEvaluationItemEvaluationRequestGoldenResponse GoldenResponse = null,
    VertexAiEvaluationItemEvaluationRequestPrompt Prompt = null,
    IResolvable|VertexAiEvaluationItemEvaluationRequestRubrics[] Rubrics = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.property.candidateResponses">CandidateResponses</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>[]</code> | candidate_responses block. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.property.goldenResponse">GoldenResponse</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse">VertexAiEvaluationItemEvaluationRequestGoldenResponse</a></code> | golden_response block. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.property.prompt">Prompt</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt">VertexAiEvaluationItemEvaluationRequestPrompt</a></code> | prompt block. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.property.rubrics">Rubrics</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>[]</code> | rubrics block. |

---

##### `CandidateResponses`<sup>Optional</sup> <a name="CandidateResponses" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.property.candidateResponses"></a>

```csharp
public IResolvable|VertexAiEvaluationItemEvaluationRequestCandidateResponses[] CandidateResponses { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>[]

candidate_responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#candidate_responses VertexAiEvaluationItem#candidate_responses}

---

##### `GoldenResponse`<sup>Optional</sup> <a name="GoldenResponse" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.property.goldenResponse"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestGoldenResponse GoldenResponse { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse">VertexAiEvaluationItemEvaluationRequestGoldenResponse</a>

golden_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#golden_response VertexAiEvaluationItem#golden_response}

---

##### `Prompt`<sup>Optional</sup> <a name="Prompt" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.property.prompt"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestPrompt Prompt { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt">VertexAiEvaluationItemEvaluationRequestPrompt</a>

prompt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#prompt VertexAiEvaluationItem#prompt}

---

##### `Rubrics`<sup>Optional</sup> <a name="Rubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.property.rubrics"></a>

```csharp
public IResolvable|VertexAiEvaluationItemEvaluationRequestRubrics[] Rubrics { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>[]

rubrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#rubrics VertexAiEvaluationItem#rubrics}

---

### VertexAiEvaluationItemEvaluationRequestCandidateResponses <a name="VertexAiEvaluationItemEvaluationRequestCandidateResponses" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestCandidateResponses {
    string Candidate,
    string AgentData = null,
    string Text = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.property.candidate">Candidate</a></code> | <code>string</code> | The name of the candidate that produced the response. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.property.agentData">AgentData</a></code> | <code>string</code> | Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.property.text">Text</a></code> | <code>string</code> | Text response. At most one of 'text', 'value', or 'agent_data' can be set. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.property.value">Value</a></code> | <code>string</code> | Fields and values that can be used to populate the response template, as a JSON string. |

---

##### `Candidate`<sup>Required</sup> <a name="Candidate" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.property.candidate"></a>

```csharp
public string Candidate { get; set; }
```

- *Type:* string

The name of the candidate that produced the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#candidate VertexAiEvaluationItem#candidate}

---

##### `AgentData`<sup>Optional</sup> <a name="AgentData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.property.agentData"></a>

```csharp
public string AgentData { get; set; }
```

- *Type:* string

Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string.

This
field is used to provide the full output of an agent's run, including
all turns and events, for direct evaluation.
At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#agent_data VertexAiEvaluationItem#agent_data}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Text response. At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#text VertexAiEvaluationItem#text}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Fields and values that can be used to populate the response template, as a JSON string.

At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#value VertexAiEvaluationItem#value}

---

### VertexAiEvaluationItemEvaluationRequestCandidateResponsesError <a name="VertexAiEvaluationItemEvaluationRequestCandidateResponsesError" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestCandidateResponsesError {

};
```


### VertexAiEvaluationItemEvaluationRequestGoldenResponse <a name="VertexAiEvaluationItemEvaluationRequestGoldenResponse" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestGoldenResponse {
    string Candidate,
    string AgentData = null,
    string Text = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.property.candidate">Candidate</a></code> | <code>string</code> | The name of the candidate that produced the response. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.property.agentData">AgentData</a></code> | <code>string</code> | Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.property.text">Text</a></code> | <code>string</code> | Text response. At most one of 'text', 'value', or 'agent_data' can be set. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.property.value">Value</a></code> | <code>string</code> | Fields and values that can be used to populate the response template, as a JSON string. |

---

##### `Candidate`<sup>Required</sup> <a name="Candidate" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.property.candidate"></a>

```csharp
public string Candidate { get; set; }
```

- *Type:* string

The name of the candidate that produced the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#candidate VertexAiEvaluationItem#candidate}

---

##### `AgentData`<sup>Optional</sup> <a name="AgentData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.property.agentData"></a>

```csharp
public string AgentData { get; set; }
```

- *Type:* string

Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string.

This
field is used to provide the full output of an agent's run, including
all turns and events, for direct evaluation.
At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#agent_data VertexAiEvaluationItem#agent_data}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Text response. At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#text VertexAiEvaluationItem#text}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Fields and values that can be used to populate the response template, as a JSON string.

At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#value VertexAiEvaluationItem#value}

---

### VertexAiEvaluationItemEvaluationRequestGoldenResponseError <a name="VertexAiEvaluationItemEvaluationRequestGoldenResponseError" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestGoldenResponseError {

};
```


### VertexAiEvaluationItemEvaluationRequestPrompt <a name="VertexAiEvaluationItemEvaluationRequestPrompt" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestPrompt {
    string AgentData = null,
    VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData PromptTemplateData = null,
    string Text = null,
    VertexAiEvaluationItemEvaluationRequestPromptUserScenario UserScenario = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.agentData">AgentData</a></code> | <code>string</code> | Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.promptTemplateData">PromptTemplateData</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a></code> | prompt_template_data block. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.text">Text</a></code> | <code>string</code> | Text prompt. At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.userScenario">UserScenario</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario">VertexAiEvaluationItemEvaluationRequestPromptUserScenario</a></code> | user_scenario block. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.value">Value</a></code> | <code>string</code> | Fields and values that can be used to populate the prompt template, as a JSON string. |

---

##### `AgentData`<sup>Optional</sup> <a name="AgentData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.agentData"></a>

```csharp
public string AgentData { get; set; }
```

- *Type:* string

Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string.

This
serves as the input context for agent scraping.
At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#agent_data VertexAiEvaluationItem#agent_data}

---

##### `PromptTemplateData`<sup>Optional</sup> <a name="PromptTemplateData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.promptTemplateData"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData PromptTemplateData { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a>

prompt_template_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#prompt_template_data VertexAiEvaluationItem#prompt_template_data}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Text prompt. At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#text VertexAiEvaluationItem#text}

---

##### `UserScenario`<sup>Optional</sup> <a name="UserScenario" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.userScenario"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestPromptUserScenario UserScenario { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario">VertexAiEvaluationItemEvaluationRequestPromptUserScenario</a>

user_scenario block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#user_scenario VertexAiEvaluationItem#user_scenario}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Fields and values that can be used to populate the prompt template, as a JSON string.

At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#value VertexAiEvaluationItem#value}

---

### VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData <a name="VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData {
    string Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData.property.values">Values</a></code> | <code>string</code> | The values for fields in the prompt template, as a JSON string mapping field names to Content objects. |

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData.property.values"></a>

```csharp
public string Values { get; set; }
```

- *Type:* string

The values for fields in the prompt template, as a JSON string mapping field names to Content objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#values VertexAiEvaluationItem#values}

---

### VertexAiEvaluationItemEvaluationRequestPromptUserScenario <a name="VertexAiEvaluationItemEvaluationRequestPromptUserScenario" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestPromptUserScenario {
    string ConversationPlan,
    string StartingPrompt
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario.property.conversationPlan">ConversationPlan</a></code> | <code>string</code> | The plan for the conversation, used to drive the multi-turn agent run and generate the simulated agent evaluation dataset. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario.property.startingPrompt">StartingPrompt</a></code> | <code>string</code> | The prompt that starts the conversation between the simulated user and the agent under test. |

---

##### `ConversationPlan`<sup>Required</sup> <a name="ConversationPlan" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario.property.conversationPlan"></a>

```csharp
public string ConversationPlan { get; set; }
```

- *Type:* string

The plan for the conversation, used to drive the multi-turn agent run and generate the simulated agent evaluation dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#conversation_plan VertexAiEvaluationItem#conversation_plan}

---

##### `StartingPrompt`<sup>Required</sup> <a name="StartingPrompt" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario.property.startingPrompt"></a>

```csharp
public string StartingPrompt { get; set; }
```

- *Type:* string

The prompt that starts the conversation between the simulated user and the agent under test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#starting_prompt VertexAiEvaluationItem#starting_prompt}

---

### VertexAiEvaluationItemEvaluationRequestRubrics <a name="VertexAiEvaluationItemEvaluationRequestRubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestRubrics {
    string Name,
    string DisplayName = null,
    string GroupId = null,
    IResolvable|VertexAiEvaluationItemEvaluationRequestRubricsRubrics[] Rubrics = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#name VertexAiEvaluationItem#name}. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.property.displayName">DisplayName</a></code> | <code>string</code> | Human-readable name for the group. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.property.groupId">GroupId</a></code> | <code>string</code> | Unique identifier for the group. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.property.rubrics">Rubrics</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>[]</code> | rubrics block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#name VertexAiEvaluationItem#name}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Human-readable name for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#display_name VertexAiEvaluationItem#display_name}

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

Unique identifier for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#group_id VertexAiEvaluationItem#group_id}

---

##### `Rubrics`<sup>Optional</sup> <a name="Rubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.property.rubrics"></a>

```csharp
public IResolvable|VertexAiEvaluationItemEvaluationRequestRubricsRubrics[] Rubrics { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>[]

rubrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#rubrics VertexAiEvaluationItem#rubrics}

---

### VertexAiEvaluationItemEvaluationRequestRubricsRubrics <a name="VertexAiEvaluationItemEvaluationRequestRubricsRubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestRubricsRubrics {
    VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent Content,
    string Importance = null,
    string RubricId = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.content">Content</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a></code> | content block. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.importance">Importance</a></code> | <code>string</code> | The relative importance of this rubric. Possible values: ["HIGH", "MEDIUM", "LOW"]. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.rubricId">RubricId</a></code> | <code>string</code> | Unique identifier for the rubric. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.type">Type</a></code> | <code>string</code> | A type designator for the rubric, e.g. 'SUMMARIZATION_QUALITY'. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.content"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent Content { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a>

content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#content VertexAiEvaluationItem#content}

---

##### `Importance`<sup>Optional</sup> <a name="Importance" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.importance"></a>

```csharp
public string Importance { get; set; }
```

- *Type:* string

The relative importance of this rubric. Possible values: ["HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#importance VertexAiEvaluationItem#importance}

---

##### `RubricId`<sup>Optional</sup> <a name="RubricId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.rubricId"></a>

```csharp
public string RubricId { get; set; }
```

- *Type:* string

Unique identifier for the rubric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#rubric_id VertexAiEvaluationItem#rubric_id}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

A type designator for the rubric, e.g. 'SUMMARIZATION_QUALITY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#type VertexAiEvaluationItem#type}

---

### VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent <a name="VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent {
    VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty Property = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent.property.property">Property</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a></code> | property block. |

---

##### `Property`<sup>Optional</sup> <a name="Property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent.property.property"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty Property { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a>

property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#property VertexAiEvaluationItem#property}

---

### VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty <a name="VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty {
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty.property.description">Description</a></code> | <code>string</code> | Description of the property being evaluated. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the property being evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#description VertexAiEvaluationItem#description}

---

### VertexAiEvaluationItemEvaluationResponse <a name="VertexAiEvaluationItemEvaluationResponse" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponse.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationResponse {

};
```


### VertexAiEvaluationItemEvaluationResponseCandidateResults <a name="VertexAiEvaluationItemEvaluationResponseCandidateResults" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResults.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationResponseCandidateResults {

};
```


### VertexAiEvaluationItemEvaluationResponseCandidateResultsError <a name="VertexAiEvaluationItemEvaluationResponseCandidateResultsError" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationResponseCandidateResultsError {

};
```


### VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts <a name="VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts {

};
```


### VertexAiEvaluationItemTimeouts <a name="VertexAiEvaluationItemTimeouts" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#create VertexAiEvaluationItem#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#delete VertexAiEvaluationItem#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#update VertexAiEvaluationItem#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#create VertexAiEvaluationItem#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#delete VertexAiEvaluationItem#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#update VertexAiEvaluationItem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiEvaluationItemErrorList <a name="VertexAiEvaluationItemErrorList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.get"></a>

```csharp
private VertexAiEvaluationItemErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiEvaluationItemErrorOutputReference <a name="VertexAiEvaluationItemErrorOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemError">VertexAiEvaluationItemError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.internalValue"></a>

```csharp
public VertexAiEvaluationItemError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemError">VertexAiEvaluationItemError</a>

---


### VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList <a name="VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.get"></a>

```csharp
private VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference <a name="VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesError">VertexAiEvaluationItemEvaluationRequestCandidateResponsesError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.internalValue"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestCandidateResponsesError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesError">VertexAiEvaluationItemEvaluationRequestCandidateResponsesError</a>

---


### VertexAiEvaluationItemEvaluationRequestCandidateResponsesList <a name="VertexAiEvaluationItemEvaluationRequestCandidateResponsesList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestCandidateResponsesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.get"></a>

```csharp
private VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.internalValue"></a>

```csharp
public IResolvable|VertexAiEvaluationItemEvaluationRequestCandidateResponses[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>[]

---


### VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference <a name="VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetAgentData">ResetAgentData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAgentData` <a name="ResetAgentData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetAgentData"></a>

```csharp
private void ResetAgentData()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetText"></a>

```csharp
private void ResetText()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList">VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.agentDataInput">AgentDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.candidateInput">CandidateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.agentData">AgentData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.candidate">Candidate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.error"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList Error { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList">VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList</a>

---

##### `AgentDataInput`<sup>Optional</sup> <a name="AgentDataInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.agentDataInput"></a>

```csharp
public string AgentDataInput { get; }
```

- *Type:* string

---

##### `CandidateInput`<sup>Optional</sup> <a name="CandidateInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.candidateInput"></a>

```csharp
public string CandidateInput { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `AgentData`<sup>Required</sup> <a name="AgentData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.agentData"></a>

```csharp
public string AgentData { get; }
```

- *Type:* string

---

##### `Candidate`<sup>Required</sup> <a name="Candidate" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.candidate"></a>

```csharp
public string Candidate { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiEvaluationItemEvaluationRequestCandidateResponses InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>

---


### VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList <a name="VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.get"></a>

```csharp
private VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference <a name="VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseError">VertexAiEvaluationItemEvaluationRequestGoldenResponseError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.internalValue"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestGoldenResponseError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseError">VertexAiEvaluationItemEvaluationRequestGoldenResponseError</a>

---


### VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference <a name="VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetAgentData">ResetAgentData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAgentData` <a name="ResetAgentData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetAgentData"></a>

```csharp
private void ResetAgentData()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetText"></a>

```csharp
private void ResetText()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList">VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.agentDataInput">AgentDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.candidateInput">CandidateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.agentData">AgentData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.candidate">Candidate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse">VertexAiEvaluationItemEvaluationRequestGoldenResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.error"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList Error { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList">VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList</a>

---

##### `AgentDataInput`<sup>Optional</sup> <a name="AgentDataInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.agentDataInput"></a>

```csharp
public string AgentDataInput { get; }
```

- *Type:* string

---

##### `CandidateInput`<sup>Optional</sup> <a name="CandidateInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.candidateInput"></a>

```csharp
public string CandidateInput { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `AgentData`<sup>Required</sup> <a name="AgentData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.agentData"></a>

```csharp
public string AgentData { get; }
```

- *Type:* string

---

##### `Candidate`<sup>Required</sup> <a name="Candidate" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.candidate"></a>

```csharp
public string Candidate { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.internalValue"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestGoldenResponse InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse">VertexAiEvaluationItemEvaluationRequestGoldenResponse</a>

---


### VertexAiEvaluationItemEvaluationRequestOutputReference <a name="VertexAiEvaluationItemEvaluationRequestOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putCandidateResponses">PutCandidateResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putGoldenResponse">PutGoldenResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putPrompt">PutPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putRubrics">PutRubrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resetCandidateResponses">ResetCandidateResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resetGoldenResponse">ResetGoldenResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resetPrompt">ResetPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resetRubrics">ResetRubrics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCandidateResponses` <a name="PutCandidateResponses" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putCandidateResponses"></a>

```csharp
private void PutCandidateResponses(IResolvable|VertexAiEvaluationItemEvaluationRequestCandidateResponses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putCandidateResponses.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>[]

---

##### `PutGoldenResponse` <a name="PutGoldenResponse" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putGoldenResponse"></a>

```csharp
private void PutGoldenResponse(VertexAiEvaluationItemEvaluationRequestGoldenResponse Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putGoldenResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse">VertexAiEvaluationItemEvaluationRequestGoldenResponse</a>

---

##### `PutPrompt` <a name="PutPrompt" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putPrompt"></a>

```csharp
private void PutPrompt(VertexAiEvaluationItemEvaluationRequestPrompt Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt">VertexAiEvaluationItemEvaluationRequestPrompt</a>

---

##### `PutRubrics` <a name="PutRubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putRubrics"></a>

```csharp
private void PutRubrics(IResolvable|VertexAiEvaluationItemEvaluationRequestRubrics[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putRubrics.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>[]

---

##### `ResetCandidateResponses` <a name="ResetCandidateResponses" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resetCandidateResponses"></a>

```csharp
private void ResetCandidateResponses()
```

##### `ResetGoldenResponse` <a name="ResetGoldenResponse" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resetGoldenResponse"></a>

```csharp
private void ResetGoldenResponse()
```

##### `ResetPrompt` <a name="ResetPrompt" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resetPrompt"></a>

```csharp
private void ResetPrompt()
```

##### `ResetRubrics` <a name="ResetRubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resetRubrics"></a>

```csharp
private void ResetRubrics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.candidateResponses">CandidateResponses</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList">VertexAiEvaluationItemEvaluationRequestCandidateResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.goldenResponse">GoldenResponse</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference">VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.prompt">Prompt</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference">VertexAiEvaluationItemEvaluationRequestPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.rubrics">Rubrics</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList">VertexAiEvaluationItemEvaluationRequestRubricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.candidateResponsesInput">CandidateResponsesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.goldenResponseInput">GoldenResponseInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse">VertexAiEvaluationItemEvaluationRequestGoldenResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.promptInput">PromptInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt">VertexAiEvaluationItemEvaluationRequestPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.rubricsInput">RubricsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest">VertexAiEvaluationItemEvaluationRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CandidateResponses`<sup>Required</sup> <a name="CandidateResponses" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.candidateResponses"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestCandidateResponsesList CandidateResponses { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList">VertexAiEvaluationItemEvaluationRequestCandidateResponsesList</a>

---

##### `GoldenResponse`<sup>Required</sup> <a name="GoldenResponse" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.goldenResponse"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference GoldenResponse { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference">VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference</a>

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.prompt"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestPromptOutputReference Prompt { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference">VertexAiEvaluationItemEvaluationRequestPromptOutputReference</a>

---

##### `Rubrics`<sup>Required</sup> <a name="Rubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.rubrics"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestRubricsList Rubrics { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList">VertexAiEvaluationItemEvaluationRequestRubricsList</a>

---

##### `CandidateResponsesInput`<sup>Optional</sup> <a name="CandidateResponsesInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.candidateResponsesInput"></a>

```csharp
public IResolvable|VertexAiEvaluationItemEvaluationRequestCandidateResponses[] CandidateResponsesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>[]

---

##### `GoldenResponseInput`<sup>Optional</sup> <a name="GoldenResponseInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.goldenResponseInput"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestGoldenResponse GoldenResponseInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse">VertexAiEvaluationItemEvaluationRequestGoldenResponse</a>

---

##### `PromptInput`<sup>Optional</sup> <a name="PromptInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.promptInput"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestPrompt PromptInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt">VertexAiEvaluationItemEvaluationRequestPrompt</a>

---

##### `RubricsInput`<sup>Optional</sup> <a name="RubricsInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.rubricsInput"></a>

```csharp
public IResolvable|VertexAiEvaluationItemEvaluationRequestRubrics[] RubricsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.internalValue"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequest InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest">VertexAiEvaluationItemEvaluationRequest</a>

---


### VertexAiEvaluationItemEvaluationRequestPromptOutputReference <a name="VertexAiEvaluationItemEvaluationRequestPromptOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestPromptOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.putPromptTemplateData">PutPromptTemplateData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.putUserScenario">PutUserScenario</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetAgentData">ResetAgentData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetPromptTemplateData">ResetPromptTemplateData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetUserScenario">ResetUserScenario</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPromptTemplateData` <a name="PutPromptTemplateData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.putPromptTemplateData"></a>

```csharp
private void PutPromptTemplateData(VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.putPromptTemplateData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a>

---

##### `PutUserScenario` <a name="PutUserScenario" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.putUserScenario"></a>

```csharp
private void PutUserScenario(VertexAiEvaluationItemEvaluationRequestPromptUserScenario Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.putUserScenario.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario">VertexAiEvaluationItemEvaluationRequestPromptUserScenario</a>

---

##### `ResetAgentData` <a name="ResetAgentData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetAgentData"></a>

```csharp
private void ResetAgentData()
```

##### `ResetPromptTemplateData` <a name="ResetPromptTemplateData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetPromptTemplateData"></a>

```csharp
private void ResetPromptTemplateData()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetText"></a>

```csharp
private void ResetText()
```

##### `ResetUserScenario` <a name="ResetUserScenario" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetUserScenario"></a>

```csharp
private void ResetUserScenario()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.promptTemplateData">PromptTemplateData</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.userScenario">UserScenario</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference">VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.agentDataInput">AgentDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.promptTemplateDataInput">PromptTemplateDataInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.userScenarioInput">UserScenarioInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario">VertexAiEvaluationItemEvaluationRequestPromptUserScenario</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.agentData">AgentData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt">VertexAiEvaluationItemEvaluationRequestPrompt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PromptTemplateData`<sup>Required</sup> <a name="PromptTemplateData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.promptTemplateData"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference PromptTemplateData { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference</a>

---

##### `UserScenario`<sup>Required</sup> <a name="UserScenario" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.userScenario"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference UserScenario { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference">VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference</a>

---

##### `AgentDataInput`<sup>Optional</sup> <a name="AgentDataInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.agentDataInput"></a>

```csharp
public string AgentDataInput { get; }
```

- *Type:* string

---

##### `PromptTemplateDataInput`<sup>Optional</sup> <a name="PromptTemplateDataInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.promptTemplateDataInput"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData PromptTemplateDataInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a>

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `UserScenarioInput`<sup>Optional</sup> <a name="UserScenarioInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.userScenarioInput"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestPromptUserScenario UserScenarioInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario">VertexAiEvaluationItemEvaluationRequestPromptUserScenario</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `AgentData`<sup>Required</sup> <a name="AgentData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.agentData"></a>

```csharp
public string AgentData { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.internalValue"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestPrompt InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt">VertexAiEvaluationItemEvaluationRequestPrompt</a>

---


### VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference <a name="VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.values">Values</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.valuesInput"></a>

```csharp
public string ValuesInput { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.values"></a>

```csharp
public string Values { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.internalValue"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a>

---


### VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference <a name="VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.conversationPlanInput">ConversationPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.startingPromptInput">StartingPromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.conversationPlan">ConversationPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.startingPrompt">StartingPrompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario">VertexAiEvaluationItemEvaluationRequestPromptUserScenario</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConversationPlanInput`<sup>Optional</sup> <a name="ConversationPlanInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.conversationPlanInput"></a>

```csharp
public string ConversationPlanInput { get; }
```

- *Type:* string

---

##### `StartingPromptInput`<sup>Optional</sup> <a name="StartingPromptInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.startingPromptInput"></a>

```csharp
public string StartingPromptInput { get; }
```

- *Type:* string

---

##### `ConversationPlan`<sup>Required</sup> <a name="ConversationPlan" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.conversationPlan"></a>

```csharp
public string ConversationPlan { get; }
```

- *Type:* string

---

##### `StartingPrompt`<sup>Required</sup> <a name="StartingPrompt" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.startingPrompt"></a>

```csharp
public string StartingPrompt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.internalValue"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestPromptUserScenario InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario">VertexAiEvaluationItemEvaluationRequestPromptUserScenario</a>

---


### VertexAiEvaluationItemEvaluationRequestRubricsList <a name="VertexAiEvaluationItemEvaluationRequestRubricsList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestRubricsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.get"></a>

```csharp
private VertexAiEvaluationItemEvaluationRequestRubricsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.property.internalValue"></a>

```csharp
public IResolvable|VertexAiEvaluationItemEvaluationRequestRubrics[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>[]

---


### VertexAiEvaluationItemEvaluationRequestRubricsOutputReference <a name="VertexAiEvaluationItemEvaluationRequestRubricsOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestRubricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.putRubrics">PutRubrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetRubrics">ResetRubrics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRubrics` <a name="PutRubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.putRubrics"></a>

```csharp
private void PutRubrics(IResolvable|VertexAiEvaluationItemEvaluationRequestRubricsRubrics[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.putRubrics.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>[]

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetGroupId"></a>

```csharp
private void ResetGroupId()
```

##### `ResetRubrics` <a name="ResetRubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetRubrics"></a>

```csharp
private void ResetRubrics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.rubrics">Rubrics</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList">VertexAiEvaluationItemEvaluationRequestRubricsRubricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.rubricsInput">RubricsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rubrics`<sup>Required</sup> <a name="Rubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.rubrics"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestRubricsRubricsList Rubrics { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList">VertexAiEvaluationItemEvaluationRequestRubricsRubricsList</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RubricsInput`<sup>Optional</sup> <a name="RubricsInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.rubricsInput"></a>

```csharp
public IResolvable|VertexAiEvaluationItemEvaluationRequestRubricsRubrics[] RubricsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiEvaluationItemEvaluationRequestRubrics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>

---


### VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference <a name="VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.putProperty">PutProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resetProperty">ResetProperty</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProperty` <a name="PutProperty" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.putProperty"></a>

```csharp
private void PutProperty(VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.putProperty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a>

---

##### `ResetProperty` <a name="ResetProperty" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resetProperty"></a>

```csharp
private void ResetProperty()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.property">Property</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.propertyInput">PropertyInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.property"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference Property { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference</a>

---

##### `PropertyInput`<sup>Optional</sup> <a name="PropertyInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.propertyInput"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty PropertyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.internalValue"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a>

---


### VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference <a name="VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.internalValue"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a>

---


### VertexAiEvaluationItemEvaluationRequestRubricsRubricsList <a name="VertexAiEvaluationItemEvaluationRequestRubricsRubricsList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestRubricsRubricsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.get"></a>

```csharp
private VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.internalValue"></a>

```csharp
public IResolvable|VertexAiEvaluationItemEvaluationRequestRubricsRubrics[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>[]

---


### VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference <a name="VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.putContent">PutContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetImportance">ResetImportance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetRubricId">ResetRubricId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContent` <a name="PutContent" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.putContent"></a>

```csharp
private void PutContent(VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a>

---

##### `ResetImportance` <a name="ResetImportance" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetImportance"></a>

```csharp
private void ResetImportance()
```

##### `ResetRubricId` <a name="ResetRubricId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetRubricId"></a>

```csharp
private void ResetRubricId()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.content">Content</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.contentInput">ContentInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.importanceInput">ImportanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.rubricIdInput">RubricIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.importance">Importance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.rubricId">RubricId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.content"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference Content { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference</a>

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.contentInput"></a>

```csharp
public VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent ContentInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a>

---

##### `ImportanceInput`<sup>Optional</sup> <a name="ImportanceInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.importanceInput"></a>

```csharp
public string ImportanceInput { get; }
```

- *Type:* string

---

##### `RubricIdInput`<sup>Optional</sup> <a name="RubricIdInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.rubricIdInput"></a>

```csharp
public string RubricIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Importance`<sup>Required</sup> <a name="Importance" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.importance"></a>

```csharp
public string Importance { get; }
```

- *Type:* string

---

##### `RubricId`<sup>Required</sup> <a name="RubricId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.rubricId"></a>

```csharp
public string RubricId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiEvaluationItemEvaluationRequestRubricsRubrics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>

---


### VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList <a name="VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.get"></a>

```csharp
private VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference <a name="VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsError">VertexAiEvaluationItemEvaluationResponseCandidateResultsError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.internalValue"></a>

```csharp
public VertexAiEvaluationItemEvaluationResponseCandidateResultsError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsError">VertexAiEvaluationItemEvaluationResponseCandidateResultsError</a>

---


### VertexAiEvaluationItemEvaluationResponseCandidateResultsList <a name="VertexAiEvaluationItemEvaluationResponseCandidateResultsList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationResponseCandidateResultsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.get"></a>

```csharp
private VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference <a name="VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.additionalResults">AdditionalResults</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.candidate">Candidate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList">VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.explanation">Explanation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.metric">Metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.rubricVerdicts">RubricVerdicts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList">VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.score">Score</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResults">VertexAiEvaluationItemEvaluationResponseCandidateResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalResults`<sup>Required</sup> <a name="AdditionalResults" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.additionalResults"></a>

```csharp
public string AdditionalResults { get; }
```

- *Type:* string

---

##### `Candidate`<sup>Required</sup> <a name="Candidate" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.candidate"></a>

```csharp
public string Candidate { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.error"></a>

```csharp
public VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList Error { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList">VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList</a>

---

##### `Explanation`<sup>Required</sup> <a name="Explanation" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.explanation"></a>

```csharp
public string Explanation { get; }
```

- *Type:* string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.metric"></a>

```csharp
public string Metric { get; }
```

- *Type:* string

---

##### `RubricVerdicts`<sup>Required</sup> <a name="RubricVerdicts" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.rubricVerdicts"></a>

```csharp
public VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList RubricVerdicts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList">VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList</a>

---

##### `Score`<sup>Required</sup> <a name="Score" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.score"></a>

```csharp
public double Score { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.internalValue"></a>

```csharp
public VertexAiEvaluationItemEvaluationResponseCandidateResults InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResults">VertexAiEvaluationItemEvaluationResponseCandidateResults</a>

---


### VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList <a name="VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.get"></a>

```csharp
private VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference <a name="VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.evaluatedRubric">EvaluatedRubric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.reasoning">Reasoning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.verdict">Verdict</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts">VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EvaluatedRubric`<sup>Required</sup> <a name="EvaluatedRubric" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.evaluatedRubric"></a>

```csharp
public string EvaluatedRubric { get; }
```

- *Type:* string

---

##### `Reasoning`<sup>Required</sup> <a name="Reasoning" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.reasoning"></a>

```csharp
public string Reasoning { get; }
```

- *Type:* string

---

##### `Verdict`<sup>Required</sup> <a name="Verdict" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.verdict"></a>

```csharp
public IResolvable Verdict { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.internalValue"></a>

```csharp
public VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts">VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts</a>

---


### VertexAiEvaluationItemEvaluationResponseList <a name="VertexAiEvaluationItemEvaluationResponseList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationResponseList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.get"></a>

```csharp
private VertexAiEvaluationItemEvaluationResponseOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiEvaluationItemEvaluationResponseOutputReference <a name="VertexAiEvaluationItemEvaluationResponseOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemEvaluationResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.candidateResults">CandidateResults</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList">VertexAiEvaluationItemEvaluationResponseCandidateResultsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.evaluationRequest">EvaluationRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.evaluationRun">EvaluationRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.metric">Metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.request">Request</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponse">VertexAiEvaluationItemEvaluationResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CandidateResults`<sup>Required</sup> <a name="CandidateResults" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.candidateResults"></a>

```csharp
public VertexAiEvaluationItemEvaluationResponseCandidateResultsList CandidateResults { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList">VertexAiEvaluationItemEvaluationResponseCandidateResultsList</a>

---

##### `EvaluationRequest`<sup>Required</sup> <a name="EvaluationRequest" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.evaluationRequest"></a>

```csharp
public string EvaluationRequest { get; }
```

- *Type:* string

---

##### `EvaluationRun`<sup>Required</sup> <a name="EvaluationRun" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.evaluationRun"></a>

```csharp
public string EvaluationRun { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.metric"></a>

```csharp
public string Metric { get; }
```

- *Type:* string

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.request"></a>

```csharp
public string Request { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.internalValue"></a>

```csharp
public VertexAiEvaluationItemEvaluationResponse InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponse">VertexAiEvaluationItemEvaluationResponse</a>

---


### VertexAiEvaluationItemTimeoutsOutputReference <a name="VertexAiEvaluationItemTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiEvaluationItemTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts">VertexAiEvaluationItemTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiEvaluationItemTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts">VertexAiEvaluationItemTimeouts</a>

---



