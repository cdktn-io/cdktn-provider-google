# `storageFtpUser` Submodule <a name="`storageFtpUser` Submodule" id="@cdktn/provider-google.storageFtpUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageFtpUser <a name="StorageFtpUser" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user google_storage_ftp_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageFtpUser(Construct Scope, string Id, StorageFtpUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig">StorageFtpUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig">StorageFtpUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.putStorageDirectoryMappings">PutStorageDirectoryMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.putUserCredentials">PutUserCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetStorageDirectoryMappings">ResetStorageDirectoryMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetUserCredentials">ResetUserCredentials</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStorageDirectoryMappings` <a name="PutStorageDirectoryMappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putStorageDirectoryMappings"></a>

```csharp
private void PutStorageDirectoryMappings(IResolvable|StorageFtpUserStorageDirectoryMappings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putStorageDirectoryMappings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putTimeouts"></a>

```csharp
private void PutTimeouts(StorageFtpUserTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a>

---

##### `PutUserCredentials` <a name="PutUserCredentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putUserCredentials"></a>

```csharp
private void PutUserCredentials(IResolvable|StorageFtpUserUserCredentials[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putUserCredentials.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>[]

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetStorageDirectoryMappings` <a name="ResetStorageDirectoryMappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetStorageDirectoryMappings"></a>

```csharp
private void ResetStorageDirectoryMappings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserCredentials` <a name="ResetUserCredentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetUserCredentials"></a>

```csharp
private void ResetUserCredentials()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StorageFtpUser resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

StorageFtpUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

StorageFtpUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

StorageFtpUser.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

StorageFtpUser.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a StorageFtpUser resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageFtpUser to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageFtpUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the StorageFtpUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.storageDirectoryMappings">StorageDirectoryMappings</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList">StorageFtpUserStorageDirectoryMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference">StorageFtpUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userCredentials">UserCredentials</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList">StorageFtpUserUserCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.customerServiceAccountInput">CustomerServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.serverIdInput">ServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.storageDirectoryMappingsInput">StorageDirectoryMappingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userCredentialsInput">UserCredentialsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.customerServiceAccount">CustomerServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.serverId">ServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userId">UserId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StorageDirectoryMappings`<sup>Required</sup> <a name="StorageDirectoryMappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.storageDirectoryMappings"></a>

```csharp
public StorageFtpUserStorageDirectoryMappingsList StorageDirectoryMappings { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList">StorageFtpUserStorageDirectoryMappingsList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.timeouts"></a>

```csharp
public StorageFtpUserTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference">StorageFtpUserTimeoutsOutputReference</a>

---

##### `UserCredentials`<sup>Required</sup> <a name="UserCredentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userCredentials"></a>

```csharp
public StorageFtpUserUserCredentialsList UserCredentials { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList">StorageFtpUserUserCredentialsList</a>

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `CustomerServiceAccountInput`<sup>Optional</sup> <a name="CustomerServiceAccountInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.customerServiceAccountInput"></a>

```csharp
public string CustomerServiceAccountInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.serverIdInput"></a>

```csharp
public string ServerIdInput { get; }
```

- *Type:* string

---

##### `StorageDirectoryMappingsInput`<sup>Optional</sup> <a name="StorageDirectoryMappingsInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.storageDirectoryMappingsInput"></a>

```csharp
public IResolvable|StorageFtpUserStorageDirectoryMappings[] StorageDirectoryMappingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.timeoutsInput"></a>

```csharp
public IResolvable|StorageFtpUserTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a>

---

##### `UserCredentialsInput`<sup>Optional</sup> <a name="UserCredentialsInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userCredentialsInput"></a>

```csharp
public IResolvable|StorageFtpUserUserCredentials[] UserCredentialsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>[]

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `CustomerServiceAccount`<sup>Required</sup> <a name="CustomerServiceAccount" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.customerServiceAccount"></a>

```csharp
public string CustomerServiceAccount { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.serverId"></a>

```csharp
public string ServerId { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageFtpUserConfig <a name="StorageFtpUserConfig" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageFtpUserConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CustomerServiceAccount,
    string Location,
    string ServerId,
    string UserId,
    string DeletionPolicy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    IResolvable|StorageFtpUserStorageDirectoryMappings[] StorageDirectoryMappings = null,
    StorageFtpUserTimeouts Timeouts = null,
    IResolvable|StorageFtpUserUserCredentials[] UserCredentials = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.customerServiceAccount">CustomerServiceAccount</a></code> | <code>string</code> | The email address of the service account associated with the user. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.location">Location</a></code> | <code>string</code> | The location (region) of the Storage FTP User. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.serverId">ServerId</a></code> | <code>string</code> | The ID of the server. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.userId">UserId</a></code> | <code>string</code> | The unique ID for the user. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#id StorageFtpUser#id}. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Resource labels that can contain user-provided metadata. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#project StorageFtpUser#project}. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.storageDirectoryMappings">StorageDirectoryMappings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>[]</code> | storage_directory_mappings block. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.userCredentials">UserCredentials</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>[]</code> | user_credentials block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CustomerServiceAccount`<sup>Required</sup> <a name="CustomerServiceAccount" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.customerServiceAccount"></a>

```csharp
public string CustomerServiceAccount { get; set; }
```

- *Type:* string

The email address of the service account associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#customer_service_account StorageFtpUser#customer_service_account}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location (region) of the Storage FTP User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#location StorageFtpUser#location}

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.serverId"></a>

```csharp
public string ServerId { get; set; }
```

- *Type:* string

The ID of the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#server_id StorageFtpUser#server_id}

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

The unique ID for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#user_id StorageFtpUser#user_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#deletion_policy StorageFtpUser#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#id StorageFtpUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Resource labels that can contain user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#labels StorageFtpUser#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#project StorageFtpUser#project}.

---

##### `StorageDirectoryMappings`<sup>Optional</sup> <a name="StorageDirectoryMappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.storageDirectoryMappings"></a>

```csharp
public IResolvable|StorageFtpUserStorageDirectoryMappings[] StorageDirectoryMappings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>[]

storage_directory_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#storage_directory_mappings StorageFtpUser#storage_directory_mappings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.timeouts"></a>

```csharp
public StorageFtpUserTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#timeouts StorageFtpUser#timeouts}

---

##### `UserCredentials`<sup>Optional</sup> <a name="UserCredentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.userCredentials"></a>

```csharp
public IResolvable|StorageFtpUserUserCredentials[] UserCredentials { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>[]

user_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#user_credentials StorageFtpUser#user_credentials}

---

### StorageFtpUserStorageDirectoryMappings <a name="StorageFtpUserStorageDirectoryMappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageFtpUserStorageDirectoryMappings {
    string Bucket = null,
    string BucketPrefix = null,
    string Directory = null,
    string Permission = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.bucket">Bucket</a></code> | <code>string</code> | The Cloud Storage bucket name. Omit the gs://. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | The path of a folder within the bucket to set as the root directory for this directory mapping. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.directory">Directory</a></code> | <code>string</code> | The directory path in the virtual file system. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.permission">Permission</a></code> | <code>string</code> | The access level for the directory. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The Cloud Storage bucket name. Omit the gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#bucket StorageFtpUser#bucket}

---

##### `BucketPrefix`<sup>Optional</sup> <a name="BucketPrefix" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; set; }
```

- *Type:* string

The path of a folder within the bucket to set as the root directory for this directory mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#bucket_prefix StorageFtpUser#bucket_prefix}

---

##### `Directory`<sup>Optional</sup> <a name="Directory" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.directory"></a>

```csharp
public string Directory { get; set; }
```

- *Type:* string

The directory path in the virtual file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#directory StorageFtpUser#directory}

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

The access level for the directory.

For read-only access, set this value to READ_ONLY. For read and write access, set this value to READ_WRITE. Possible values: ["READ_ONLY", "READ_WRITE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#permission StorageFtpUser#permission}

---

### StorageFtpUserTimeouts <a name="StorageFtpUserTimeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageFtpUserTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#create StorageFtpUser#create}. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#delete StorageFtpUser#delete}. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#update StorageFtpUser#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#create StorageFtpUser#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#delete StorageFtpUser#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#update StorageFtpUser#update}.

---

### StorageFtpUserUserCredentials <a name="StorageFtpUserUserCredentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageFtpUserUserCredentials {
    string CredentialName = null,
    string CredentialType = null,
    string SshPublicKeyBody = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.credentialName">CredentialName</a></code> | <code>string</code> | The name of the credential. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.credentialType">CredentialType</a></code> | <code>string</code> | The type of the credential. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.sshPublicKeyBody">SshPublicKeyBody</a></code> | <code>string</code> | The SSH public key body. |

---

##### `CredentialName`<sup>Optional</sup> <a name="CredentialName" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.credentialName"></a>

```csharp
public string CredentialName { get; set; }
```

- *Type:* string

The name of the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#credential_name StorageFtpUser#credential_name}

---

##### `CredentialType`<sup>Optional</sup> <a name="CredentialType" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.credentialType"></a>

```csharp
public string CredentialType { get; set; }
```

- *Type:* string

The type of the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#credential_type StorageFtpUser#credential_type}

---

##### `SshPublicKeyBody`<sup>Optional</sup> <a name="SshPublicKeyBody" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.sshPublicKeyBody"></a>

```csharp
public string SshPublicKeyBody { get; set; }
```

- *Type:* string

The SSH public key body.

A file either absolute or relative path should be provided which contains the ssh public key using file() interpolation in Terraform, not recommended to have key as a literal string in config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#ssh_public_key_body StorageFtpUser#ssh_public_key_body}

---

## Classes <a name="Classes" id="Classes"></a>

### StorageFtpUserStorageDirectoryMappingsList <a name="StorageFtpUserStorageDirectoryMappingsList" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageFtpUserStorageDirectoryMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.get"></a>

```csharp
private StorageFtpUserStorageDirectoryMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.internalValue"></a>

```csharp
public IResolvable|StorageFtpUserStorageDirectoryMappings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>[]

---


### StorageFtpUserStorageDirectoryMappingsOutputReference <a name="StorageFtpUserStorageDirectoryMappingsOutputReference" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageFtpUserStorageDirectoryMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetBucketPrefix">ResetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetDirectory">ResetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetBucketPrefix` <a name="ResetBucketPrefix" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetBucketPrefix"></a>

```csharp
private void ResetBucketPrefix()
```

##### `ResetDirectory` <a name="ResetDirectory" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetDirectory"></a>

```csharp
private void ResetDirectory()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetPermission"></a>

```csharp
private void ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefixInput">BucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.directoryInput">DirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.directory">Directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `BucketPrefixInput`<sup>Optional</sup> <a name="BucketPrefixInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefixInput"></a>

```csharp
public string BucketPrefixInput { get; }
```

- *Type:* string

---

##### `DirectoryInput`<sup>Optional</sup> <a name="DirectoryInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.directoryInput"></a>

```csharp
public string DirectoryInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; }
```

- *Type:* string

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.directory"></a>

```csharp
public string Directory { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StorageFtpUserStorageDirectoryMappings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>

---


### StorageFtpUserTimeoutsOutputReference <a name="StorageFtpUserTimeoutsOutputReference" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageFtpUserTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StorageFtpUserTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a>

---


### StorageFtpUserUserCredentialsList <a name="StorageFtpUserUserCredentialsList" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageFtpUserUserCredentialsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.get"></a>

```csharp
private StorageFtpUserUserCredentialsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.internalValue"></a>

```csharp
public IResolvable|StorageFtpUserUserCredentials[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>[]

---


### StorageFtpUserUserCredentialsOutputReference <a name="StorageFtpUserUserCredentialsOutputReference" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageFtpUserUserCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetCredentialName">ResetCredentialName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetCredentialType">ResetCredentialType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetSshPublicKeyBody">ResetSshPublicKeyBody</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCredentialName` <a name="ResetCredentialName" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetCredentialName"></a>

```csharp
private void ResetCredentialName()
```

##### `ResetCredentialType` <a name="ResetCredentialType" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetCredentialType"></a>

```csharp
private void ResetCredentialType()
```

##### `ResetSshPublicKeyBody` <a name="ResetSshPublicKeyBody" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetSshPublicKeyBody"></a>

```csharp
private void ResetSshPublicKeyBody()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialNameInput">CredentialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialTypeInput">CredentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBodyInput">SshPublicKeyBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialName">CredentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBody">SshPublicKeyBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialNameInput`<sup>Optional</sup> <a name="CredentialNameInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialNameInput"></a>

```csharp
public string CredentialNameInput { get; }
```

- *Type:* string

---

##### `CredentialTypeInput`<sup>Optional</sup> <a name="CredentialTypeInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialTypeInput"></a>

```csharp
public string CredentialTypeInput { get; }
```

- *Type:* string

---

##### `SshPublicKeyBodyInput`<sup>Optional</sup> <a name="SshPublicKeyBodyInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBodyInput"></a>

```csharp
public string SshPublicKeyBodyInput { get; }
```

- *Type:* string

---

##### `CredentialName`<sup>Required</sup> <a name="CredentialName" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialName"></a>

```csharp
public string CredentialName { get; }
```

- *Type:* string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `SshPublicKeyBody`<sup>Required</sup> <a name="SshPublicKeyBody" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBody"></a>

```csharp
public string SshPublicKeyBody { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StorageFtpUserUserCredentials InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>

---



