# `observabilityFolderSettings` Submodule <a name="`observabilityFolderSettings` Submodule" id="@cdktn/provider-google.observabilityFolderSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityFolderSettings <a name="ObservabilityFolderSettings" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings google_observability_folder_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ObservabilityFolderSettings(Construct Scope, string Id, ObservabilityFolderSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig">ObservabilityFolderSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig">ObservabilityFolderSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetDefaultStorageLocation">ResetDefaultStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.putTimeouts"></a>

```csharp
private void PutTimeouts(ObservabilityFolderSettingsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts">ObservabilityFolderSettingsTimeouts</a>

---

##### `ResetDefaultStorageLocation` <a name="ResetDefaultStorageLocation" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetDefaultStorageLocation"></a>

```csharp
private void ResetDefaultStorageLocation()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetKmsKeyName"></a>

```csharp
private void ResetKmsKeyName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ObservabilityFolderSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ObservabilityFolderSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ObservabilityFolderSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ObservabilityFolderSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ObservabilityFolderSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ObservabilityFolderSettings resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObservabilityFolderSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObservabilityFolderSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityFolderSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.serviceAccountId">ServiceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference">ObservabilityFolderSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.defaultStorageLocationInput">DefaultStorageLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts">ObservabilityFolderSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.defaultStorageLocation">DefaultStorageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.location">Location</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.serviceAccountId"></a>

```csharp
public string ServiceAccountId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.timeouts"></a>

```csharp
public ObservabilityFolderSettingsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference">ObservabilityFolderSettingsTimeoutsOutputReference</a>

---

##### `DefaultStorageLocationInput`<sup>Optional</sup> <a name="DefaultStorageLocationInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.defaultStorageLocationInput"></a>

```csharp
public string DefaultStorageLocationInput { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.timeoutsInput"></a>

```csharp
public IResolvable|ObservabilityFolderSettingsTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts">ObservabilityFolderSettingsTimeouts</a>

---

##### `DefaultStorageLocation`<sup>Required</sup> <a name="DefaultStorageLocation" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.defaultStorageLocation"></a>

```csharp
public string DefaultStorageLocation { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityFolderSettingsConfig <a name="ObservabilityFolderSettingsConfig" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ObservabilityFolderSettingsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Folder,
    string Location,
    string DefaultStorageLocation = null,
    string Id = null,
    string KmsKeyName = null,
    ObservabilityFolderSettingsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.folder">Folder</a></code> | <code>string</code> | The folder ID. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.location">Location</a></code> | <code>string</code> | The location of the settings. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.defaultStorageLocation">DefaultStorageLocation</a></code> | <code>string</code> | The default storage location for new resources, e.g. buckets. Only valid for global location. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#id ObservabilityFolderSettings#id}. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The default Cloud KMS key to use for new resources. Only valid for regional locations. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts">ObservabilityFolderSettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

The folder ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#folder ObservabilityFolderSettings#folder}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#location ObservabilityFolderSettings#location}

---

##### `DefaultStorageLocation`<sup>Optional</sup> <a name="DefaultStorageLocation" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.defaultStorageLocation"></a>

```csharp
public string DefaultStorageLocation { get; set; }
```

- *Type:* string

The default storage location for new resources, e.g. buckets. Only valid for global location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#default_storage_location ObservabilityFolderSettings#default_storage_location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#id ObservabilityFolderSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The default Cloud KMS key to use for new resources. Only valid for regional locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#kms_key_name ObservabilityFolderSettings#kms_key_name}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.timeouts"></a>

```csharp
public ObservabilityFolderSettingsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts">ObservabilityFolderSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#timeouts ObservabilityFolderSettings#timeouts}

---

### ObservabilityFolderSettingsTimeouts <a name="ObservabilityFolderSettingsTimeouts" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ObservabilityFolderSettingsTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#create ObservabilityFolderSettings#create}. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#delete ObservabilityFolderSettings#delete}. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#update ObservabilityFolderSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#create ObservabilityFolderSettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#delete ObservabilityFolderSettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#update ObservabilityFolderSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityFolderSettingsTimeoutsOutputReference <a name="ObservabilityFolderSettingsTimeoutsOutputReference" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ObservabilityFolderSettingsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts">ObservabilityFolderSettingsTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityFolderSettingsTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts">ObservabilityFolderSettingsTimeouts</a>

---



