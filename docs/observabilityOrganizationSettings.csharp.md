# `observabilityOrganizationSettings` Submodule <a name="`observabilityOrganizationSettings` Submodule" id="@cdktn/provider-google.observabilityOrganizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityOrganizationSettings <a name="ObservabilityOrganizationSettings" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings google_observability_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ObservabilityOrganizationSettings(Construct Scope, string Id, ObservabilityOrganizationSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig">ObservabilityOrganizationSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig">ObservabilityOrganizationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetDefaultStorageLocation">ResetDefaultStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.putTimeouts"></a>

```csharp
private void PutTimeouts(ObservabilityOrganizationSettingsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts">ObservabilityOrganizationSettingsTimeouts</a>

---

##### `ResetDefaultStorageLocation` <a name="ResetDefaultStorageLocation" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetDefaultStorageLocation"></a>

```csharp
private void ResetDefaultStorageLocation()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetKmsKeyName"></a>

```csharp
private void ResetKmsKeyName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ObservabilityOrganizationSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ObservabilityOrganizationSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ObservabilityOrganizationSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ObservabilityOrganizationSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ObservabilityOrganizationSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ObservabilityOrganizationSettings resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObservabilityOrganizationSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObservabilityOrganizationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityOrganizationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.serviceAccountId">ServiceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference">ObservabilityOrganizationSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.defaultStorageLocationInput">DefaultStorageLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts">ObservabilityOrganizationSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.defaultStorageLocation">DefaultStorageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.organization">Organization</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.serviceAccountId"></a>

```csharp
public string ServiceAccountId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.timeouts"></a>

```csharp
public ObservabilityOrganizationSettingsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference">ObservabilityOrganizationSettingsTimeoutsOutputReference</a>

---

##### `DefaultStorageLocationInput`<sup>Optional</sup> <a name="DefaultStorageLocationInput" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.defaultStorageLocationInput"></a>

```csharp
public string DefaultStorageLocationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.timeoutsInput"></a>

```csharp
public IResolvable|ObservabilityOrganizationSettingsTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts">ObservabilityOrganizationSettingsTimeouts</a>

---

##### `DefaultStorageLocation`<sup>Required</sup> <a name="DefaultStorageLocation" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.defaultStorageLocation"></a>

```csharp
public string DefaultStorageLocation { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityOrganizationSettingsConfig <a name="ObservabilityOrganizationSettingsConfig" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ObservabilityOrganizationSettingsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Organization,
    string DefaultStorageLocation = null,
    string Id = null,
    string KmsKeyName = null,
    ObservabilityOrganizationSettingsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.location">Location</a></code> | <code>string</code> | The location of the settings. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.organization">Organization</a></code> | <code>string</code> | The organization ID. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.defaultStorageLocation">DefaultStorageLocation</a></code> | <code>string</code> | The default storage location for new resources, e.g. buckets. Only valid for global location. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#id ObservabilityOrganizationSettings#id}. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The default Cloud KMS key to use for new resources. Only valid for regional locations. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts">ObservabilityOrganizationSettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#location ObservabilityOrganizationSettings#location}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

The organization ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#organization ObservabilityOrganizationSettings#organization}

---

##### `DefaultStorageLocation`<sup>Optional</sup> <a name="DefaultStorageLocation" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.defaultStorageLocation"></a>

```csharp
public string DefaultStorageLocation { get; set; }
```

- *Type:* string

The default storage location for new resources, e.g. buckets. Only valid for global location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#default_storage_location ObservabilityOrganizationSettings#default_storage_location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#id ObservabilityOrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The default Cloud KMS key to use for new resources. Only valid for regional locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#kms_key_name ObservabilityOrganizationSettings#kms_key_name}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.timeouts"></a>

```csharp
public ObservabilityOrganizationSettingsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts">ObservabilityOrganizationSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#timeouts ObservabilityOrganizationSettings#timeouts}

---

### ObservabilityOrganizationSettingsTimeouts <a name="ObservabilityOrganizationSettingsTimeouts" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ObservabilityOrganizationSettingsTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#create ObservabilityOrganizationSettings#create}. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#delete ObservabilityOrganizationSettings#delete}. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#update ObservabilityOrganizationSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#create ObservabilityOrganizationSettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#delete ObservabilityOrganizationSettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#update ObservabilityOrganizationSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityOrganizationSettingsTimeoutsOutputReference <a name="ObservabilityOrganizationSettingsTimeoutsOutputReference" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ObservabilityOrganizationSettingsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts">ObservabilityOrganizationSettingsTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityOrganizationSettingsTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts">ObservabilityOrganizationSettingsTimeouts</a>

---



