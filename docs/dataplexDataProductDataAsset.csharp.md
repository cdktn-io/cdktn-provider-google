# `dataplexDataProductDataAsset` Submodule <a name="`dataplexDataProductDataAsset` Submodule" id="@cdktn/provider-google.dataplexDataProductDataAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexDataProductDataAsset <a name="DataplexDataProductDataAsset" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product_data_asset google_dataplex_data_product_data_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexDataProductDataAsset(Construct Scope, string Id, DataplexDataProductDataAssetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig">DataplexDataProductDataAssetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig">DataplexDataProductDataAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.putAccessGroupConfigs">PutAccessGroupConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetAccessGroupConfigs">ResetAccessGroupConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessGroupConfigs` <a name="PutAccessGroupConfigs" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.putAccessGroupConfigs"></a>

```csharp
private void PutAccessGroupConfigs(IResolvable|DataplexDataProductDataAssetAccessGroupConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.putAccessGroupConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs">DataplexDataProductDataAssetAccessGroupConfigs</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.putTimeouts"></a>

```csharp
private void PutTimeouts(DataplexDataProductDataAssetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts">DataplexDataProductDataAssetTimeouts</a>

---

##### `ResetAccessGroupConfigs` <a name="ResetAccessGroupConfigs" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetAccessGroupConfigs"></a>

```csharp
private void ResetAccessGroupConfigs()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataplexDataProductDataAsset resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataplexDataProductDataAsset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataplexDataProductDataAsset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataplexDataProductDataAsset.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataplexDataProductDataAsset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataplexDataProductDataAsset resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataplexDataProductDataAsset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataplexDataProductDataAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product_data_asset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataplexDataProductDataAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.accessGroupConfigs">AccessGroupConfigs</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList">DataplexDataProductDataAssetAccessGroupConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference">DataplexDataProductDataAssetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.accessGroupConfigsInput">AccessGroupConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs">DataplexDataProductDataAssetAccessGroupConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.dataAssetIdInput">DataAssetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.dataProductIdInput">DataProductIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts">DataplexDataProductDataAssetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.dataAssetId">DataAssetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.dataProductId">DataProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.resource">Resource</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessGroupConfigs`<sup>Required</sup> <a name="AccessGroupConfigs" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.accessGroupConfigs"></a>

```csharp
public DataplexDataProductDataAssetAccessGroupConfigsList AccessGroupConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList">DataplexDataProductDataAssetAccessGroupConfigsList</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.timeouts"></a>

```csharp
public DataplexDataProductDataAssetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference">DataplexDataProductDataAssetTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AccessGroupConfigsInput`<sup>Optional</sup> <a name="AccessGroupConfigsInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.accessGroupConfigsInput"></a>

```csharp
public IResolvable|DataplexDataProductDataAssetAccessGroupConfigs[] AccessGroupConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs">DataplexDataProductDataAssetAccessGroupConfigs</a>[]

---

##### `DataAssetIdInput`<sup>Optional</sup> <a name="DataAssetIdInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.dataAssetIdInput"></a>

```csharp
public string DataAssetIdInput { get; }
```

- *Type:* string

---

##### `DataProductIdInput`<sup>Optional</sup> <a name="DataProductIdInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.dataProductIdInput"></a>

```csharp
public string DataProductIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.timeoutsInput"></a>

```csharp
public IResolvable|DataplexDataProductDataAssetTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts">DataplexDataProductDataAssetTimeouts</a>

---

##### `DataAssetId`<sup>Required</sup> <a name="DataAssetId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.dataAssetId"></a>

```csharp
public string DataAssetId { get; }
```

- *Type:* string

---

##### `DataProductId`<sup>Required</sup> <a name="DataProductId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.dataProductId"></a>

```csharp
public string DataProductId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexDataProductDataAssetAccessGroupConfigs <a name="DataplexDataProductDataAssetAccessGroupConfigs" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexDataProductDataAssetAccessGroupConfigs {
    string AccessGroup,
    string[] IamRoles = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs.property.accessGroup">AccessGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product_data_asset#access_group DataplexDataProductDataAsset#access_group}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs.property.iamRoles">IamRoles</a></code> | <code>string[]</code> | IAM roles granted on the resource. |

---

##### `AccessGroup`<sup>Required</sup> <a name="AccessGroup" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs.property.accessGroup"></a>

```csharp
public string AccessGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product_data_asset#access_group DataplexDataProductDataAsset#access_group}.

---

##### `IamRoles`<sup>Optional</sup> <a name="IamRoles" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs.property.iamRoles"></a>

```csharp
public string[] IamRoles { get; set; }
```

- *Type:* string[]

IAM roles granted on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product_data_asset#iam_roles DataplexDataProductDataAsset#iam_roles}

---

### DataplexDataProductDataAssetConfig <a name="DataplexDataProductDataAssetConfig" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexDataProductDataAssetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataAssetId,
    string DataProductId,
    string Location,
    string Resource,
    IResolvable|DataplexDataProductDataAssetAccessGroupConfigs[] AccessGroupConfigs = null,
    string DeletionPolicy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    DataplexDataProductDataAssetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.dataAssetId">DataAssetId</a></code> | <code>string</code> | The ID of the data asset. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.dataProductId">DataProductId</a></code> | <code>string</code> | The ID of the parent data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.location">Location</a></code> | <code>string</code> | The location for the data asset. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.resource">Resource</a></code> | <code>string</code> | Full resource name of the cloud resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.accessGroupConfigs">AccessGroupConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs">DataplexDataProductDataAssetAccessGroupConfigs</a>[]</code> | access_group_configs block. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product_data_asset#id DataplexDataProductDataAsset#id}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product_data_asset#project DataplexDataProductDataAsset#project}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts">DataplexDataProductDataAssetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataAssetId`<sup>Required</sup> <a name="DataAssetId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.dataAssetId"></a>

```csharp
public string DataAssetId { get; set; }
```

- *Type:* string

The ID of the data asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product_data_asset#data_asset_id DataplexDataProductDataAsset#data_asset_id}

---

##### `DataProductId`<sup>Required</sup> <a name="DataProductId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.dataProductId"></a>

```csharp
public string DataProductId { get; set; }
```

- *Type:* string

The ID of the parent data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product_data_asset#data_product_id DataplexDataProductDataAsset#data_product_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the data asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product_data_asset#location DataplexDataProductDataAsset#location}

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

Full resource name of the cloud resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product_data_asset#resource DataplexDataProductDataAsset#resource}

---

##### `AccessGroupConfigs`<sup>Optional</sup> <a name="AccessGroupConfigs" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.accessGroupConfigs"></a>

```csharp
public IResolvable|DataplexDataProductDataAssetAccessGroupConfigs[] AccessGroupConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs">DataplexDataProductDataAssetAccessGroupConfigs</a>[]

access_group_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product_data_asset#access_group_configs DataplexDataProductDataAsset#access_group_configs}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product_data_asset#deletion_policy DataplexDataProductDataAsset#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product_data_asset#id DataplexDataProductDataAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product_data_asset#labels DataplexDataProductDataAsset#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product_data_asset#project DataplexDataProductDataAsset#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.timeouts"></a>

```csharp
public DataplexDataProductDataAssetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts">DataplexDataProductDataAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product_data_asset#timeouts DataplexDataProductDataAsset#timeouts}

---

### DataplexDataProductDataAssetTimeouts <a name="DataplexDataProductDataAssetTimeouts" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexDataProductDataAssetTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product_data_asset#create DataplexDataProductDataAsset#create}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product_data_asset#delete DataplexDataProductDataAsset#delete}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product_data_asset#update DataplexDataProductDataAsset#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product_data_asset#create DataplexDataProductDataAsset#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product_data_asset#delete DataplexDataProductDataAsset#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product_data_asset#update DataplexDataProductDataAsset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexDataProductDataAssetAccessGroupConfigsList <a name="DataplexDataProductDataAssetAccessGroupConfigsList" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexDataProductDataAssetAccessGroupConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.get"></a>

```csharp
private DataplexDataProductDataAssetAccessGroupConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs">DataplexDataProductDataAssetAccessGroupConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.property.internalValue"></a>

```csharp
public IResolvable|DataplexDataProductDataAssetAccessGroupConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs">DataplexDataProductDataAssetAccessGroupConfigs</a>[]

---


### DataplexDataProductDataAssetAccessGroupConfigsOutputReference <a name="DataplexDataProductDataAssetAccessGroupConfigsOutputReference" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexDataProductDataAssetAccessGroupConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.resetIamRoles">ResetIamRoles</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIamRoles` <a name="ResetIamRoles" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.resetIamRoles"></a>

```csharp
private void ResetIamRoles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.accessGroupInput">AccessGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.iamRolesInput">IamRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.accessGroup">AccessGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.iamRoles">IamRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs">DataplexDataProductDataAssetAccessGroupConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessGroupInput`<sup>Optional</sup> <a name="AccessGroupInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.accessGroupInput"></a>

```csharp
public string AccessGroupInput { get; }
```

- *Type:* string

---

##### `IamRolesInput`<sup>Optional</sup> <a name="IamRolesInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.iamRolesInput"></a>

```csharp
public string[] IamRolesInput { get; }
```

- *Type:* string[]

---

##### `AccessGroup`<sup>Required</sup> <a name="AccessGroup" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.accessGroup"></a>

```csharp
public string AccessGroup { get; }
```

- *Type:* string

---

##### `IamRoles`<sup>Required</sup> <a name="IamRoles" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.iamRoles"></a>

```csharp
public string[] IamRoles { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataplexDataProductDataAssetAccessGroupConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs">DataplexDataProductDataAssetAccessGroupConfigs</a>

---


### DataplexDataProductDataAssetTimeoutsOutputReference <a name="DataplexDataProductDataAssetTimeoutsOutputReference" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexDataProductDataAssetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts">DataplexDataProductDataAssetTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataplexDataProductDataAssetTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts">DataplexDataProductDataAssetTimeouts</a>

---



