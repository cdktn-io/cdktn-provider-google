# `dataflowConfigStoreSetting` Submodule <a name="`dataflowConfigStoreSetting` Submodule" id="@cdktn/provider-google.dataflowConfigStoreSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataflowConfigStoreSetting <a name="DataflowConfigStoreSetting" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting google_dataflow_config_store_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataflowConfigStoreSetting(Construct Scope, string Id, DataflowConfigStoreSettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig">DataflowConfigStoreSettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig">DataflowConfigStoreSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.putTimeouts"></a>

```csharp
private void PutTimeouts(DataflowConfigStoreSettingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts">DataflowConfigStoreSettingTimeouts</a>

---

##### `PutValue` <a name="PutValue" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.putValue"></a>

```csharp
private void PutValue(DataflowConfigStoreSettingValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue">DataflowConfigStoreSettingValue</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataflowConfigStoreSetting resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataflowConfigStoreSetting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataflowConfigStoreSetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataflowConfigStoreSetting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataflowConfigStoreSetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataflowConfigStoreSetting resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataflowConfigStoreSetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataflowConfigStoreSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataflowConfigStoreSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference">DataflowConfigStoreSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.value">Value</a></code> | <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference">DataflowConfigStoreSettingValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.configStoreSettingIdInput">ConfigStoreSettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts">DataflowConfigStoreSettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.valueInput">ValueInput</a></code> | <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue">DataflowConfigStoreSettingValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.configStoreSettingId">ConfigStoreSettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.timeouts"></a>

```csharp
public DataflowConfigStoreSettingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference">DataflowConfigStoreSettingTimeoutsOutputReference</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.value"></a>

```csharp
public DataflowConfigStoreSettingValueOutputReference Value { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference">DataflowConfigStoreSettingValueOutputReference</a>

---

##### `ConfigStoreSettingIdInput`<sup>Optional</sup> <a name="ConfigStoreSettingIdInput" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.configStoreSettingIdInput"></a>

```csharp
public string ConfigStoreSettingIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.timeoutsInput"></a>

```csharp
public IResolvable|DataflowConfigStoreSettingTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts">DataflowConfigStoreSettingTimeouts</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.valueInput"></a>

```csharp
public DataflowConfigStoreSettingValue ValueInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue">DataflowConfigStoreSettingValue</a>

---

##### `ConfigStoreSettingId`<sup>Required</sup> <a name="ConfigStoreSettingId" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.configStoreSettingId"></a>

```csharp
public string ConfigStoreSettingId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataflowConfigStoreSettingConfig <a name="DataflowConfigStoreSettingConfig" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataflowConfigStoreSettingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ConfigStoreSettingId,
    string Location,
    string Parent,
    DataflowConfigStoreSettingValue Value,
    string DeletionPolicy = null,
    string Id = null,
    DataflowConfigStoreSettingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.configStoreSettingId">ConfigStoreSettingId</a></code> | <code>string</code> | The ID of the config store setting (e.g. 'default_launcher_machine_type'). |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.location">Location</a></code> | <code>string</code> | The Dataflow region for the setting (e.g. 'us-central1'). |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.parent">Parent</a></code> | <code>string</code> | The parent resource in which to create the config store setting. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.value">Value</a></code> | <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue">DataflowConfigStoreSettingValue</a></code> | value block. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#id DataflowConfigStoreSetting#id}. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts">DataflowConfigStoreSettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConfigStoreSettingId`<sup>Required</sup> <a name="ConfigStoreSettingId" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.configStoreSettingId"></a>

```csharp
public string ConfigStoreSettingId { get; set; }
```

- *Type:* string

The ID of the config store setting (e.g. 'default_launcher_machine_type').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#config_store_setting_id DataflowConfigStoreSetting#config_store_setting_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The Dataflow region for the setting (e.g. 'us-central1').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#location DataflowConfigStoreSetting#location}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The parent resource in which to create the config store setting.

Must be in one of the following formats:

* 'projects/{project_number}' (numeric project number is required)
* 'folders/{folder_id}'
* 'organizations/{organization_id}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#parent DataflowConfigStoreSetting#parent}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.value"></a>

```csharp
public DataflowConfigStoreSettingValue Value { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue">DataflowConfigStoreSettingValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#value DataflowConfigStoreSetting#value}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#deletion_policy DataflowConfigStoreSetting#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#id DataflowConfigStoreSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.timeouts"></a>

```csharp
public DataflowConfigStoreSettingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts">DataflowConfigStoreSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#timeouts DataflowConfigStoreSetting#timeouts}

---

### DataflowConfigStoreSettingTimeouts <a name="DataflowConfigStoreSettingTimeouts" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataflowConfigStoreSettingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#create DataflowConfigStoreSetting#create}. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#delete DataflowConfigStoreSetting#delete}. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#update DataflowConfigStoreSetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#create DataflowConfigStoreSetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#delete DataflowConfigStoreSetting#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#update DataflowConfigStoreSetting#update}.

---

### DataflowConfigStoreSettingValue <a name="DataflowConfigStoreSettingValue" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataflowConfigStoreSettingValue {
    bool|IResolvable BoolValue = null,
    string StringValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue.property.boolValue">BoolValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Represents a boolean value. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue.property.stringValue">StringValue</a></code> | <code>string</code> | Represents a string value. |

---

##### `BoolValue`<sup>Optional</sup> <a name="BoolValue" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue.property.boolValue"></a>

```csharp
public bool|IResolvable BoolValue { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#bool_value DataflowConfigStoreSetting#bool_value}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#string_value DataflowConfigStoreSetting#string_value}

---

## Classes <a name="Classes" id="Classes"></a>

### DataflowConfigStoreSettingTimeoutsOutputReference <a name="DataflowConfigStoreSettingTimeoutsOutputReference" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataflowConfigStoreSettingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts">DataflowConfigStoreSettingTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataflowConfigStoreSettingTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts">DataflowConfigStoreSettingTimeouts</a>

---


### DataflowConfigStoreSettingValueOutputReference <a name="DataflowConfigStoreSettingValueOutputReference" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataflowConfigStoreSettingValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.resetBoolValue">ResetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBoolValue` <a name="ResetBoolValue" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.resetBoolValue"></a>

```csharp
private void ResetBoolValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.boolValueInput">BoolValueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.boolValue">BoolValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue">DataflowConfigStoreSettingValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BoolValueInput`<sup>Optional</sup> <a name="BoolValueInput" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.boolValueInput"></a>

```csharp
public bool|IResolvable BoolValueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `BoolValue`<sup>Required</sup> <a name="BoolValue" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.boolValue"></a>

```csharp
public bool|IResolvable BoolValue { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.internalValue"></a>

```csharp
public DataflowConfigStoreSettingValue InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue">DataflowConfigStoreSettingValue</a>

---



