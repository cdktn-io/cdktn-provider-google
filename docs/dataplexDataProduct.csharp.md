# `dataplexDataProduct` Submodule <a name="`dataplexDataProduct` Submodule" id="@cdktn/provider-google.dataplexDataProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexDataProduct <a name="DataplexDataProduct" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product google_dataplex_data_product}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexDataProduct(Construct Scope, string Id, DataplexDataProductConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig">DataplexDataProductConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig">DataplexDataProductConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putAccessApprovalConfig">PutAccessApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putAccessGroups">PutAccessGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetAccessApprovalConfig">ResetAccessApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetAccessGroups">ResetAccessGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetIcon">ResetIcon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessApprovalConfig` <a name="PutAccessApprovalConfig" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putAccessApprovalConfig"></a>

```csharp
private void PutAccessApprovalConfig(DataplexDataProductAccessApprovalConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putAccessApprovalConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a>

---

##### `PutAccessGroups` <a name="PutAccessGroups" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putAccessGroups"></a>

```csharp
private void PutAccessGroups(IResolvable|DataplexDataProductAccessGroups[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putAccessGroups.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putTimeouts"></a>

```csharp
private void PutTimeouts(DataplexDataProductTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a>

---

##### `ResetAccessApprovalConfig` <a name="ResetAccessApprovalConfig" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetAccessApprovalConfig"></a>

```csharp
private void ResetAccessApprovalConfig()
```

##### `ResetAccessGroups` <a name="ResetAccessGroups" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetAccessGroups"></a>

```csharp
private void ResetAccessGroups()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetIcon` <a name="ResetIcon" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetIcon"></a>

```csharp
private void ResetIcon()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataplexDataProduct resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataplexDataProduct.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataplexDataProduct.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataplexDataProduct.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataplexDataProduct.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataplexDataProduct resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataplexDataProduct to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataplexDataProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataplexDataProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessApprovalConfig">AccessApprovalConfig</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference">DataplexDataProductAccessApprovalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessGroups">AccessGroups</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList">DataplexDataProductAccessGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.assetCount">AssetCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference">DataplexDataProductTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessApprovalConfigInput">AccessApprovalConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessGroupsInput">AccessGroupsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.dataProductIdInput">DataProductIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.iconInput">IconInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.ownerEmailsInput">OwnerEmailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.dataProductId">DataProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.icon">Icon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.ownerEmails">OwnerEmails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessApprovalConfig`<sup>Required</sup> <a name="AccessApprovalConfig" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessApprovalConfig"></a>

```csharp
public DataplexDataProductAccessApprovalConfigOutputReference AccessApprovalConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference">DataplexDataProductAccessApprovalConfigOutputReference</a>

---

##### `AccessGroups`<sup>Required</sup> <a name="AccessGroups" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessGroups"></a>

```csharp
public DataplexDataProductAccessGroupsList AccessGroups { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList">DataplexDataProductAccessGroupsList</a>

---

##### `AssetCount`<sup>Required</sup> <a name="AssetCount" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.assetCount"></a>

```csharp
public double AssetCount { get; }
```

- *Type:* double

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.timeouts"></a>

```csharp
public DataplexDataProductTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference">DataplexDataProductTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AccessApprovalConfigInput`<sup>Optional</sup> <a name="AccessApprovalConfigInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessApprovalConfigInput"></a>

```csharp
public DataplexDataProductAccessApprovalConfig AccessApprovalConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a>

---

##### `AccessGroupsInput`<sup>Optional</sup> <a name="AccessGroupsInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessGroupsInput"></a>

```csharp
public IResolvable|DataplexDataProductAccessGroups[] AccessGroupsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>[]

---

##### `DataProductIdInput`<sup>Optional</sup> <a name="DataProductIdInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.dataProductIdInput"></a>

```csharp
public string DataProductIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IconInput`<sup>Optional</sup> <a name="IconInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.iconInput"></a>

```csharp
public string IconInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OwnerEmailsInput`<sup>Optional</sup> <a name="OwnerEmailsInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.ownerEmailsInput"></a>

```csharp
public string[] OwnerEmailsInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.timeoutsInput"></a>

```csharp
public IResolvable|DataplexDataProductTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a>

---

##### `DataProductId`<sup>Required</sup> <a name="DataProductId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.dataProductId"></a>

```csharp
public string DataProductId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Icon`<sup>Required</sup> <a name="Icon" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.icon"></a>

```csharp
public string Icon { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `OwnerEmails`<sup>Required</sup> <a name="OwnerEmails" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.ownerEmails"></a>

```csharp
public string[] OwnerEmails { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexDataProductAccessApprovalConfig <a name="DataplexDataProductAccessApprovalConfig" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexDataProductAccessApprovalConfig {
    string[] ApproverEmails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig.property.approverEmails">ApproverEmails</a></code> | <code>string[]</code> | Specifies the email addresses of users who are potential approvers. |

---

##### `ApproverEmails`<sup>Optional</sup> <a name="ApproverEmails" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig.property.approverEmails"></a>

```csharp
public string[] ApproverEmails { get; set; }
```

- *Type:* string[]

Specifies the email addresses of users who are potential approvers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#approver_emails DataplexDataProduct#approver_emails}

---

### DataplexDataProductAccessGroups <a name="DataplexDataProductAccessGroups" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexDataProductAccessGroups {
    string DisplayName,
    string GroupId,
    string Id,
    DataplexDataProductAccessGroupsPrincipal Principal,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.displayName">DisplayName</a></code> | <code>string</code> | User friendly display name. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.groupId">GroupId</a></code> | <code>string</code> | Unique identifier of the access group. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#id DataplexDataProduct#id}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a></code> | principal block. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.description">Description</a></code> | <code>string</code> | Description of the access group. |

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#display_name DataplexDataProduct#display_name}

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

Unique identifier of the access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#group_id DataplexDataProduct#group_id}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#id DataplexDataProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.principal"></a>

```csharp
public DataplexDataProductAccessGroupsPrincipal Principal { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a>

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#principal DataplexDataProduct#principal}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#description DataplexDataProduct#description}

---

### DataplexDataProductAccessGroupsPrincipal <a name="DataplexDataProductAccessGroupsPrincipal" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexDataProductAccessGroupsPrincipal {
    string GoogleGroup = null,
    string ServiceAccount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal.property.googleGroup">GoogleGroup</a></code> | <code>string</code> | Email of the Google Group. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Specifies the email of the producer service account. |

---

##### `GoogleGroup`<sup>Optional</sup> <a name="GoogleGroup" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal.property.googleGroup"></a>

```csharp
public string GoogleGroup { get; set; }
```

- *Type:* string

Email of the Google Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#google_group DataplexDataProduct#google_group}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Specifies the email of the producer service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#service_account DataplexDataProduct#service_account}

---

### DataplexDataProductConfig <a name="DataplexDataProductConfig" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexDataProductConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataProductId,
    string DisplayName,
    string Location,
    string[] OwnerEmails,
    DataplexDataProductAccessApprovalConfig AccessApprovalConfig = null,
    IResolvable|DataplexDataProductAccessGroups[] AccessGroups = null,
    string DeletionPolicy = null,
    string Description = null,
    string Icon = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    DataplexDataProductTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.dataProductId">DataProductId</a></code> | <code>string</code> | The ID of the data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User-friendly display name. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.location">Location</a></code> | <code>string</code> | The location for the data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.ownerEmails">OwnerEmails</a></code> | <code>string[]</code> | Emails of the owners. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.accessApprovalConfig">AccessApprovalConfig</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a></code> | access_approval_config block. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.accessGroups">AccessGroups</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>[]</code> | access_groups block. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.description">Description</a></code> | <code>string</code> | Description of the data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.icon">Icon</a></code> | <code>string</code> | Base64 encoded image representing the data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#id DataplexDataProduct#id}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#project DataplexDataProduct#project}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataProductId`<sup>Required</sup> <a name="DataProductId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.dataProductId"></a>

```csharp
public string DataProductId { get; set; }
```

- *Type:* string

The ID of the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#data_product_id DataplexDataProduct#data_product_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User-friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#display_name DataplexDataProduct#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#location DataplexDataProduct#location}

---

##### `OwnerEmails`<sup>Required</sup> <a name="OwnerEmails" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.ownerEmails"></a>

```csharp
public string[] OwnerEmails { get; set; }
```

- *Type:* string[]

Emails of the owners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#owner_emails DataplexDataProduct#owner_emails}

---

##### `AccessApprovalConfig`<sup>Optional</sup> <a name="AccessApprovalConfig" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.accessApprovalConfig"></a>

```csharp
public DataplexDataProductAccessApprovalConfig AccessApprovalConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a>

access_approval_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#access_approval_config DataplexDataProduct#access_approval_config}

---

##### `AccessGroups`<sup>Optional</sup> <a name="AccessGroups" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.accessGroups"></a>

```csharp
public IResolvable|DataplexDataProductAccessGroups[] AccessGroups { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>[]

access_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#access_groups DataplexDataProduct#access_groups}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#deletion_policy DataplexDataProduct#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#description DataplexDataProduct#description}

---

##### `Icon`<sup>Optional</sup> <a name="Icon" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.icon"></a>

```csharp
public string Icon { get; set; }
```

- *Type:* string

Base64 encoded image representing the data product.

Max Size: 3.0MiB
Expected image dimensions are 512x512 pixels, however the API only
performs validation on size of the encoded data.
Note: For byte fields, the content of the fields are base64-encoded (which
increases the size of the data by 33-36%) when using JSON on the wire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#icon DataplexDataProduct#icon}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#id DataplexDataProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#labels DataplexDataProduct#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#project DataplexDataProduct#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.timeouts"></a>

```csharp
public DataplexDataProductTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#timeouts DataplexDataProduct#timeouts}

---

### DataplexDataProductTimeouts <a name="DataplexDataProductTimeouts" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexDataProductTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#create DataplexDataProduct#create}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#delete DataplexDataProduct#delete}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#update DataplexDataProduct#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#create DataplexDataProduct#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#delete DataplexDataProduct#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_data_product#update DataplexDataProduct#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexDataProductAccessApprovalConfigOutputReference <a name="DataplexDataProductAccessApprovalConfigOutputReference" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexDataProductAccessApprovalConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.resetApproverEmails">ResetApproverEmails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApproverEmails` <a name="ResetApproverEmails" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.resetApproverEmails"></a>

```csharp
private void ResetApproverEmails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.approverEmailsInput">ApproverEmailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.approverEmails">ApproverEmails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApproverEmailsInput`<sup>Optional</sup> <a name="ApproverEmailsInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.approverEmailsInput"></a>

```csharp
public string[] ApproverEmailsInput { get; }
```

- *Type:* string[]

---

##### `ApproverEmails`<sup>Required</sup> <a name="ApproverEmails" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.approverEmails"></a>

```csharp
public string[] ApproverEmails { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.internalValue"></a>

```csharp
public DataplexDataProductAccessApprovalConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a>

---


### DataplexDataProductAccessGroupsList <a name="DataplexDataProductAccessGroupsList" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexDataProductAccessGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.get"></a>

```csharp
private DataplexDataProductAccessGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.property.internalValue"></a>

```csharp
public IResolvable|DataplexDataProductAccessGroups[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>[]

---


### DataplexDataProductAccessGroupsOutputReference <a name="DataplexDataProductAccessGroupsOutputReference" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexDataProductAccessGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.putPrincipal">PutPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrincipal` <a name="PutPrincipal" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.putPrincipal"></a>

```csharp
private void PutPrincipal(DataplexDataProductAccessGroupsPrincipal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.putPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference">DataplexDataProductAccessGroupsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.principalInput">PrincipalInput</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.principal"></a>

```csharp
public DataplexDataProductAccessGroupsPrincipalOutputReference Principal { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference">DataplexDataProductAccessGroupsPrincipalOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.principalInput"></a>

```csharp
public DataplexDataProductAccessGroupsPrincipal PrincipalInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataplexDataProductAccessGroups InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>

---


### DataplexDataProductAccessGroupsPrincipalOutputReference <a name="DataplexDataProductAccessGroupsPrincipalOutputReference" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexDataProductAccessGroupsPrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resetGoogleGroup">ResetGoogleGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGoogleGroup` <a name="ResetGoogleGroup" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resetGoogleGroup"></a>

```csharp
private void ResetGoogleGroup()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.googleGroupInput">GoogleGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.googleGroup">GoogleGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GoogleGroupInput`<sup>Optional</sup> <a name="GoogleGroupInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.googleGroupInput"></a>

```csharp
public string GoogleGroupInput { get; }
```

- *Type:* string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `GoogleGroup`<sup>Required</sup> <a name="GoogleGroup" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.googleGroup"></a>

```csharp
public string GoogleGroup { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.internalValue"></a>

```csharp
public DataplexDataProductAccessGroupsPrincipal InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a>

---


### DataplexDataProductTimeoutsOutputReference <a name="DataplexDataProductTimeoutsOutputReference" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexDataProductTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataplexDataProductTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a>

---



