# `vertexAiRagFile` Submodule <a name="`vertexAiRagFile` Submodule" id="@cdktn/provider-google.vertexAiRagFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiRagFile <a name="VertexAiRagFile" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file google_vertex_ai_rag_file}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFile(Construct Scope, string Id, VertexAiRagFileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig">VertexAiRagFileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig">VertexAiRagFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putGcsSource">PutGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putGoogleDriveSource">PutGoogleDriveSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putRagFileParsingConfig">PutRagFileParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putRagFileTransformationConfig">PutRagFileTransformationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetGcsSource">ResetGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetGoogleDriveSource">ResetGoogleDriveSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetMaxEmbeddingRequestsPerMin">ResetMaxEmbeddingRequestsPerMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetRagFileParsingConfig">ResetRagFileParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetRagFileTransformationConfig">ResetRagFileTransformationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGcsSource` <a name="PutGcsSource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putGcsSource"></a>

```csharp
private void PutGcsSource(VertexAiRagFileGcsSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putGcsSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSource">VertexAiRagFileGcsSource</a>

---

##### `PutGoogleDriveSource` <a name="PutGoogleDriveSource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putGoogleDriveSource"></a>

```csharp
private void PutGoogleDriveSource(VertexAiRagFileGoogleDriveSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putGoogleDriveSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSource">VertexAiRagFileGoogleDriveSource</a>

---

##### `PutRagFileParsingConfig` <a name="PutRagFileParsingConfig" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putRagFileParsingConfig"></a>

```csharp
private void PutRagFileParsingConfig(VertexAiRagFileRagFileParsingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putRagFileParsingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig">VertexAiRagFileRagFileParsingConfig</a>

---

##### `PutRagFileTransformationConfig` <a name="PutRagFileTransformationConfig" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putRagFileTransformationConfig"></a>

```csharp
private void PutRagFileTransformationConfig(VertexAiRagFileRagFileTransformationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putRagFileTransformationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfig">VertexAiRagFileRagFileTransformationConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putTimeouts"></a>

```csharp
private void PutTimeouts(VertexAiRagFileTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts">VertexAiRagFileTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetGcsSource` <a name="ResetGcsSource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetGcsSource"></a>

```csharp
private void ResetGcsSource()
```

##### `ResetGoogleDriveSource` <a name="ResetGoogleDriveSource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetGoogleDriveSource"></a>

```csharp
private void ResetGoogleDriveSource()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxEmbeddingRequestsPerMin` <a name="ResetMaxEmbeddingRequestsPerMin" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetMaxEmbeddingRequestsPerMin"></a>

```csharp
private void ResetMaxEmbeddingRequestsPerMin()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRagFileParsingConfig` <a name="ResetRagFileParsingConfig" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetRagFileParsingConfig"></a>

```csharp
private void ResetRagFileParsingConfig()
```

##### `ResetRagFileTransformationConfig` <a name="ResetRagFileTransformationConfig" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetRagFileTransformationConfig"></a>

```csharp
private void ResetRagFileTransformationConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiRagFile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiRagFile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiRagFile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiRagFile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiRagFile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VertexAiRagFile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VertexAiRagFile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VertexAiRagFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiRagFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.fileStatus">FileStatus</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList">VertexAiRagFileFileStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.gcsSource">GcsSource</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference">VertexAiRagFileGcsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.googleDriveSource">GoogleDriveSource</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference">VertexAiRagFileGoogleDriveSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.ragFileParsingConfig">RagFileParsingConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference">VertexAiRagFileRagFileParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.ragFileTransformationConfig">RagFileTransformationConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference">VertexAiRagFileRagFileTransformationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference">VertexAiRagFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.userMetadata">UserMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.gcsSourceInput">GcsSourceInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSource">VertexAiRagFileGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.googleDriveSourceInput">GoogleDriveSourceInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSource">VertexAiRagFileGoogleDriveSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.maxEmbeddingRequestsPerMinInput">MaxEmbeddingRequestsPerMinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.ragCorpusInput">RagCorpusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.ragFileParsingConfigInput">RagFileParsingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig">VertexAiRagFileRagFileParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.ragFileTransformationConfigInput">RagFileTransformationConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfig">VertexAiRagFileRagFileTransformationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts">VertexAiRagFileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.maxEmbeddingRequestsPerMin">MaxEmbeddingRequestsPerMin</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.ragCorpus">RagCorpus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FileStatus`<sup>Required</sup> <a name="FileStatus" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.fileStatus"></a>

```csharp
public VertexAiRagFileFileStatusList FileStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList">VertexAiRagFileFileStatusList</a>

---

##### `GcsSource`<sup>Required</sup> <a name="GcsSource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.gcsSource"></a>

```csharp
public VertexAiRagFileGcsSourceOutputReference GcsSource { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference">VertexAiRagFileGcsSourceOutputReference</a>

---

##### `GoogleDriveSource`<sup>Required</sup> <a name="GoogleDriveSource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.googleDriveSource"></a>

```csharp
public VertexAiRagFileGoogleDriveSourceOutputReference GoogleDriveSource { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference">VertexAiRagFileGoogleDriveSourceOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RagFileParsingConfig`<sup>Required</sup> <a name="RagFileParsingConfig" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.ragFileParsingConfig"></a>

```csharp
public VertexAiRagFileRagFileParsingConfigOutputReference RagFileParsingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference">VertexAiRagFileRagFileParsingConfigOutputReference</a>

---

##### `RagFileTransformationConfig`<sup>Required</sup> <a name="RagFileTransformationConfig" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.ragFileTransformationConfig"></a>

```csharp
public VertexAiRagFileRagFileTransformationConfigOutputReference RagFileTransformationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference">VertexAiRagFileRagFileTransformationConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.timeouts"></a>

```csharp
public VertexAiRagFileTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference">VertexAiRagFileTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `UserMetadata`<sup>Required</sup> <a name="UserMetadata" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.userMetadata"></a>

```csharp
public string UserMetadata { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `GcsSourceInput`<sup>Optional</sup> <a name="GcsSourceInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.gcsSourceInput"></a>

```csharp
public VertexAiRagFileGcsSource GcsSourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSource">VertexAiRagFileGcsSource</a>

---

##### `GoogleDriveSourceInput`<sup>Optional</sup> <a name="GoogleDriveSourceInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.googleDriveSourceInput"></a>

```csharp
public VertexAiRagFileGoogleDriveSource GoogleDriveSourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSource">VertexAiRagFileGoogleDriveSource</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxEmbeddingRequestsPerMinInput`<sup>Optional</sup> <a name="MaxEmbeddingRequestsPerMinInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.maxEmbeddingRequestsPerMinInput"></a>

```csharp
public double MaxEmbeddingRequestsPerMinInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RagCorpusInput`<sup>Optional</sup> <a name="RagCorpusInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.ragCorpusInput"></a>

```csharp
public string RagCorpusInput { get; }
```

- *Type:* string

---

##### `RagFileParsingConfigInput`<sup>Optional</sup> <a name="RagFileParsingConfigInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.ragFileParsingConfigInput"></a>

```csharp
public VertexAiRagFileRagFileParsingConfig RagFileParsingConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig">VertexAiRagFileRagFileParsingConfig</a>

---

##### `RagFileTransformationConfigInput`<sup>Optional</sup> <a name="RagFileTransformationConfigInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.ragFileTransformationConfigInput"></a>

```csharp
public VertexAiRagFileRagFileTransformationConfig RagFileTransformationConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfig">VertexAiRagFileRagFileTransformationConfig</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.timeoutsInput"></a>

```csharp
public IResolvable|VertexAiRagFileTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts">VertexAiRagFileTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxEmbeddingRequestsPerMin`<sup>Required</sup> <a name="MaxEmbeddingRequestsPerMin" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.maxEmbeddingRequestsPerMin"></a>

```csharp
public double MaxEmbeddingRequestsPerMin { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RagCorpus`<sup>Required</sup> <a name="RagCorpus" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.ragCorpus"></a>

```csharp
public string RagCorpus { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiRagFileConfig <a name="VertexAiRagFileConfig" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string RagCorpus,
    string Region,
    string DeletionPolicy = null,
    VertexAiRagFileGcsSource GcsSource = null,
    VertexAiRagFileGoogleDriveSource GoogleDriveSource = null,
    string Id = null,
    double MaxEmbeddingRequestsPerMin = null,
    string Project = null,
    VertexAiRagFileRagFileParsingConfig RagFileParsingConfig = null,
    VertexAiRagFileRagFileTransformationConfig RagFileTransformationConfig = null,
    VertexAiRagFileTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.ragCorpus">RagCorpus</a></code> | <code>string</code> | The ID of the RagCorpus to import the file into, for example the 'name' attribute of a 'google_vertex_ai_rag_corpus' resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.region">Region</a></code> | <code>string</code> | The region of the RagCorpus. eg europe-west4. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.gcsSource">GcsSource</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSource">VertexAiRagFileGcsSource</a></code> | gcs_source block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.googleDriveSource">GoogleDriveSource</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSource">VertexAiRagFileGoogleDriveSource</a></code> | google_drive_source block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#id VertexAiRagFile#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.maxEmbeddingRequestsPerMin">MaxEmbeddingRequestsPerMin</a></code> | <code>double</code> | The maximum number of queries per minute that the import is allowed to make to the embedding model specified on the RagCorpus. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#project VertexAiRagFile#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.ragFileParsingConfig">RagFileParsingConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig">VertexAiRagFileRagFileParsingConfig</a></code> | rag_file_parsing_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.ragFileTransformationConfig">RagFileTransformationConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfig">VertexAiRagFileRagFileTransformationConfig</a></code> | rag_file_transformation_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts">VertexAiRagFileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RagCorpus`<sup>Required</sup> <a name="RagCorpus" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.ragCorpus"></a>

```csharp
public string RagCorpus { get; set; }
```

- *Type:* string

The ID of the RagCorpus to import the file into, for example the 'name' attribute of a 'google_vertex_ai_rag_corpus' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#rag_corpus VertexAiRagFile#rag_corpus}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the RagCorpus. eg europe-west4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#region VertexAiRagFile#region}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#deletion_policy VertexAiRagFile#deletion_policy}

---

##### `GcsSource`<sup>Optional</sup> <a name="GcsSource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.gcsSource"></a>

```csharp
public VertexAiRagFileGcsSource GcsSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSource">VertexAiRagFileGcsSource</a>

gcs_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#gcs_source VertexAiRagFile#gcs_source}

---

##### `GoogleDriveSource`<sup>Optional</sup> <a name="GoogleDriveSource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.googleDriveSource"></a>

```csharp
public VertexAiRagFileGoogleDriveSource GoogleDriveSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSource">VertexAiRagFileGoogleDriveSource</a>

google_drive_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#google_drive_source VertexAiRagFile#google_drive_source}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#id VertexAiRagFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxEmbeddingRequestsPerMin`<sup>Optional</sup> <a name="MaxEmbeddingRequestsPerMin" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.maxEmbeddingRequestsPerMin"></a>

```csharp
public double MaxEmbeddingRequestsPerMin { get; set; }
```

- *Type:* double

The maximum number of queries per minute that the import is allowed to make to the embedding model specified on the RagCorpus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#max_embedding_requests_per_min VertexAiRagFile#max_embedding_requests_per_min}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#project VertexAiRagFile#project}.

---

##### `RagFileParsingConfig`<sup>Optional</sup> <a name="RagFileParsingConfig" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.ragFileParsingConfig"></a>

```csharp
public VertexAiRagFileRagFileParsingConfig RagFileParsingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig">VertexAiRagFileRagFileParsingConfig</a>

rag_file_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#rag_file_parsing_config VertexAiRagFile#rag_file_parsing_config}

---

##### `RagFileTransformationConfig`<sup>Optional</sup> <a name="RagFileTransformationConfig" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.ragFileTransformationConfig"></a>

```csharp
public VertexAiRagFileRagFileTransformationConfig RagFileTransformationConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfig">VertexAiRagFileRagFileTransformationConfig</a>

rag_file_transformation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#rag_file_transformation_config VertexAiRagFile#rag_file_transformation_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.timeouts"></a>

```csharp
public VertexAiRagFileTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts">VertexAiRagFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#timeouts VertexAiRagFile#timeouts}

---

### VertexAiRagFileFileStatus <a name="VertexAiRagFileFileStatus" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFileFileStatus {

};
```


### VertexAiRagFileGcsSource <a name="VertexAiRagFileGcsSource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFileGcsSource {
    string[] Uris
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSource.property.uris">Uris</a></code> | <code>string[]</code> | The Cloud Storage URI of the file to import, for example 'gs://my-bucket/my-file.pdf'. Must reference a single file; directories and wildcards are not supported because each resource manages one RagFile. |

---

##### `Uris`<sup>Required</sup> <a name="Uris" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSource.property.uris"></a>

```csharp
public string[] Uris { get; set; }
```

- *Type:* string[]

The Cloud Storage URI of the file to import, for example 'gs://my-bucket/my-file.pdf'. Must reference a single file; directories and wildcards are not supported because each resource manages one RagFile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#uris VertexAiRagFile#uris}

---

### VertexAiRagFileGoogleDriveSource <a name="VertexAiRagFileGoogleDriveSource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFileGoogleDriveSource {
    VertexAiRagFileGoogleDriveSourceResourceIds ResourceIds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSource.property.resourceIds">ResourceIds</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds">VertexAiRagFileGoogleDriveSourceResourceIds</a></code> | resource_ids block. |

---

##### `ResourceIds`<sup>Required</sup> <a name="ResourceIds" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSource.property.resourceIds"></a>

```csharp
public VertexAiRagFileGoogleDriveSourceResourceIds ResourceIds { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds">VertexAiRagFileGoogleDriveSourceResourceIds</a>

resource_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#resource_ids VertexAiRagFile#resource_ids}

---

### VertexAiRagFileGoogleDriveSourceResourceIds <a name="VertexAiRagFileGoogleDriveSourceResourceIds" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFileGoogleDriveSourceResourceIds {
    string ResourceId,
    string ResourceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds.property.resourceId">ResourceId</a></code> | <code>string</code> | The ID of the Google Drive file. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds.property.resourceType">ResourceType</a></code> | <code>string</code> | The type of the Google Drive resource. |

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

The ID of the Google Drive file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#resource_id VertexAiRagFile#resource_id}

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

The type of the Google Drive resource.

Only individual files are
supported because each resource manages one RagFile. Default value: "RESOURCE_TYPE_FILE" Possible values: ["RESOURCE_TYPE_FILE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#resource_type VertexAiRagFile#resource_type}

---

### VertexAiRagFileRagFileParsingConfig <a name="VertexAiRagFileRagFileParsingConfig" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFileRagFileParsingConfig {
    VertexAiRagFileRagFileParsingConfigLayoutParser LayoutParser = null,
    VertexAiRagFileRagFileParsingConfigLlmParser LlmParser = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig.property.layoutParser">LayoutParser</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser">VertexAiRagFileRagFileParsingConfigLayoutParser</a></code> | layout_parser block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig.property.llmParser">LlmParser</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser">VertexAiRagFileRagFileParsingConfigLlmParser</a></code> | llm_parser block. |

---

##### `LayoutParser`<sup>Optional</sup> <a name="LayoutParser" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig.property.layoutParser"></a>

```csharp
public VertexAiRagFileRagFileParsingConfigLayoutParser LayoutParser { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser">VertexAiRagFileRagFileParsingConfigLayoutParser</a>

layout_parser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#layout_parser VertexAiRagFile#layout_parser}

---

##### `LlmParser`<sup>Optional</sup> <a name="LlmParser" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig.property.llmParser"></a>

```csharp
public VertexAiRagFileRagFileParsingConfigLlmParser LlmParser { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser">VertexAiRagFileRagFileParsingConfigLlmParser</a>

llm_parser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#llm_parser VertexAiRagFile#llm_parser}

---

### VertexAiRagFileRagFileParsingConfigLayoutParser <a name="VertexAiRagFileRagFileParsingConfigLayoutParser" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFileRagFileParsingConfigLayoutParser {
    double MaxParsingRequestsPerMin = null,
    string ProcessorName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser.property.maxParsingRequestsPerMin">MaxParsingRequestsPerMin</a></code> | <code>double</code> | The maximum number of requests the job is allowed to make to the Document AI processor per minute. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser.property.processorName">ProcessorName</a></code> | <code>string</code> | The full resource name of a Document AI processor or processor version of type 'LAYOUT_PARSER_PROCESSOR'. Format: 'projects/{project_id}/locations/{location}/processors/{processor_id}' or 'projects/{project_id}/locations/{location}/processors/{processor_id}/processorVersions/{processor_version_id}'. |

---

##### `MaxParsingRequestsPerMin`<sup>Optional</sup> <a name="MaxParsingRequestsPerMin" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser.property.maxParsingRequestsPerMin"></a>

```csharp
public double MaxParsingRequestsPerMin { get; set; }
```

- *Type:* double

The maximum number of requests the job is allowed to make to the Document AI processor per minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#max_parsing_requests_per_min VertexAiRagFile#max_parsing_requests_per_min}

---

##### `ProcessorName`<sup>Optional</sup> <a name="ProcessorName" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser.property.processorName"></a>

```csharp
public string ProcessorName { get; set; }
```

- *Type:* string

The full resource name of a Document AI processor or processor version of type 'LAYOUT_PARSER_PROCESSOR'. Format: 'projects/{project_id}/locations/{location}/processors/{processor_id}' or 'projects/{project_id}/locations/{location}/processors/{processor_id}/processorVersions/{processor_version_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#processor_name VertexAiRagFile#processor_name}

---

### VertexAiRagFileRagFileParsingConfigLlmParser <a name="VertexAiRagFileRagFileParsingConfigLlmParser" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFileRagFileParsingConfigLlmParser {
    string CustomParsingPrompt = null,
    double MaxParsingRequestsPerMin = null,
    string ModelName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser.property.customParsingPrompt">CustomParsingPrompt</a></code> | <code>string</code> | The prompt to use for parsing. If not specified, a default prompt is used. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser.property.maxParsingRequestsPerMin">MaxParsingRequestsPerMin</a></code> | <code>double</code> | The maximum number of requests the job is allowed to make to the LLM model per minute. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser.property.modelName">ModelName</a></code> | <code>string</code> | The name of a LLM model used for parsing. Format: 'projects/{project_id}/locations/{location}/publishers/{publisher}/models/{model}'. |

---

##### `CustomParsingPrompt`<sup>Optional</sup> <a name="CustomParsingPrompt" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser.property.customParsingPrompt"></a>

```csharp
public string CustomParsingPrompt { get; set; }
```

- *Type:* string

The prompt to use for parsing. If not specified, a default prompt is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#custom_parsing_prompt VertexAiRagFile#custom_parsing_prompt}

---

##### `MaxParsingRequestsPerMin`<sup>Optional</sup> <a name="MaxParsingRequestsPerMin" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser.property.maxParsingRequestsPerMin"></a>

```csharp
public double MaxParsingRequestsPerMin { get; set; }
```

- *Type:* double

The maximum number of requests the job is allowed to make to the LLM model per minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#max_parsing_requests_per_min VertexAiRagFile#max_parsing_requests_per_min}

---

##### `ModelName`<sup>Optional</sup> <a name="ModelName" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser.property.modelName"></a>

```csharp
public string ModelName { get; set; }
```

- *Type:* string

The name of a LLM model used for parsing. Format: 'projects/{project_id}/locations/{location}/publishers/{publisher}/models/{model}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#model_name VertexAiRagFile#model_name}

---

### VertexAiRagFileRagFileTransformationConfig <a name="VertexAiRagFileRagFileTransformationConfig" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFileRagFileTransformationConfig {
    VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig RagFileChunkingConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfig.property.ragFileChunkingConfig">RagFileChunkingConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a></code> | rag_file_chunking_config block. |

---

##### `RagFileChunkingConfig`<sup>Optional</sup> <a name="RagFileChunkingConfig" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfig.property.ragFileChunkingConfig"></a>

```csharp
public VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig RagFileChunkingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a>

rag_file_chunking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#rag_file_chunking_config VertexAiRagFile#rag_file_chunking_config}

---

### VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig <a name="VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig {
    VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking FixedLengthChunking = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig.property.fixedLengthChunking">FixedLengthChunking</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a></code> | fixed_length_chunking block. |

---

##### `FixedLengthChunking`<sup>Optional</sup> <a name="FixedLengthChunking" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig.property.fixedLengthChunking"></a>

```csharp
public VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking FixedLengthChunking { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a>

fixed_length_chunking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#fixed_length_chunking VertexAiRagFile#fixed_length_chunking}

---

### VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking <a name="VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking {
    double ChunkOverlap = null,
    double ChunkSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.property.chunkOverlap">ChunkOverlap</a></code> | <code>double</code> | The overlap between chunks. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.property.chunkSize">ChunkSize</a></code> | <code>double</code> | The size of the chunks. |

---

##### `ChunkOverlap`<sup>Optional</sup> <a name="ChunkOverlap" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.property.chunkOverlap"></a>

```csharp
public double ChunkOverlap { get; set; }
```

- *Type:* double

The overlap between chunks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#chunk_overlap VertexAiRagFile#chunk_overlap}

---

##### `ChunkSize`<sup>Optional</sup> <a name="ChunkSize" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.property.chunkSize"></a>

```csharp
public double ChunkSize { get; set; }
```

- *Type:* double

The size of the chunks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#chunk_size VertexAiRagFile#chunk_size}

---

### VertexAiRagFileTimeouts <a name="VertexAiRagFileTimeouts" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFileTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#create VertexAiRagFile#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#delete VertexAiRagFile#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#create VertexAiRagFile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#delete VertexAiRagFile#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiRagFileFileStatusList <a name="VertexAiRagFileFileStatusList" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFileFileStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.get"></a>

```csharp
private VertexAiRagFileFileStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiRagFileFileStatusOutputReference <a name="VertexAiRagFileFileStatusOutputReference" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFileFileStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.property.errorStatus">ErrorStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatus">VertexAiRagFileFileStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorStatus`<sup>Required</sup> <a name="ErrorStatus" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.property.errorStatus"></a>

```csharp
public string ErrorStatus { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagFileFileStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatus">VertexAiRagFileFileStatus</a>

---


### VertexAiRagFileGcsSourceOutputReference <a name="VertexAiRagFileGcsSourceOutputReference" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFileGcsSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.property.urisInput">UrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.property.uris">Uris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSource">VertexAiRagFileGcsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UrisInput`<sup>Optional</sup> <a name="UrisInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.property.urisInput"></a>

```csharp
public string[] UrisInput { get; }
```

- *Type:* string[]

---

##### `Uris`<sup>Required</sup> <a name="Uris" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.property.uris"></a>

```csharp
public string[] Uris { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagFileGcsSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSource">VertexAiRagFileGcsSource</a>

---


### VertexAiRagFileGoogleDriveSourceOutputReference <a name="VertexAiRagFileGoogleDriveSourceOutputReference" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFileGoogleDriveSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.putResourceIds">PutResourceIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceIds` <a name="PutResourceIds" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.putResourceIds"></a>

```csharp
private void PutResourceIds(VertexAiRagFileGoogleDriveSourceResourceIds Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.putResourceIds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds">VertexAiRagFileGoogleDriveSourceResourceIds</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.property.resourceIds">ResourceIds</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference">VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.property.resourceIdsInput">ResourceIdsInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds">VertexAiRagFileGoogleDriveSourceResourceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSource">VertexAiRagFileGoogleDriveSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceIds`<sup>Required</sup> <a name="ResourceIds" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.property.resourceIds"></a>

```csharp
public VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference ResourceIds { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference">VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference</a>

---

##### `ResourceIdsInput`<sup>Optional</sup> <a name="ResourceIdsInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.property.resourceIdsInput"></a>

```csharp
public VertexAiRagFileGoogleDriveSourceResourceIds ResourceIdsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds">VertexAiRagFileGoogleDriveSourceResourceIds</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagFileGoogleDriveSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSource">VertexAiRagFileGoogleDriveSource</a>

---


### VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference <a name="VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resetResourceType"></a>

```csharp
private void ResetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds">VertexAiRagFileGoogleDriveSourceResourceIds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagFileGoogleDriveSourceResourceIds InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds">VertexAiRagFileGoogleDriveSourceResourceIds</a>

---


### VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference <a name="VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resetMaxParsingRequestsPerMin">ResetMaxParsingRequestsPerMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resetProcessorName">ResetProcessorName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxParsingRequestsPerMin` <a name="ResetMaxParsingRequestsPerMin" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resetMaxParsingRequestsPerMin"></a>

```csharp
private void ResetMaxParsingRequestsPerMin()
```

##### `ResetProcessorName` <a name="ResetProcessorName" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resetProcessorName"></a>

```csharp
private void ResetProcessorName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.maxParsingRequestsPerMinInput">MaxParsingRequestsPerMinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.processorNameInput">ProcessorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.maxParsingRequestsPerMin">MaxParsingRequestsPerMin</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.processorName">ProcessorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser">VertexAiRagFileRagFileParsingConfigLayoutParser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxParsingRequestsPerMinInput`<sup>Optional</sup> <a name="MaxParsingRequestsPerMinInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.maxParsingRequestsPerMinInput"></a>

```csharp
public double MaxParsingRequestsPerMinInput { get; }
```

- *Type:* double

---

##### `ProcessorNameInput`<sup>Optional</sup> <a name="ProcessorNameInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.processorNameInput"></a>

```csharp
public string ProcessorNameInput { get; }
```

- *Type:* string

---

##### `MaxParsingRequestsPerMin`<sup>Required</sup> <a name="MaxParsingRequestsPerMin" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.maxParsingRequestsPerMin"></a>

```csharp
public double MaxParsingRequestsPerMin { get; }
```

- *Type:* double

---

##### `ProcessorName`<sup>Required</sup> <a name="ProcessorName" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.processorName"></a>

```csharp
public string ProcessorName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagFileRagFileParsingConfigLayoutParser InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser">VertexAiRagFileRagFileParsingConfigLayoutParser</a>

---


### VertexAiRagFileRagFileParsingConfigLlmParserOutputReference <a name="VertexAiRagFileRagFileParsingConfigLlmParserOutputReference" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFileRagFileParsingConfigLlmParserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetCustomParsingPrompt">ResetCustomParsingPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetMaxParsingRequestsPerMin">ResetMaxParsingRequestsPerMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetModelName">ResetModelName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomParsingPrompt` <a name="ResetCustomParsingPrompt" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetCustomParsingPrompt"></a>

```csharp
private void ResetCustomParsingPrompt()
```

##### `ResetMaxParsingRequestsPerMin` <a name="ResetMaxParsingRequestsPerMin" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetMaxParsingRequestsPerMin"></a>

```csharp
private void ResetMaxParsingRequestsPerMin()
```

##### `ResetModelName` <a name="ResetModelName" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetModelName"></a>

```csharp
private void ResetModelName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.customParsingPromptInput">CustomParsingPromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.maxParsingRequestsPerMinInput">MaxParsingRequestsPerMinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.modelNameInput">ModelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.customParsingPrompt">CustomParsingPrompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.maxParsingRequestsPerMin">MaxParsingRequestsPerMin</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.modelName">ModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser">VertexAiRagFileRagFileParsingConfigLlmParser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomParsingPromptInput`<sup>Optional</sup> <a name="CustomParsingPromptInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.customParsingPromptInput"></a>

```csharp
public string CustomParsingPromptInput { get; }
```

- *Type:* string

---

##### `MaxParsingRequestsPerMinInput`<sup>Optional</sup> <a name="MaxParsingRequestsPerMinInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.maxParsingRequestsPerMinInput"></a>

```csharp
public double MaxParsingRequestsPerMinInput { get; }
```

- *Type:* double

---

##### `ModelNameInput`<sup>Optional</sup> <a name="ModelNameInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.modelNameInput"></a>

```csharp
public string ModelNameInput { get; }
```

- *Type:* string

---

##### `CustomParsingPrompt`<sup>Required</sup> <a name="CustomParsingPrompt" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.customParsingPrompt"></a>

```csharp
public string CustomParsingPrompt { get; }
```

- *Type:* string

---

##### `MaxParsingRequestsPerMin`<sup>Required</sup> <a name="MaxParsingRequestsPerMin" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.maxParsingRequestsPerMin"></a>

```csharp
public double MaxParsingRequestsPerMin { get; }
```

- *Type:* double

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.modelName"></a>

```csharp
public string ModelName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagFileRagFileParsingConfigLlmParser InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser">VertexAiRagFileRagFileParsingConfigLlmParser</a>

---


### VertexAiRagFileRagFileParsingConfigOutputReference <a name="VertexAiRagFileRagFileParsingConfigOutputReference" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFileRagFileParsingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.putLayoutParser">PutLayoutParser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.putLlmParser">PutLlmParser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.resetLayoutParser">ResetLayoutParser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.resetLlmParser">ResetLlmParser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLayoutParser` <a name="PutLayoutParser" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.putLayoutParser"></a>

```csharp
private void PutLayoutParser(VertexAiRagFileRagFileParsingConfigLayoutParser Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.putLayoutParser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser">VertexAiRagFileRagFileParsingConfigLayoutParser</a>

---

##### `PutLlmParser` <a name="PutLlmParser" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.putLlmParser"></a>

```csharp
private void PutLlmParser(VertexAiRagFileRagFileParsingConfigLlmParser Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.putLlmParser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser">VertexAiRagFileRagFileParsingConfigLlmParser</a>

---

##### `ResetLayoutParser` <a name="ResetLayoutParser" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.resetLayoutParser"></a>

```csharp
private void ResetLayoutParser()
```

##### `ResetLlmParser` <a name="ResetLlmParser" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.resetLlmParser"></a>

```csharp
private void ResetLlmParser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.layoutParser">LayoutParser</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference">VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.llmParser">LlmParser</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference">VertexAiRagFileRagFileParsingConfigLlmParserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.layoutParserInput">LayoutParserInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser">VertexAiRagFileRagFileParsingConfigLayoutParser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.llmParserInput">LlmParserInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser">VertexAiRagFileRagFileParsingConfigLlmParser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig">VertexAiRagFileRagFileParsingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LayoutParser`<sup>Required</sup> <a name="LayoutParser" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.layoutParser"></a>

```csharp
public VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference LayoutParser { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference">VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference</a>

---

##### `LlmParser`<sup>Required</sup> <a name="LlmParser" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.llmParser"></a>

```csharp
public VertexAiRagFileRagFileParsingConfigLlmParserOutputReference LlmParser { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference">VertexAiRagFileRagFileParsingConfigLlmParserOutputReference</a>

---

##### `LayoutParserInput`<sup>Optional</sup> <a name="LayoutParserInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.layoutParserInput"></a>

```csharp
public VertexAiRagFileRagFileParsingConfigLayoutParser LayoutParserInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser">VertexAiRagFileRagFileParsingConfigLayoutParser</a>

---

##### `LlmParserInput`<sup>Optional</sup> <a name="LlmParserInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.llmParserInput"></a>

```csharp
public VertexAiRagFileRagFileParsingConfigLlmParser LlmParserInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser">VertexAiRagFileRagFileParsingConfigLlmParser</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagFileRagFileParsingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig">VertexAiRagFileRagFileParsingConfig</a>

---


### VertexAiRagFileRagFileTransformationConfigOutputReference <a name="VertexAiRagFileRagFileTransformationConfigOutputReference" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFileRagFileTransformationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.putRagFileChunkingConfig">PutRagFileChunkingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.resetRagFileChunkingConfig">ResetRagFileChunkingConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRagFileChunkingConfig` <a name="PutRagFileChunkingConfig" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.putRagFileChunkingConfig"></a>

```csharp
private void PutRagFileChunkingConfig(VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.putRagFileChunkingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a>

---

##### `ResetRagFileChunkingConfig` <a name="ResetRagFileChunkingConfig" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.resetRagFileChunkingConfig"></a>

```csharp
private void ResetRagFileChunkingConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.property.ragFileChunkingConfig">RagFileChunkingConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.property.ragFileChunkingConfigInput">RagFileChunkingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfig">VertexAiRagFileRagFileTransformationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RagFileChunkingConfig`<sup>Required</sup> <a name="RagFileChunkingConfig" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.property.ragFileChunkingConfig"></a>

```csharp
public VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference RagFileChunkingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference</a>

---

##### `RagFileChunkingConfigInput`<sup>Optional</sup> <a name="RagFileChunkingConfigInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.property.ragFileChunkingConfigInput"></a>

```csharp
public VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig RagFileChunkingConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagFileRagFileTransformationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfig">VertexAiRagFileRagFileTransformationConfig</a>

---


### VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference <a name="VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resetChunkOverlap">ResetChunkOverlap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resetChunkSize">ResetChunkSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChunkOverlap` <a name="ResetChunkOverlap" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resetChunkOverlap"></a>

```csharp
private void ResetChunkOverlap()
```

##### `ResetChunkSize` <a name="ResetChunkSize" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resetChunkSize"></a>

```csharp
private void ResetChunkSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkOverlapInput">ChunkOverlapInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkSizeInput">ChunkSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkOverlap">ChunkOverlap</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkSize">ChunkSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChunkOverlapInput`<sup>Optional</sup> <a name="ChunkOverlapInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkOverlapInput"></a>

```csharp
public double ChunkOverlapInput { get; }
```

- *Type:* double

---

##### `ChunkSizeInput`<sup>Optional</sup> <a name="ChunkSizeInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkSizeInput"></a>

```csharp
public double ChunkSizeInput { get; }
```

- *Type:* double

---

##### `ChunkOverlap`<sup>Required</sup> <a name="ChunkOverlap" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkOverlap"></a>

```csharp
public double ChunkOverlap { get; }
```

- *Type:* double

---

##### `ChunkSize`<sup>Required</sup> <a name="ChunkSize" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkSize"></a>

```csharp
public double ChunkSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a>

---


### VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference <a name="VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.putFixedLengthChunking">PutFixedLengthChunking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resetFixedLengthChunking">ResetFixedLengthChunking</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFixedLengthChunking` <a name="PutFixedLengthChunking" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.putFixedLengthChunking"></a>

```csharp
private void PutFixedLengthChunking(VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.putFixedLengthChunking.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a>

---

##### `ResetFixedLengthChunking` <a name="ResetFixedLengthChunking" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resetFixedLengthChunking"></a>

```csharp
private void ResetFixedLengthChunking()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fixedLengthChunking">FixedLengthChunking</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fixedLengthChunkingInput">FixedLengthChunkingInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FixedLengthChunking`<sup>Required</sup> <a name="FixedLengthChunking" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fixedLengthChunking"></a>

```csharp
public VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference FixedLengthChunking { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference</a>

---

##### `FixedLengthChunkingInput`<sup>Optional</sup> <a name="FixedLengthChunkingInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fixedLengthChunkingInput"></a>

```csharp
public VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking FixedLengthChunkingInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a>

---


### VertexAiRagFileTimeoutsOutputReference <a name="VertexAiRagFileTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagFileTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts">VertexAiRagFileTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiRagFileTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts">VertexAiRagFileTimeouts</a>

---



