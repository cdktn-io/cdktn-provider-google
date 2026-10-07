# `vertexAiRagCorpus` Submodule <a name="`vertexAiRagCorpus` Submodule" id="@cdktn/provider-google.vertexAiRagCorpus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiRagCorpus <a name="VertexAiRagCorpus" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus google_vertex_ai_rag_corpus}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpus(Construct Scope, string Id, VertexAiRagCorpusConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig">VertexAiRagCorpusConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig">VertexAiRagCorpusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVectorDbConfig">PutVectorDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVertexAiSearchConfig">PutVertexAiSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetVectorDbConfig">ResetVectorDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetVertexAiSearchConfig">ResetVertexAiSearchConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putEncryptionSpec"></a>

```csharp
private void PutEncryptionSpec(VertexAiRagCorpusEncryptionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putTimeouts"></a>

```csharp
private void PutTimeouts(VertexAiRagCorpusTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a>

---

##### `PutVectorDbConfig` <a name="PutVectorDbConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVectorDbConfig"></a>

```csharp
private void PutVectorDbConfig(VertexAiRagCorpusVectorDbConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVectorDbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a>

---

##### `PutVertexAiSearchConfig` <a name="PutVertexAiSearchConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVertexAiSearchConfig"></a>

```csharp
private void PutVertexAiSearchConfig(VertexAiRagCorpusVertexAiSearchConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVertexAiSearchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetEncryptionSpec"></a>

```csharp
private void ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVectorDbConfig` <a name="ResetVectorDbConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetVectorDbConfig"></a>

```csharp
private void ResetVectorDbConfig()
```

##### `ResetVertexAiSearchConfig` <a name="ResetVertexAiSearchConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetVertexAiSearchConfig"></a>

```csharp
private void ResetVertexAiSearchConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiRagCorpus resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiRagCorpus.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiRagCorpus.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiRagCorpus.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiRagCorpus.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VertexAiRagCorpus resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VertexAiRagCorpus to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VertexAiRagCorpus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiRagCorpus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.corpusStatus">CorpusStatus</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList">VertexAiRagCorpusCorpusStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference">VertexAiRagCorpusEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference">VertexAiRagCorpusTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vectorDbConfig">VectorDbConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference">VertexAiRagCorpusVectorDbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vertexAiSearchConfig">VertexAiSearchConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference">VertexAiRagCorpusVertexAiSearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vectorDbConfigInput">VectorDbConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vertexAiSearchConfigInput">VertexAiSearchConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CorpusStatus`<sup>Required</sup> <a name="CorpusStatus" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.corpusStatus"></a>

```csharp
public VertexAiRagCorpusCorpusStatusList CorpusStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList">VertexAiRagCorpusCorpusStatusList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.encryptionSpec"></a>

```csharp
public VertexAiRagCorpusEncryptionSpecOutputReference EncryptionSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference">VertexAiRagCorpusEncryptionSpecOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.timeouts"></a>

```csharp
public VertexAiRagCorpusTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference">VertexAiRagCorpusTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `VectorDbConfig`<sup>Required</sup> <a name="VectorDbConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vectorDbConfig"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigOutputReference VectorDbConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference">VertexAiRagCorpusVectorDbConfigOutputReference</a>

---

##### `VertexAiSearchConfig`<sup>Required</sup> <a name="VertexAiSearchConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vertexAiSearchConfig"></a>

```csharp
public VertexAiRagCorpusVertexAiSearchConfigOutputReference VertexAiSearchConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference">VertexAiRagCorpusVertexAiSearchConfigOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.encryptionSpecInput"></a>

```csharp
public VertexAiRagCorpusEncryptionSpec EncryptionSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.timeoutsInput"></a>

```csharp
public IResolvable|VertexAiRagCorpusTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a>

---

##### `VectorDbConfigInput`<sup>Optional</sup> <a name="VectorDbConfigInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vectorDbConfigInput"></a>

```csharp
public VertexAiRagCorpusVectorDbConfig VectorDbConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a>

---

##### `VertexAiSearchConfigInput`<sup>Optional</sup> <a name="VertexAiSearchConfigInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vertexAiSearchConfigInput"></a>

```csharp
public VertexAiRagCorpusVertexAiSearchConfig VertexAiSearchConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiRagCorpusConfig <a name="VertexAiRagCorpusConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string Region,
    string DeletionPolicy = null,
    string Description = null,
    VertexAiRagCorpusEncryptionSpec EncryptionSpec = null,
    string Id = null,
    string Project = null,
    VertexAiRagCorpusTimeouts Timeouts = null,
    VertexAiRagCorpusVectorDbConfig VectorDbConfig = null,
    VertexAiRagCorpusVertexAiSearchConfig VertexAiSearchConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.region">Region</a></code> | <code>string</code> | The region of the RagCorpus. eg europe-west4. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.description">Description</a></code> | <code>string</code> | Optional. The description of the RagCorpus. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#id VertexAiRagCorpus#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#project VertexAiRagCorpus#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.vectorDbConfig">VectorDbConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a></code> | vector_db_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.vertexAiSearchConfig">VertexAiSearchConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a></code> | vertex_ai_search_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Required.

The display name of the RagCorpus. The name can be up to 128
characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#display_name VertexAiRagCorpus#display_name}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the RagCorpus. eg europe-west4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#region VertexAiRagCorpus#region}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#deletion_policy VertexAiRagCorpus#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. The description of the RagCorpus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#description VertexAiRagCorpus#description}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.encryptionSpec"></a>

```csharp
public VertexAiRagCorpusEncryptionSpec EncryptionSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#encryption_spec VertexAiRagCorpus#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#id VertexAiRagCorpus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#project VertexAiRagCorpus#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.timeouts"></a>

```csharp
public VertexAiRagCorpusTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#timeouts VertexAiRagCorpus#timeouts}

---

##### `VectorDbConfig`<sup>Optional</sup> <a name="VectorDbConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.vectorDbConfig"></a>

```csharp
public VertexAiRagCorpusVectorDbConfig VectorDbConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a>

vector_db_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vector_db_config VertexAiRagCorpus#vector_db_config}

---

##### `VertexAiSearchConfig`<sup>Optional</sup> <a name="VertexAiSearchConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.vertexAiSearchConfig"></a>

```csharp
public VertexAiRagCorpusVertexAiSearchConfig VertexAiSearchConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a>

vertex_ai_search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vertex_ai_search_config VertexAiRagCorpus#vertex_ai_search_config}

---

### VertexAiRagCorpusCorpusStatus <a name="VertexAiRagCorpusCorpusStatus" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusCorpusStatus {

};
```


### VertexAiRagCorpusEncryptionSpec <a name="VertexAiRagCorpusEncryptionSpec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusEncryptionSpec {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | Required. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

Required.

The Cloud KMS resource identifier of the customer managed
encryption key used to protect the resource. Has the form:
projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key.
The key needs to be in the same region as where the resource is
created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#kms_key_name VertexAiRagCorpus#kms_key_name}

---

### VertexAiRagCorpusTimeouts <a name="VertexAiRagCorpusTimeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#create VertexAiRagCorpus#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#delete VertexAiRagCorpus#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#update VertexAiRagCorpus#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#create VertexAiRagCorpus#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#delete VertexAiRagCorpus#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#update VertexAiRagCorpus#update}.

---

### VertexAiRagCorpusVectorDbConfig <a name="VertexAiRagCorpusVectorDbConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusVectorDbConfig {
    VertexAiRagCorpusVectorDbConfigApiAuth ApiAuth = null,
    VertexAiRagCorpusVectorDbConfigPinecone Pinecone = null,
    VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig RagEmbeddingModelConfig = null,
    VertexAiRagCorpusVectorDbConfigRagManagedDb RagManagedDb = null,
    VertexAiRagCorpusVectorDbConfigVertexVectorSearch VertexVectorSearch = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.apiAuth">ApiAuth</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a></code> | api_auth block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.pinecone">Pinecone</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a></code> | pinecone block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.ragEmbeddingModelConfig">RagEmbeddingModelConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | rag_embedding_model_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.ragManagedDb">RagManagedDb</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | rag_managed_db block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.vertexVectorSearch">VertexVectorSearch</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | vertex_vector_search block. |

---

##### `ApiAuth`<sup>Optional</sup> <a name="ApiAuth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.apiAuth"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigApiAuth ApiAuth { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a>

api_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#api_auth VertexAiRagCorpus#api_auth}

---

##### `Pinecone`<sup>Optional</sup> <a name="Pinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.pinecone"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigPinecone Pinecone { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a>

pinecone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#pinecone VertexAiRagCorpus#pinecone}

---

##### `RagEmbeddingModelConfig`<sup>Optional</sup> <a name="RagEmbeddingModelConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.ragEmbeddingModelConfig"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig RagEmbeddingModelConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

rag_embedding_model_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#rag_embedding_model_config VertexAiRagCorpus#rag_embedding_model_config}

---

##### `RagManagedDb`<sup>Optional</sup> <a name="RagManagedDb" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.ragManagedDb"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigRagManagedDb RagManagedDb { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a>

rag_managed_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#rag_managed_db VertexAiRagCorpus#rag_managed_db}

---

##### `VertexVectorSearch`<sup>Optional</sup> <a name="VertexVectorSearch" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.vertexVectorSearch"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigVertexVectorSearch VertexVectorSearch { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

vertex_vector_search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vertex_vector_search VertexAiRagCorpus#vertex_vector_search}

---

### VertexAiRagCorpusVectorDbConfigApiAuth <a name="VertexAiRagCorpusVectorDbConfigApiAuth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusVectorDbConfigApiAuth {
    VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig ApiKeyConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | api_key_config block. |

---

##### `ApiKeyConfig`<sup>Optional</sup> <a name="ApiKeyConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth.property.apiKeyConfig"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig ApiKeyConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#api_key_config VertexAiRagCorpus#api_key_config}

---

### VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig <a name="VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig {
    string ApiKeySecretVersion = null,
    string ApiKeyString = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeySecretVersion">ApiKeySecretVersion</a></code> | <code>string</code> | The SecretManager secret version resource name storing API key. e.g. projects/{project}/secrets/{secret}/versions/{version}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeyString">ApiKeyString</a></code> | <code>string</code> | The API key string. |

---

##### `ApiKeySecretVersion`<sup>Optional</sup> <a name="ApiKeySecretVersion" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeySecretVersion"></a>

```csharp
public string ApiKeySecretVersion { get; set; }
```

- *Type:* string

The SecretManager secret version resource name storing API key. e.g. projects/{project}/secrets/{secret}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#api_key_secret_version VertexAiRagCorpus#api_key_secret_version}

---

##### `ApiKeyString`<sup>Optional</sup> <a name="ApiKeyString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeyString"></a>

```csharp
public string ApiKeyString { get; set; }
```

- *Type:* string

The API key string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#api_key_string VertexAiRagCorpus#api_key_string}

---

### VertexAiRagCorpusVectorDbConfigPinecone <a name="VertexAiRagCorpusVectorDbConfigPinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusVectorDbConfigPinecone {
    string IndexName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone.property.indexName">IndexName</a></code> | <code>string</code> | Pinecone index name. This value cannot be changed after it's set. |

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone.property.indexName"></a>

```csharp
public string IndexName { get; set; }
```

- *Type:* string

Pinecone index name. This value cannot be changed after it's set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#index_name VertexAiRagCorpus#index_name}

---

### VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig <a name="VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig {
    VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint VertexPredictionEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.property.vertexPredictionEndpoint">VertexPredictionEndpoint</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | vertex_prediction_endpoint block. |

---

##### `VertexPredictionEndpoint`<sup>Optional</sup> <a name="VertexPredictionEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.property.vertexPredictionEndpoint"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint VertexPredictionEndpoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

vertex_prediction_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vertex_prediction_endpoint VertexAiRagCorpus#vertex_prediction_endpoint}

---

### VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint <a name="VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint {
    string Endpoint
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.property.endpoint">Endpoint</a></code> | <code>string</code> | Required. The endpoint resource name. Format: projects/{project}/locations/{location}/publishers/{publisher}/models/{model} or projects/{project}/locations/{location}/endpoints/{endpoint}. |

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

Required. The endpoint resource name. Format: projects/{project}/locations/{location}/publishers/{publisher}/models/{model} or projects/{project}/locations/{location}/endpoints/{endpoint}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#endpoint VertexAiRagCorpus#endpoint}

---

### VertexAiRagCorpusVectorDbConfigRagManagedDb <a name="VertexAiRagCorpusVectorDbConfigRagManagedDb" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusVectorDbConfigRagManagedDb {
    VertexAiRagCorpusVectorDbConfigRagManagedDbAnn Ann = null,
    VertexAiRagCorpusVectorDbConfigRagManagedDbKnn Knn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.property.ann">Ann</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | ann block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.property.knn">Knn</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | knn block. |

---

##### `Ann`<sup>Optional</sup> <a name="Ann" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.property.ann"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigRagManagedDbAnn Ann { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

ann block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#ann VertexAiRagCorpus#ann}

---

##### `Knn`<sup>Optional</sup> <a name="Knn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.property.knn"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigRagManagedDbKnn Knn { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

knn block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#knn VertexAiRagCorpus#knn}

---

### VertexAiRagCorpusVectorDbConfigRagManagedDbAnn <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbAnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusVectorDbConfigRagManagedDbAnn {
    double LeafCount = null,
    double TreeDepth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.leafCount">LeafCount</a></code> | <code>double</code> | Number of leaf nodes in the tree-based structure. Default value is 500. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.treeDepth">TreeDepth</a></code> | <code>double</code> | The depth of the tree-based structure. Only depth values of 2 and 3 are supported. Default value is 2. |

---

##### `LeafCount`<sup>Optional</sup> <a name="LeafCount" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.leafCount"></a>

```csharp
public double LeafCount { get; set; }
```

- *Type:* double

Number of leaf nodes in the tree-based structure. Default value is 500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#leaf_count VertexAiRagCorpus#leaf_count}

---

##### `TreeDepth`<sup>Optional</sup> <a name="TreeDepth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.treeDepth"></a>

```csharp
public double TreeDepth { get; set; }
```

- *Type:* double

The depth of the tree-based structure. Only depth values of 2 and 3 are supported. Default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#tree_depth VertexAiRagCorpus#tree_depth}

---

### VertexAiRagCorpusVectorDbConfigRagManagedDbKnn <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbKnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusVectorDbConfigRagManagedDbKnn {

};
```


### VertexAiRagCorpusVectorDbConfigVertexVectorSearch <a name="VertexAiRagCorpusVectorDbConfigVertexVectorSearch" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusVectorDbConfigVertexVectorSearch {
    string Index,
    string IndexEndpoint
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.index">Index</a></code> | <code>string</code> | The resource name of the Index. Format: projects/{project}/locations/{location}/indexes/{index}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.indexEndpoint">IndexEndpoint</a></code> | <code>string</code> | The resource name of the Index Endpoint. Format: projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}. |

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.index"></a>

```csharp
public string Index { get; set; }
```

- *Type:* string

The resource name of the Index. Format: projects/{project}/locations/{location}/indexes/{index}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#index VertexAiRagCorpus#index}

---

##### `IndexEndpoint`<sup>Required</sup> <a name="IndexEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.indexEndpoint"></a>

```csharp
public string IndexEndpoint { get; set; }
```

- *Type:* string

The resource name of the Index Endpoint. Format: projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#index_endpoint VertexAiRagCorpus#index_endpoint}

---

### VertexAiRagCorpusVertexAiSearchConfig <a name="VertexAiRagCorpusVertexAiSearchConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusVertexAiSearchConfig {
    string ServingConfig
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig.property.servingConfig">ServingConfig</a></code> | <code>string</code> | Vertex AI Search Serving Config resource full name. For example, projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config} or projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/servingConfigs/{serving_config}. |

---

##### `ServingConfig`<sup>Required</sup> <a name="ServingConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig.property.servingConfig"></a>

```csharp
public string ServingConfig { get; set; }
```

- *Type:* string

Vertex AI Search Serving Config resource full name. For example, projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config} or projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/servingConfigs/{serving_config}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#serving_config VertexAiRagCorpus#serving_config}

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiRagCorpusCorpusStatusList <a name="VertexAiRagCorpusCorpusStatusList" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusCorpusStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.get"></a>

```csharp
private VertexAiRagCorpusCorpusStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiRagCorpusCorpusStatusOutputReference <a name="VertexAiRagCorpusCorpusStatusOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusCorpusStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.errorStatus">ErrorStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatus">VertexAiRagCorpusCorpusStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorStatus`<sup>Required</sup> <a name="ErrorStatus" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.errorStatus"></a>

```csharp
public string ErrorStatus { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagCorpusCorpusStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatus">VertexAiRagCorpusCorpusStatus</a>

---


### VertexAiRagCorpusEncryptionSpecOutputReference <a name="VertexAiRagCorpusEncryptionSpecOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusEncryptionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagCorpusEncryptionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a>

---


### VertexAiRagCorpusTimeoutsOutputReference <a name="VertexAiRagCorpusTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiRagCorpusTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a>

---


### VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference <a name="VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeySecretVersion">ResetApiKeySecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeyString">ResetApiKeyString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKeySecretVersion` <a name="ResetApiKeySecretVersion" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeySecretVersion"></a>

```csharp
private void ResetApiKeySecretVersion()
```

##### `ResetApiKeyString` <a name="ResetApiKeyString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeyString"></a>

```csharp
private void ResetApiKeyString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersionInput">ApiKeySecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyStringInput">ApiKeyStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersion">ApiKeySecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyString">ApiKeyString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeySecretVersionInput`<sup>Optional</sup> <a name="ApiKeySecretVersionInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```csharp
public string ApiKeySecretVersionInput { get; }
```

- *Type:* string

---

##### `ApiKeyStringInput`<sup>Optional</sup> <a name="ApiKeyStringInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyStringInput"></a>

```csharp
public string ApiKeyStringInput { get; }
```

- *Type:* string

---

##### `ApiKeySecretVersion`<sup>Required</sup> <a name="ApiKeySecretVersion" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```csharp
public string ApiKeySecretVersion { get; }
```

- *Type:* string

---

##### `ApiKeyString`<sup>Required</sup> <a name="ApiKeyString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyString"></a>

```csharp
public string ApiKeyString { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---


### VertexAiRagCorpusVectorDbConfigApiAuthOutputReference <a name="VertexAiRagCorpusVectorDbConfigApiAuthOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusVectorDbConfigApiAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig">PutApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resetApiKeyConfig">ResetApiKeyConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKeyConfig` <a name="PutApiKeyConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig"></a>

```csharp
private void PutApiKeyConfig(VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---

##### `ResetApiKeyConfig` <a name="ResetApiKeyConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resetApiKeyConfig"></a>

```csharp
private void ResetApiKeyConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfigInput">ApiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyConfig`<sup>Required</sup> <a name="ApiKeyConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfig"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference ApiKeyConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference</a>

---

##### `ApiKeyConfigInput`<sup>Optional</sup> <a name="ApiKeyConfigInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfigInput"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig ApiKeyConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigApiAuth InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a>

---


### VertexAiRagCorpusVectorDbConfigOutputReference <a name="VertexAiRagCorpusVectorDbConfigOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusVectorDbConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth">PutApiAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putPinecone">PutPinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig">PutRagEmbeddingModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb">PutRagManagedDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch">PutVertexVectorSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetApiAuth">ResetApiAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetPinecone">ResetPinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetRagEmbeddingModelConfig">ResetRagEmbeddingModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetRagManagedDb">ResetRagManagedDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetVertexVectorSearch">ResetVertexVectorSearch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiAuth` <a name="PutApiAuth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth"></a>

```csharp
private void PutApiAuth(VertexAiRagCorpusVectorDbConfigApiAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a>

---

##### `PutPinecone` <a name="PutPinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putPinecone"></a>

```csharp
private void PutPinecone(VertexAiRagCorpusVectorDbConfigPinecone Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putPinecone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a>

---

##### `PutRagEmbeddingModelConfig` <a name="PutRagEmbeddingModelConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig"></a>

```csharp
private void PutRagEmbeddingModelConfig(VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---

##### `PutRagManagedDb` <a name="PutRagManagedDb" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb"></a>

```csharp
private void PutRagManagedDb(VertexAiRagCorpusVectorDbConfigRagManagedDb Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---

##### `PutVertexVectorSearch` <a name="PutVertexVectorSearch" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch"></a>

```csharp
private void PutVertexVectorSearch(VertexAiRagCorpusVectorDbConfigVertexVectorSearch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---

##### `ResetApiAuth` <a name="ResetApiAuth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetApiAuth"></a>

```csharp
private void ResetApiAuth()
```

##### `ResetPinecone` <a name="ResetPinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetPinecone"></a>

```csharp
private void ResetPinecone()
```

##### `ResetRagEmbeddingModelConfig` <a name="ResetRagEmbeddingModelConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetRagEmbeddingModelConfig"></a>

```csharp
private void ResetRagEmbeddingModelConfig()
```

##### `ResetRagManagedDb` <a name="ResetRagManagedDb" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetRagManagedDb"></a>

```csharp
private void ResetRagManagedDb()
```

##### `ResetVertexVectorSearch` <a name="ResetVertexVectorSearch" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetVertexVectorSearch"></a>

```csharp
private void ResetVertexVectorSearch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuth">ApiAuth</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference">VertexAiRagCorpusVectorDbConfigApiAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.pinecone">Pinecone</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference">VertexAiRagCorpusVectorDbConfigPineconeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfig">RagEmbeddingModelConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDb">RagManagedDb</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearch">VertexVectorSearch</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference">VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuthInput">ApiAuthInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.pineconeInput">PineconeInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfigInput">RagEmbeddingModelConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDbInput">RagManagedDbInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearchInput">VertexVectorSearchInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiAuth`<sup>Required</sup> <a name="ApiAuth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuth"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigApiAuthOutputReference ApiAuth { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference">VertexAiRagCorpusVectorDbConfigApiAuthOutputReference</a>

---

##### `Pinecone`<sup>Required</sup> <a name="Pinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.pinecone"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigPineconeOutputReference Pinecone { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference">VertexAiRagCorpusVectorDbConfigPineconeOutputReference</a>

---

##### `RagEmbeddingModelConfig`<sup>Required</sup> <a name="RagEmbeddingModelConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfig"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference RagEmbeddingModelConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference</a>

---

##### `RagManagedDb`<sup>Required</sup> <a name="RagManagedDb" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDb"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference RagManagedDb { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference</a>

---

##### `VertexVectorSearch`<sup>Required</sup> <a name="VertexVectorSearch" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearch"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference VertexVectorSearch { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference">VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference</a>

---

##### `ApiAuthInput`<sup>Optional</sup> <a name="ApiAuthInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuthInput"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigApiAuth ApiAuthInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a>

---

##### `PineconeInput`<sup>Optional</sup> <a name="PineconeInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.pineconeInput"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigPinecone PineconeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a>

---

##### `RagEmbeddingModelConfigInput`<sup>Optional</sup> <a name="RagEmbeddingModelConfigInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfigInput"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig RagEmbeddingModelConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---

##### `RagManagedDbInput`<sup>Optional</sup> <a name="RagManagedDbInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDbInput"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigRagManagedDb RagManagedDbInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---

##### `VertexVectorSearchInput`<sup>Optional</sup> <a name="VertexVectorSearchInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearchInput"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigVertexVectorSearch VertexVectorSearchInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagCorpusVectorDbConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a>

---


### VertexAiRagCorpusVectorDbConfigPineconeOutputReference <a name="VertexAiRagCorpusVectorDbConfigPineconeOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusVectorDbConfigPineconeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexNameInput">IndexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexName">IndexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexNameInput"></a>

```csharp
public string IndexNameInput { get; }
```

- *Type:* string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexName"></a>

```csharp
public string IndexName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigPinecone InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a>

---


### VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint">PutVertexPredictionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resetVertexPredictionEndpoint">ResetVertexPredictionEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVertexPredictionEndpoint` <a name="PutVertexPredictionEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint"></a>

```csharp
private void PutVertexPredictionEndpoint(VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---

##### `ResetVertexPredictionEndpoint` <a name="ResetVertexPredictionEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resetVertexPredictionEndpoint"></a>

```csharp
private void ResetVertexPredictionEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpoint">VertexPredictionEndpoint</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpointInput">VertexPredictionEndpointInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VertexPredictionEndpoint`<sup>Required</sup> <a name="VertexPredictionEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpoint"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference VertexPredictionEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference</a>

---

##### `VertexPredictionEndpointInput`<sup>Optional</sup> <a name="VertexPredictionEndpointInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpointInput"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint VertexPredictionEndpointInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---


### VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.modelVersionId">ModelVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `ModelVersionId`<sup>Required</sup> <a name="ModelVersionId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.modelVersionId"></a>

```csharp
public string ModelVersionId { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---


### VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetLeafCount">ResetLeafCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetTreeDepth">ResetTreeDepth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLeafCount` <a name="ResetLeafCount" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetLeafCount"></a>

```csharp
private void ResetLeafCount()
```

##### `ResetTreeDepth` <a name="ResetTreeDepth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetTreeDepth"></a>

```csharp
private void ResetTreeDepth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCountInput">LeafCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepthInput">TreeDepthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCount">LeafCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepth">TreeDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LeafCountInput`<sup>Optional</sup> <a name="LeafCountInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCountInput"></a>

```csharp
public double LeafCountInput { get; }
```

- *Type:* double

---

##### `TreeDepthInput`<sup>Optional</sup> <a name="TreeDepthInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepthInput"></a>

```csharp
public double TreeDepthInput { get; }
```

- *Type:* double

---

##### `LeafCount`<sup>Required</sup> <a name="LeafCount" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCount"></a>

```csharp
public double LeafCount { get; }
```

- *Type:* double

---

##### `TreeDepth`<sup>Required</sup> <a name="TreeDepth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepth"></a>

```csharp
public double TreeDepth { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigRagManagedDbAnn InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---


### VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigRagManagedDbKnn InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---


### VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn">PutAnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn">PutKnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetAnn">ResetAnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetKnn">ResetKnn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnn` <a name="PutAnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn"></a>

```csharp
private void PutAnn(VertexAiRagCorpusVectorDbConfigRagManagedDbAnn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---

##### `PutKnn` <a name="PutKnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn"></a>

```csharp
private void PutKnn(VertexAiRagCorpusVectorDbConfigRagManagedDbKnn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---

##### `ResetAnn` <a name="ResetAnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetAnn"></a>

```csharp
private void ResetAnn()
```

##### `ResetKnn` <a name="ResetKnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetKnn"></a>

```csharp
private void ResetKnn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.ann">Ann</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knn">Knn</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.annInput">AnnInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knnInput">KnnInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ann`<sup>Required</sup> <a name="Ann" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.ann"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference Ann { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference</a>

---

##### `Knn`<sup>Required</sup> <a name="Knn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knn"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference Knn { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference</a>

---

##### `AnnInput`<sup>Optional</sup> <a name="AnnInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.annInput"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigRagManagedDbAnn AnnInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---

##### `KnnInput`<sup>Optional</sup> <a name="KnnInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knnInput"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigRagManagedDbKnn KnnInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigRagManagedDb InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---


### VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference <a name="VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpointInput">IndexEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexInput">IndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.index">Index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpoint">IndexEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IndexEndpointInput`<sup>Optional</sup> <a name="IndexEndpointInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpointInput"></a>

```csharp
public string IndexEndpointInput { get; }
```

- *Type:* string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexInput"></a>

```csharp
public string IndexInput { get; }
```

- *Type:* string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.index"></a>

```csharp
public string Index { get; }
```

- *Type:* string

---

##### `IndexEndpoint`<sup>Required</sup> <a name="IndexEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpoint"></a>

```csharp
public string IndexEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagCorpusVectorDbConfigVertexVectorSearch InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---


### VertexAiRagCorpusVertexAiSearchConfigOutputReference <a name="VertexAiRagCorpusVertexAiSearchConfigOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiRagCorpusVertexAiSearchConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfigInput">ServingConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfig">ServingConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServingConfigInput`<sup>Optional</sup> <a name="ServingConfigInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfigInput"></a>

```csharp
public string ServingConfigInput { get; }
```

- *Type:* string

---

##### `ServingConfig`<sup>Required</sup> <a name="ServingConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfig"></a>

```csharp
public string ServingConfig { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagCorpusVertexAiSearchConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a>

---



