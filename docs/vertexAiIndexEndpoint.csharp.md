# `vertexAiIndexEndpoint` Submodule <a name="`vertexAiIndexEndpoint` Submodule" id="@cdktn/provider-google.vertexAiIndexEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiIndexEndpoint <a name="VertexAiIndexEndpoint" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint google_vertex_ai_index_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiIndexEndpoint(Construct Scope, string Id, VertexAiIndexEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig">VertexAiIndexEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig">VertexAiIndexEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.putPrivateServiceConnectConfig">PutPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetPrivateServiceConnectConfig">ResetPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetPublicEndpointEnabled">ResetPublicEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.putEncryptionSpec"></a>

```csharp
private void PutEncryptionSpec(VertexAiIndexEndpointEncryptionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpec">VertexAiIndexEndpointEncryptionSpec</a>

---

##### `PutPrivateServiceConnectConfig` <a name="PutPrivateServiceConnectConfig" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.putPrivateServiceConnectConfig"></a>

```csharp
private void PutPrivateServiceConnectConfig(VertexAiIndexEndpointPrivateServiceConnectConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.putPrivateServiceConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig">VertexAiIndexEndpointPrivateServiceConnectConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(VertexAiIndexEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts">VertexAiIndexEndpointTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetEncryptionSpec"></a>

```csharp
private void ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetPrivateServiceConnectConfig` <a name="ResetPrivateServiceConnectConfig" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetPrivateServiceConnectConfig"></a>

```csharp
private void ResetPrivateServiceConnectConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPublicEndpointEnabled` <a name="ResetPublicEndpointEnabled" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetPublicEndpointEnabled"></a>

```csharp
private void ResetPublicEndpointEnabled()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiIndexEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiIndexEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiIndexEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiIndexEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiIndexEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VertexAiIndexEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VertexAiIndexEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VertexAiIndexEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiIndexEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference">VertexAiIndexEndpointEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.privateServiceConnectConfig">PrivateServiceConnectConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference">VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.publicEndpointDomainName">PublicEndpointDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference">VertexAiIndexEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpec">VertexAiIndexEndpointEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.privateServiceConnectConfigInput">PrivateServiceConnectConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig">VertexAiIndexEndpointPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.publicEndpointEnabledInput">PublicEndpointEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts">VertexAiIndexEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.publicEndpointEnabled">PublicEndpointEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.encryptionSpec"></a>

```csharp
public VertexAiIndexEndpointEncryptionSpecOutputReference EncryptionSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference">VertexAiIndexEndpointEncryptionSpecOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateServiceConnectConfig`<sup>Required</sup> <a name="PrivateServiceConnectConfig" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.privateServiceConnectConfig"></a>

```csharp
public VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference PrivateServiceConnectConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference">VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference</a>

---

##### `PublicEndpointDomainName`<sup>Required</sup> <a name="PublicEndpointDomainName" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.publicEndpointDomainName"></a>

```csharp
public string PublicEndpointDomainName { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.timeouts"></a>

```csharp
public VertexAiIndexEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference">VertexAiIndexEndpointTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.encryptionSpecInput"></a>

```csharp
public VertexAiIndexEndpointEncryptionSpec EncryptionSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpec">VertexAiIndexEndpointEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `PrivateServiceConnectConfigInput`<sup>Optional</sup> <a name="PrivateServiceConnectConfigInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.privateServiceConnectConfigInput"></a>

```csharp
public VertexAiIndexEndpointPrivateServiceConnectConfig PrivateServiceConnectConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig">VertexAiIndexEndpointPrivateServiceConnectConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PublicEndpointEnabledInput`<sup>Optional</sup> <a name="PublicEndpointEnabledInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.publicEndpointEnabledInput"></a>

```csharp
public bool|IResolvable PublicEndpointEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.timeoutsInput"></a>

```csharp
public IResolvable|VertexAiIndexEndpointTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts">VertexAiIndexEndpointTimeouts</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PublicEndpointEnabled`<sup>Required</sup> <a name="PublicEndpointEnabled" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.publicEndpointEnabled"></a>

```csharp
public bool|IResolvable PublicEndpointEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiIndexEndpointConfig <a name="VertexAiIndexEndpointConfig" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiIndexEndpointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string Description = null,
    VertexAiIndexEndpointEncryptionSpec EncryptionSpec = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Network = null,
    VertexAiIndexEndpointPrivateServiceConnectConfig PrivateServiceConnectConfig = null,
    string Project = null,
    bool|IResolvable PublicEndpointEnabled = null,
    string Region = null,
    VertexAiIndexEndpointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the Index. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.description">Description</a></code> | <code>string</code> | The description of the Index. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpec">VertexAiIndexEndpointEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#id VertexAiIndexEndpoint#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels with user-defined metadata to organize your Indexes. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.network">Network</a></code> | <code>string</code> | The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the index endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the index endpoint is not peered with any network. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.privateServiceConnectConfig">PrivateServiceConnectConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig">VertexAiIndexEndpointPrivateServiceConnectConfig</a></code> | private_service_connect_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#project VertexAiIndexEndpoint#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.publicEndpointEnabled">PublicEndpointEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, the deployed index will be accessible through public endpoint. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.region">Region</a></code> | <code>string</code> | The region of the index endpoint. eg us-central1. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts">VertexAiIndexEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the Index.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#display_name VertexAiIndexEndpoint#display_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#description VertexAiIndexEndpoint#description}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.encryptionSpec"></a>

```csharp
public VertexAiIndexEndpointEncryptionSpec EncryptionSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpec">VertexAiIndexEndpointEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#encryption_spec VertexAiIndexEndpoint#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#id VertexAiIndexEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels with user-defined metadata to organize your Indexes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#labels VertexAiIndexEndpoint#labels}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the index endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the index endpoint is not peered with any network. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#network VertexAiIndexEndpoint#network}

---

##### `PrivateServiceConnectConfig`<sup>Optional</sup> <a name="PrivateServiceConnectConfig" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.privateServiceConnectConfig"></a>

```csharp
public VertexAiIndexEndpointPrivateServiceConnectConfig PrivateServiceConnectConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig">VertexAiIndexEndpointPrivateServiceConnectConfig</a>

private_service_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#private_service_connect_config VertexAiIndexEndpoint#private_service_connect_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#project VertexAiIndexEndpoint#project}.

---

##### `PublicEndpointEnabled`<sup>Optional</sup> <a name="PublicEndpointEnabled" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.publicEndpointEnabled"></a>

```csharp
public bool|IResolvable PublicEndpointEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, the deployed index will be accessible through public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#public_endpoint_enabled VertexAiIndexEndpoint#public_endpoint_enabled}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the index endpoint. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#region VertexAiIndexEndpoint#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.timeouts"></a>

```csharp
public VertexAiIndexEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts">VertexAiIndexEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#timeouts VertexAiIndexEndpoint#timeouts}

---

### VertexAiIndexEndpointEncryptionSpec <a name="VertexAiIndexEndpointEncryptionSpec" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiIndexEndpointEncryptionSpec {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | Required. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpec.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

Required.

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. Has the form: 'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'. The key needs to be in the same region as where the compute resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#kms_key_name VertexAiIndexEndpoint#kms_key_name}

---

### VertexAiIndexEndpointPrivateServiceConnectConfig <a name="VertexAiIndexEndpointPrivateServiceConnectConfig" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiIndexEndpointPrivateServiceConnectConfig {
    bool|IResolvable EnablePrivateServiceConnect,
    string[] ProjectAllowlist = null,
    IResolvable|VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs[] PscAutomationConfigs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig.property.enablePrivateServiceConnect">EnablePrivateServiceConnect</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to true, the IndexEndpoint is created without private service access. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig.property.projectAllowlist">ProjectAllowlist</a></code> | <code>string[]</code> | A list of Projects from which the forwarding rule will target the service attachment. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig.property.pscAutomationConfigs">PscAutomationConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a>[]</code> | psc_automation_configs block. |

---

##### `EnablePrivateServiceConnect`<sup>Required</sup> <a name="EnablePrivateServiceConnect" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig.property.enablePrivateServiceConnect"></a>

```csharp
public bool|IResolvable EnablePrivateServiceConnect { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to true, the IndexEndpoint is created without private service access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#enable_private_service_connect VertexAiIndexEndpoint#enable_private_service_connect}

---

##### `ProjectAllowlist`<sup>Optional</sup> <a name="ProjectAllowlist" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig.property.projectAllowlist"></a>

```csharp
public string[] ProjectAllowlist { get; set; }
```

- *Type:* string[]

A list of Projects from which the forwarding rule will target the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#project_allowlist VertexAiIndexEndpoint#project_allowlist}

---

##### `PscAutomationConfigs`<sup>Optional</sup> <a name="PscAutomationConfigs" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig.property.pscAutomationConfigs"></a>

```csharp
public IResolvable|VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs[] PscAutomationConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a>[]

psc_automation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#psc_automation_configs VertexAiIndexEndpoint#psc_automation_configs}

---

### VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs <a name="VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs {
    string Network,
    string ProjectId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs.property.network">Network</a></code> | <code>string</code> | The full name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/get): projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs.property.projectId">ProjectId</a></code> | <code>string</code> | Project id used to create forwarding rule. |

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The full name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/get): projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#network VertexAiIndexEndpoint#network}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Project id used to create forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#project_id VertexAiIndexEndpoint#project_id}

---

### VertexAiIndexEndpointTimeouts <a name="VertexAiIndexEndpointTimeouts" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiIndexEndpointTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#create VertexAiIndexEndpoint#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#delete VertexAiIndexEndpoint#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#update VertexAiIndexEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#create VertexAiIndexEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#delete VertexAiIndexEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_index_endpoint#update VertexAiIndexEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiIndexEndpointEncryptionSpecOutputReference <a name="VertexAiIndexEndpointEncryptionSpecOutputReference" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiIndexEndpointEncryptionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpec">VertexAiIndexEndpointEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.property.internalValue"></a>

```csharp
public VertexAiIndexEndpointEncryptionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpec">VertexAiIndexEndpointEncryptionSpec</a>

---


### VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference <a name="VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.putPscAutomationConfigs">PutPscAutomationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resetProjectAllowlist">ResetProjectAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resetPscAutomationConfigs">ResetPscAutomationConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPscAutomationConfigs` <a name="PutPscAutomationConfigs" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.putPscAutomationConfigs"></a>

```csharp
private void PutPscAutomationConfigs(IResolvable|VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.putPscAutomationConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a>[]

---

##### `ResetProjectAllowlist` <a name="ResetProjectAllowlist" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resetProjectAllowlist"></a>

```csharp
private void ResetProjectAllowlist()
```

##### `ResetPscAutomationConfigs` <a name="ResetPscAutomationConfigs" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resetPscAutomationConfigs"></a>

```csharp
private void ResetPscAutomationConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.pscAutomationConfigs">PscAutomationConfigs</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList">VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnectInput">EnablePrivateServiceConnectInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlistInput">ProjectAllowlistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.pscAutomationConfigsInput">PscAutomationConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnect">EnablePrivateServiceConnect</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlist">ProjectAllowlist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig">VertexAiIndexEndpointPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PscAutomationConfigs`<sup>Required</sup> <a name="PscAutomationConfigs" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.pscAutomationConfigs"></a>

```csharp
public VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList PscAutomationConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList">VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList</a>

---

##### `EnablePrivateServiceConnectInput`<sup>Optional</sup> <a name="EnablePrivateServiceConnectInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnectInput"></a>

```csharp
public bool|IResolvable EnablePrivateServiceConnectInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProjectAllowlistInput`<sup>Optional</sup> <a name="ProjectAllowlistInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlistInput"></a>

```csharp
public string[] ProjectAllowlistInput { get; }
```

- *Type:* string[]

---

##### `PscAutomationConfigsInput`<sup>Optional</sup> <a name="PscAutomationConfigsInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.pscAutomationConfigsInput"></a>

```csharp
public IResolvable|VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs[] PscAutomationConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a>[]

---

##### `EnablePrivateServiceConnect`<sup>Required</sup> <a name="EnablePrivateServiceConnect" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnect"></a>

```csharp
public bool|IResolvable EnablePrivateServiceConnect { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProjectAllowlist`<sup>Required</sup> <a name="ProjectAllowlist" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlist"></a>

```csharp
public string[] ProjectAllowlist { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.internalValue"></a>

```csharp
public VertexAiIndexEndpointPrivateServiceConnectConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig">VertexAiIndexEndpointPrivateServiceConnectConfig</a>

---


### VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList <a name="VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.get"></a>

```csharp
private VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.property.internalValue"></a>

```csharp
public IResolvable|VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a>[]

---


### VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference <a name="VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a>

---


### VertexAiIndexEndpointTimeoutsOutputReference <a name="VertexAiIndexEndpointTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiIndexEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts">VertexAiIndexEndpointTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiIndexEndpointTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts">VertexAiIndexEndpointTimeouts</a>

---



