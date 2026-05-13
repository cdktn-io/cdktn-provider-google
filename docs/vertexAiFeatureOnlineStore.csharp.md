# `vertexAiFeatureOnlineStore` Submodule <a name="`vertexAiFeatureOnlineStore` Submodule" id="@cdktn/provider-google.vertexAiFeatureOnlineStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiFeatureOnlineStore <a name="VertexAiFeatureOnlineStore" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store google_vertex_ai_feature_online_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiFeatureOnlineStore(Construct Scope, string Id, VertexAiFeatureOnlineStoreConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig">VertexAiFeatureOnlineStoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig">VertexAiFeatureOnlineStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putBigtable">PutBigtable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putDedicatedServingEndpoint">PutDedicatedServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putOptimized">PutOptimized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetBigtable">ResetBigtable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetDedicatedServingEndpoint">ResetDedicatedServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetOptimized">ResetOptimized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBigtable` <a name="PutBigtable" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putBigtable"></a>

```csharp
private void PutBigtable(VertexAiFeatureOnlineStoreBigtable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putBigtable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable">VertexAiFeatureOnlineStoreBigtable</a>

---

##### `PutDedicatedServingEndpoint` <a name="PutDedicatedServingEndpoint" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putDedicatedServingEndpoint"></a>

```csharp
private void PutDedicatedServingEndpoint(VertexAiFeatureOnlineStoreDedicatedServingEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putDedicatedServingEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint">VertexAiFeatureOnlineStoreDedicatedServingEndpoint</a>

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putEncryptionSpec"></a>

```csharp
private void PutEncryptionSpec(VertexAiFeatureOnlineStoreEncryptionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpec">VertexAiFeatureOnlineStoreEncryptionSpec</a>

---

##### `PutOptimized` <a name="PutOptimized" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putOptimized"></a>

```csharp
private void PutOptimized(VertexAiFeatureOnlineStoreOptimized Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putOptimized.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized">VertexAiFeatureOnlineStoreOptimized</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putTimeouts"></a>

```csharp
private void PutTimeouts(VertexAiFeatureOnlineStoreTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts">VertexAiFeatureOnlineStoreTimeouts</a>

---

##### `ResetBigtable` <a name="ResetBigtable" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetBigtable"></a>

```csharp
private void ResetBigtable()
```

##### `ResetDedicatedServingEndpoint` <a name="ResetDedicatedServingEndpoint" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetDedicatedServingEndpoint"></a>

```csharp
private void ResetDedicatedServingEndpoint()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetEncryptionSpec"></a>

```csharp
private void ResetEncryptionSpec()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetOptimized` <a name="ResetOptimized" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetOptimized"></a>

```csharp
private void ResetOptimized()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiFeatureOnlineStore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiFeatureOnlineStore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiFeatureOnlineStore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiFeatureOnlineStore.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiFeatureOnlineStore.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VertexAiFeatureOnlineStore resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VertexAiFeatureOnlineStore to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VertexAiFeatureOnlineStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiFeatureOnlineStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.bigtable">Bigtable</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference">VertexAiFeatureOnlineStoreBigtableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.dedicatedServingEndpoint">DedicatedServingEndpoint</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference">VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference">VertexAiFeatureOnlineStoreEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.optimized">Optimized</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference">VertexAiFeatureOnlineStoreOptimizedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference">VertexAiFeatureOnlineStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.bigtableInput">BigtableInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable">VertexAiFeatureOnlineStoreBigtable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.dedicatedServingEndpointInput">DedicatedServingEndpointInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint">VertexAiFeatureOnlineStoreDedicatedServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpec">VertexAiFeatureOnlineStoreEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.optimizedInput">OptimizedInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized">VertexAiFeatureOnlineStoreOptimized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts">VertexAiFeatureOnlineStoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.forceDestroy">ForceDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Bigtable`<sup>Required</sup> <a name="Bigtable" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.bigtable"></a>

```csharp
public VertexAiFeatureOnlineStoreBigtableOutputReference Bigtable { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference">VertexAiFeatureOnlineStoreBigtableOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DedicatedServingEndpoint`<sup>Required</sup> <a name="DedicatedServingEndpoint" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.dedicatedServingEndpoint"></a>

```csharp
public VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference DedicatedServingEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference">VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.encryptionSpec"></a>

```csharp
public VertexAiFeatureOnlineStoreEncryptionSpecOutputReference EncryptionSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference">VertexAiFeatureOnlineStoreEncryptionSpecOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Optimized`<sup>Required</sup> <a name="Optimized" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.optimized"></a>

```csharp
public VertexAiFeatureOnlineStoreOptimizedOutputReference Optimized { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference">VertexAiFeatureOnlineStoreOptimizedOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.timeouts"></a>

```csharp
public VertexAiFeatureOnlineStoreTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference">VertexAiFeatureOnlineStoreTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `BigtableInput`<sup>Optional</sup> <a name="BigtableInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.bigtableInput"></a>

```csharp
public VertexAiFeatureOnlineStoreBigtable BigtableInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable">VertexAiFeatureOnlineStoreBigtable</a>

---

##### `DedicatedServingEndpointInput`<sup>Optional</sup> <a name="DedicatedServingEndpointInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.dedicatedServingEndpointInput"></a>

```csharp
public VertexAiFeatureOnlineStoreDedicatedServingEndpoint DedicatedServingEndpointInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint">VertexAiFeatureOnlineStoreDedicatedServingEndpoint</a>

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.encryptionSpecInput"></a>

```csharp
public VertexAiFeatureOnlineStoreEncryptionSpec EncryptionSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpec">VertexAiFeatureOnlineStoreEncryptionSpec</a>

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.forceDestroyInput"></a>

```csharp
public bool|IResolvable ForceDestroyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OptimizedInput`<sup>Optional</sup> <a name="OptimizedInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.optimizedInput"></a>

```csharp
public VertexAiFeatureOnlineStoreOptimized OptimizedInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized">VertexAiFeatureOnlineStoreOptimized</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.timeoutsInput"></a>

```csharp
public IResolvable|VertexAiFeatureOnlineStoreTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts">VertexAiFeatureOnlineStoreTimeouts</a>

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.forceDestroy"></a>

```csharp
public bool|IResolvable ForceDestroy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiFeatureOnlineStoreBigtable <a name="VertexAiFeatureOnlineStoreBigtable" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiFeatureOnlineStoreBigtable {
    VertexAiFeatureOnlineStoreBigtableAutoScaling AutoScaling,
    bool|IResolvable EnableDirectBigtableAccess = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable.property.autoScaling">AutoScaling</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling">VertexAiFeatureOnlineStoreBigtableAutoScaling</a></code> | auto_scaling block. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable.property.enableDirectBigtableAccess">EnableDirectBigtableAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Optional. If true, enable direct access to the Bigtable instance. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable.property.zone">Zone</a></code> | <code>string</code> | The zone where the Bigtable instance will be created. |

---

##### `AutoScaling`<sup>Required</sup> <a name="AutoScaling" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable.property.autoScaling"></a>

```csharp
public VertexAiFeatureOnlineStoreBigtableAutoScaling AutoScaling { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling">VertexAiFeatureOnlineStoreBigtableAutoScaling</a>

auto_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#auto_scaling VertexAiFeatureOnlineStore#auto_scaling}

---

##### `EnableDirectBigtableAccess`<sup>Optional</sup> <a name="EnableDirectBigtableAccess" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable.property.enableDirectBigtableAccess"></a>

```csharp
public bool|IResolvable EnableDirectBigtableAccess { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Optional. If true, enable direct access to the Bigtable instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#enable_direct_bigtable_access VertexAiFeatureOnlineStore#enable_direct_bigtable_access}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

The zone where the Bigtable instance will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#zone VertexAiFeatureOnlineStore#zone}

---

### VertexAiFeatureOnlineStoreBigtableAutoScaling <a name="VertexAiFeatureOnlineStoreBigtableAutoScaling" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiFeatureOnlineStoreBigtableAutoScaling {
    double MaxNodeCount,
    double MinNodeCount,
    double CpuUtilizationTarget = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling.property.maxNodeCount">MaxNodeCount</a></code> | <code>double</code> | The maximum number of nodes to scale up to. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling.property.minNodeCount">MinNodeCount</a></code> | <code>double</code> | The minimum number of nodes to scale down to. Must be greater than or equal to 1. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling.property.cpuUtilizationTarget">CpuUtilizationTarget</a></code> | <code>double</code> | A percentage of the cluster's CPU capacity. |

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling.property.maxNodeCount"></a>

```csharp
public double MaxNodeCount { get; set; }
```

- *Type:* double

The maximum number of nodes to scale up to.

Must be greater than or equal to minNodeCount, and less than or equal to 10 times of 'minNodeCount'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#max_node_count VertexAiFeatureOnlineStore#max_node_count}

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling.property.minNodeCount"></a>

```csharp
public double MinNodeCount { get; set; }
```

- *Type:* double

The minimum number of nodes to scale down to. Must be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#min_node_count VertexAiFeatureOnlineStore#min_node_count}

---

##### `CpuUtilizationTarget`<sup>Optional</sup> <a name="CpuUtilizationTarget" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling.property.cpuUtilizationTarget"></a>

```csharp
public double CpuUtilizationTarget { get; set; }
```

- *Type:* double

A percentage of the cluster's CPU capacity.

Can be from 10% to 80%. When a cluster's CPU utilization exceeds the target that you have set, Bigtable immediately adds nodes to the cluster. When CPU utilization is substantially lower than the target, Bigtable removes nodes. If not set will default to 50%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#cpu_utilization_target VertexAiFeatureOnlineStore#cpu_utilization_target}

---

### VertexAiFeatureOnlineStoreConfig <a name="VertexAiFeatureOnlineStoreConfig" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiFeatureOnlineStoreConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    VertexAiFeatureOnlineStoreBigtable Bigtable = null,
    VertexAiFeatureOnlineStoreDedicatedServingEndpoint DedicatedServingEndpoint = null,
    VertexAiFeatureOnlineStoreEncryptionSpec EncryptionSpec = null,
    bool|IResolvable ForceDestroy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    VertexAiFeatureOnlineStoreOptimized Optimized = null,
    string Project = null,
    string Region = null,
    VertexAiFeatureOnlineStoreTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.name">Name</a></code> | <code>string</code> | The resource name of the Feature Online Store. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.bigtable">Bigtable</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable">VertexAiFeatureOnlineStoreBigtable</a></code> | bigtable block. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.dedicatedServingEndpoint">DedicatedServingEndpoint</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint">VertexAiFeatureOnlineStoreDedicatedServingEndpoint</a></code> | dedicated_serving_endpoint block. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpec">VertexAiFeatureOnlineStoreEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.forceDestroy">ForceDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#id VertexAiFeatureOnlineStore#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels with user-defined metadata to organize your feature online stores. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.optimized">Optimized</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized">VertexAiFeatureOnlineStoreOptimized</a></code> | optimized block. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#project VertexAiFeatureOnlineStore#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.region">Region</a></code> | <code>string</code> | The region of feature online store. eg us-central1. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts">VertexAiFeatureOnlineStoreTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the Feature Online Store.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#name VertexAiFeatureOnlineStore#name}

---

##### `Bigtable`<sup>Optional</sup> <a name="Bigtable" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.bigtable"></a>

```csharp
public VertexAiFeatureOnlineStoreBigtable Bigtable { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable">VertexAiFeatureOnlineStoreBigtable</a>

bigtable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#bigtable VertexAiFeatureOnlineStore#bigtable}

---

##### `DedicatedServingEndpoint`<sup>Optional</sup> <a name="DedicatedServingEndpoint" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.dedicatedServingEndpoint"></a>

```csharp
public VertexAiFeatureOnlineStoreDedicatedServingEndpoint DedicatedServingEndpoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint">VertexAiFeatureOnlineStoreDedicatedServingEndpoint</a>

dedicated_serving_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#dedicated_serving_endpoint VertexAiFeatureOnlineStore#dedicated_serving_endpoint}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.encryptionSpec"></a>

```csharp
public VertexAiFeatureOnlineStoreEncryptionSpec EncryptionSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpec">VertexAiFeatureOnlineStoreEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#encryption_spec VertexAiFeatureOnlineStore#encryption_spec}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.forceDestroy"></a>

```csharp
public bool|IResolvable ForceDestroy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#force_destroy VertexAiFeatureOnlineStore#force_destroy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#id VertexAiFeatureOnlineStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels with user-defined metadata to organize your feature online stores.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#labels VertexAiFeatureOnlineStore#labels}

---

##### `Optimized`<sup>Optional</sup> <a name="Optimized" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.optimized"></a>

```csharp
public VertexAiFeatureOnlineStoreOptimized Optimized { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized">VertexAiFeatureOnlineStoreOptimized</a>

optimized block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#optimized VertexAiFeatureOnlineStore#optimized}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#project VertexAiFeatureOnlineStore#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of feature online store. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#region VertexAiFeatureOnlineStore#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.timeouts"></a>

```csharp
public VertexAiFeatureOnlineStoreTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts">VertexAiFeatureOnlineStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#timeouts VertexAiFeatureOnlineStore#timeouts}

---

### VertexAiFeatureOnlineStoreDedicatedServingEndpoint <a name="VertexAiFeatureOnlineStoreDedicatedServingEndpoint" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiFeatureOnlineStoreDedicatedServingEndpoint {
    VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig PrivateServiceConnectConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint.property.privateServiceConnectConfig">PrivateServiceConnectConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a></code> | private_service_connect_config block. |

---

##### `PrivateServiceConnectConfig`<sup>Optional</sup> <a name="PrivateServiceConnectConfig" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint.property.privateServiceConnectConfig"></a>

```csharp
public VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig PrivateServiceConnectConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a>

private_service_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#private_service_connect_config VertexAiFeatureOnlineStore#private_service_connect_config}

---

### VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig <a name="VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig {
    bool|IResolvable EnablePrivateServiceConnect,
    string[] ProjectAllowlist = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.property.enablePrivateServiceConnect">EnablePrivateServiceConnect</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to true, customers will use private service connection to send request. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.property.projectAllowlist">ProjectAllowlist</a></code> | <code>string[]</code> | A list of Projects from which the forwarding rule will target the service attachment. |

---

##### `EnablePrivateServiceConnect`<sup>Required</sup> <a name="EnablePrivateServiceConnect" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.property.enablePrivateServiceConnect"></a>

```csharp
public bool|IResolvable EnablePrivateServiceConnect { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to true, customers will use private service connection to send request.

Otherwise, the connection will set to public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#enable_private_service_connect VertexAiFeatureOnlineStore#enable_private_service_connect}

---

##### `ProjectAllowlist`<sup>Optional</sup> <a name="ProjectAllowlist" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.property.projectAllowlist"></a>

```csharp
public string[] ProjectAllowlist { get; set; }
```

- *Type:* string[]

A list of Projects from which the forwarding rule will target the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#project_allowlist VertexAiFeatureOnlineStore#project_allowlist}

---

### VertexAiFeatureOnlineStoreEncryptionSpec <a name="VertexAiFeatureOnlineStoreEncryptionSpec" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiFeatureOnlineStoreEncryptionSpec {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpec.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource.

Has the form: projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key. The key needs to be in the same region as where the compute resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#kms_key_name VertexAiFeatureOnlineStore#kms_key_name}

---

### VertexAiFeatureOnlineStoreOptimized <a name="VertexAiFeatureOnlineStoreOptimized" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiFeatureOnlineStoreOptimized {

};
```


### VertexAiFeatureOnlineStoreTimeouts <a name="VertexAiFeatureOnlineStoreTimeouts" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiFeatureOnlineStoreTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#create VertexAiFeatureOnlineStore#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#delete VertexAiFeatureOnlineStore#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#update VertexAiFeatureOnlineStore#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#create VertexAiFeatureOnlineStore#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#delete VertexAiFeatureOnlineStore#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/vertex_ai_feature_online_store#update VertexAiFeatureOnlineStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference <a name="VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resetCpuUtilizationTarget">ResetCpuUtilizationTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuUtilizationTarget` <a name="ResetCpuUtilizationTarget" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resetCpuUtilizationTarget"></a>

```csharp
private void ResetCpuUtilizationTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.cpuUtilizationTargetInput">CpuUtilizationTargetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.maxNodeCountInput">MaxNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.minNodeCountInput">MinNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.cpuUtilizationTarget">CpuUtilizationTarget</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.maxNodeCount">MaxNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.minNodeCount">MinNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling">VertexAiFeatureOnlineStoreBigtableAutoScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuUtilizationTargetInput`<sup>Optional</sup> <a name="CpuUtilizationTargetInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.cpuUtilizationTargetInput"></a>

```csharp
public double CpuUtilizationTargetInput { get; }
```

- *Type:* double

---

##### `MaxNodeCountInput`<sup>Optional</sup> <a name="MaxNodeCountInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.maxNodeCountInput"></a>

```csharp
public double MaxNodeCountInput { get; }
```

- *Type:* double

---

##### `MinNodeCountInput`<sup>Optional</sup> <a name="MinNodeCountInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.minNodeCountInput"></a>

```csharp
public double MinNodeCountInput { get; }
```

- *Type:* double

---

##### `CpuUtilizationTarget`<sup>Required</sup> <a name="CpuUtilizationTarget" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.cpuUtilizationTarget"></a>

```csharp
public double CpuUtilizationTarget { get; }
```

- *Type:* double

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.maxNodeCount"></a>

```csharp
public double MaxNodeCount { get; }
```

- *Type:* double

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.minNodeCount"></a>

```csharp
public double MinNodeCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.internalValue"></a>

```csharp
public VertexAiFeatureOnlineStoreBigtableAutoScaling InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling">VertexAiFeatureOnlineStoreBigtableAutoScaling</a>

---


### VertexAiFeatureOnlineStoreBigtableOutputReference <a name="VertexAiFeatureOnlineStoreBigtableOutputReference" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiFeatureOnlineStoreBigtableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.putAutoScaling">PutAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.resetEnableDirectBigtableAccess">ResetEnableDirectBigtableAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoScaling` <a name="PutAutoScaling" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.putAutoScaling"></a>

```csharp
private void PutAutoScaling(VertexAiFeatureOnlineStoreBigtableAutoScaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.putAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling">VertexAiFeatureOnlineStoreBigtableAutoScaling</a>

---

##### `ResetEnableDirectBigtableAccess` <a name="ResetEnableDirectBigtableAccess" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.resetEnableDirectBigtableAccess"></a>

```csharp
private void ResetEnableDirectBigtableAccess()
```

##### `ResetZone` <a name="ResetZone" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.resetZone"></a>

```csharp
private void ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.autoScaling">AutoScaling</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference">VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.autoScalingInput">AutoScalingInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling">VertexAiFeatureOnlineStoreBigtableAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.enableDirectBigtableAccessInput">EnableDirectBigtableAccessInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.enableDirectBigtableAccess">EnableDirectBigtableAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable">VertexAiFeatureOnlineStoreBigtable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoScaling`<sup>Required</sup> <a name="AutoScaling" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.autoScaling"></a>

```csharp
public VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference AutoScaling { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference">VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference</a>

---

##### `AutoScalingInput`<sup>Optional</sup> <a name="AutoScalingInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.autoScalingInput"></a>

```csharp
public VertexAiFeatureOnlineStoreBigtableAutoScaling AutoScalingInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling">VertexAiFeatureOnlineStoreBigtableAutoScaling</a>

---

##### `EnableDirectBigtableAccessInput`<sup>Optional</sup> <a name="EnableDirectBigtableAccessInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.enableDirectBigtableAccessInput"></a>

```csharp
public bool|IResolvable EnableDirectBigtableAccessInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `EnableDirectBigtableAccess`<sup>Required</sup> <a name="EnableDirectBigtableAccess" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.enableDirectBigtableAccess"></a>

```csharp
public bool|IResolvable EnableDirectBigtableAccess { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.internalValue"></a>

```csharp
public VertexAiFeatureOnlineStoreBigtable InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable">VertexAiFeatureOnlineStoreBigtable</a>

---


### VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference <a name="VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.putPrivateServiceConnectConfig">PutPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resetPrivateServiceConnectConfig">ResetPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrivateServiceConnectConfig` <a name="PutPrivateServiceConnectConfig" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.putPrivateServiceConnectConfig"></a>

```csharp
private void PutPrivateServiceConnectConfig(VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.putPrivateServiceConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a>

---

##### `ResetPrivateServiceConnectConfig` <a name="ResetPrivateServiceConnectConfig" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resetPrivateServiceConnectConfig"></a>

```csharp
private void ResetPrivateServiceConnectConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.privateServiceConnectConfig">PrivateServiceConnectConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.publicEndpointDomainName">PublicEndpointDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.privateServiceConnectConfigInput">PrivateServiceConnectConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint">VertexAiFeatureOnlineStoreDedicatedServingEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrivateServiceConnectConfig`<sup>Required</sup> <a name="PrivateServiceConnectConfig" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.privateServiceConnectConfig"></a>

```csharp
public VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference PrivateServiceConnectConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference</a>

---

##### `PublicEndpointDomainName`<sup>Required</sup> <a name="PublicEndpointDomainName" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.publicEndpointDomainName"></a>

```csharp
public string PublicEndpointDomainName { get; }
```

- *Type:* string

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.serviceAttachment"></a>

```csharp
public string ServiceAttachment { get; }
```

- *Type:* string

---

##### `PrivateServiceConnectConfigInput`<sup>Optional</sup> <a name="PrivateServiceConnectConfigInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.privateServiceConnectConfigInput"></a>

```csharp
public VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig PrivateServiceConnectConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.internalValue"></a>

```csharp
public VertexAiFeatureOnlineStoreDedicatedServingEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint">VertexAiFeatureOnlineStoreDedicatedServingEndpoint</a>

---


### VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference <a name="VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resetProjectAllowlist">ResetProjectAllowlist</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectAllowlist` <a name="ResetProjectAllowlist" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resetProjectAllowlist"></a>

```csharp
private void ResetProjectAllowlist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnectInput">EnablePrivateServiceConnectInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlistInput">ProjectAllowlistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnect">EnablePrivateServiceConnect</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlist">ProjectAllowlist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnablePrivateServiceConnectInput`<sup>Optional</sup> <a name="EnablePrivateServiceConnectInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnectInput"></a>

```csharp
public bool|IResolvable EnablePrivateServiceConnectInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProjectAllowlistInput`<sup>Optional</sup> <a name="ProjectAllowlistInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlistInput"></a>

```csharp
public string[] ProjectAllowlistInput { get; }
```

- *Type:* string[]

---

##### `EnablePrivateServiceConnect`<sup>Required</sup> <a name="EnablePrivateServiceConnect" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnect"></a>

```csharp
public bool|IResolvable EnablePrivateServiceConnect { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProjectAllowlist`<sup>Required</sup> <a name="ProjectAllowlist" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlist"></a>

```csharp
public string[] ProjectAllowlist { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.internalValue"></a>

```csharp
public VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a>

---


### VertexAiFeatureOnlineStoreEncryptionSpecOutputReference <a name="VertexAiFeatureOnlineStoreEncryptionSpecOutputReference" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiFeatureOnlineStoreEncryptionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpec">VertexAiFeatureOnlineStoreEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.property.internalValue"></a>

```csharp
public VertexAiFeatureOnlineStoreEncryptionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpec">VertexAiFeatureOnlineStoreEncryptionSpec</a>

---


### VertexAiFeatureOnlineStoreOptimizedOutputReference <a name="VertexAiFeatureOnlineStoreOptimizedOutputReference" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiFeatureOnlineStoreOptimizedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized">VertexAiFeatureOnlineStoreOptimized</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.property.internalValue"></a>

```csharp
public VertexAiFeatureOnlineStoreOptimized InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized">VertexAiFeatureOnlineStoreOptimized</a>

---


### VertexAiFeatureOnlineStoreTimeoutsOutputReference <a name="VertexAiFeatureOnlineStoreTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiFeatureOnlineStoreTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts">VertexAiFeatureOnlineStoreTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiFeatureOnlineStoreTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts">VertexAiFeatureOnlineStoreTimeouts</a>

---



