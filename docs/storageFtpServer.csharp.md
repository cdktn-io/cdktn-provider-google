# `storageFtpServer` Submodule <a name="`storageFtpServer` Submodule" id="@cdktn/provider-google.storageFtpServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageFtpServer <a name="StorageFtpServer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server google_storage_ftp_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageFtpServer(Construct Scope, string Id, StorageFtpServerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig">StorageFtpServerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig">StorageFtpServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.putExternalConfig">PutExternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.putInternalConfig">PutInternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetExternalConfig">ResetExternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetInternalConfig">ResetInternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExternalConfig` <a name="PutExternalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putExternalConfig"></a>

```csharp
private void PutExternalConfig(StorageFtpServerExternalConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putExternalConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a>

---

##### `PutInternalConfig` <a name="PutInternalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putInternalConfig"></a>

```csharp
private void PutInternalConfig(StorageFtpServerInternalConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putInternalConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putTimeouts"></a>

```csharp
private void PutTimeouts(StorageFtpServerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetExternalConfig` <a name="ResetExternalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetExternalConfig"></a>

```csharp
private void ResetExternalConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInternalConfig` <a name="ResetInternalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetInternalConfig"></a>

```csharp
private void ResetInternalConfig()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StorageFtpServer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

StorageFtpServer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

StorageFtpServer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

StorageFtpServer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

StorageFtpServer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a StorageFtpServer resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageFtpServer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageFtpServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the StorageFtpServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.externalConfig">ExternalConfig</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference">StorageFtpServerExternalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.internalConfig">InternalConfig</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference">StorageFtpServerInternalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.serviceAgent">ServiceAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference">StorageFtpServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.accessTypeInput">AccessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.externalConfigInput">ExternalConfigInput</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.internalConfigInput">InternalConfigInput</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.serverIdInput">ServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.accessType">AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.serverId">ServerId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `ExternalConfig`<sup>Required</sup> <a name="ExternalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.externalConfig"></a>

```csharp
public StorageFtpServerExternalConfigOutputReference ExternalConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference">StorageFtpServerExternalConfigOutputReference</a>

---

##### `InternalConfig`<sup>Required</sup> <a name="InternalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.internalConfig"></a>

```csharp
public StorageFtpServerInternalConfigOutputReference InternalConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference">StorageFtpServerInternalConfigOutputReference</a>

---

##### `ServiceAgent`<sup>Required</sup> <a name="ServiceAgent" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.serviceAgent"></a>

```csharp
public string ServiceAgent { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.timeouts"></a>

```csharp
public StorageFtpServerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference">StorageFtpServerTimeoutsOutputReference</a>

---

##### `AccessTypeInput`<sup>Optional</sup> <a name="AccessTypeInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.accessTypeInput"></a>

```csharp
public string AccessTypeInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExternalConfigInput`<sup>Optional</sup> <a name="ExternalConfigInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.externalConfigInput"></a>

```csharp
public StorageFtpServerExternalConfig ExternalConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InternalConfigInput`<sup>Optional</sup> <a name="InternalConfigInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.internalConfigInput"></a>

```csharp
public StorageFtpServerInternalConfig InternalConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.serverIdInput"></a>

```csharp
public string ServerIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.timeoutsInput"></a>

```csharp
public IResolvable|StorageFtpServerTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a>

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.accessType"></a>

```csharp
public string AccessType { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.serverId"></a>

```csharp
public string ServerId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageFtpServerConfig <a name="StorageFtpServerConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageFtpServerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccessType,
    string Location,
    string ServerId,
    string DeletionPolicy = null,
    string DisplayName = null,
    StorageFtpServerExternalConfig ExternalConfig = null,
    string Id = null,
    StorageFtpServerInternalConfig InternalConfig = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    StorageFtpServerTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.accessType">AccessType</a></code> | <code>string</code> | The access type for this SFTP server. Possible values: INTERNAL, EXTERNAL Possible values: ["INTERNAL", "EXTERNAL"]. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.location">Location</a></code> | <code>string</code> | The location (region) of the Storage FTP Server. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.serverId">ServerId</a></code> | <code>string</code> | A unique ID for the server. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.displayName">DisplayName</a></code> | <code>string</code> | A display name for the server. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.externalConfig">ExternalConfig</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a></code> | external_config block. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#id StorageFtpServer#id}. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.internalConfig">InternalConfig</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a></code> | internal_config block. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A set of key/value label pairs to assign to the Storage FTP Server. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#project StorageFtpServer#project}. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.accessType"></a>

```csharp
public string AccessType { get; set; }
```

- *Type:* string

The access type for this SFTP server. Possible values: INTERNAL, EXTERNAL Possible values: ["INTERNAL", "EXTERNAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#access_type StorageFtpServer#access_type}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location (region) of the Storage FTP Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#location StorageFtpServer#location}

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.serverId"></a>

```csharp
public string ServerId { get; set; }
```

- *Type:* string

A unique ID for the server.

Must start with a lowercase letter, and end with a lowercase letter or number. Can contain lowercase letters, numbers, and hyphens. Maximum 30 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#server_id StorageFtpServer#server_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#deletion_policy StorageFtpServer#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A display name for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#display_name StorageFtpServer#display_name}

---

##### `ExternalConfig`<sup>Optional</sup> <a name="ExternalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.externalConfig"></a>

```csharp
public StorageFtpServerExternalConfig ExternalConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a>

external_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#external_config StorageFtpServer#external_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#id StorageFtpServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InternalConfig`<sup>Optional</sup> <a name="InternalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.internalConfig"></a>

```csharp
public StorageFtpServerInternalConfig InternalConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a>

internal_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#internal_config StorageFtpServer#internal_config}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A set of key/value label pairs to assign to the Storage FTP Server.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#labels StorageFtpServer#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#project StorageFtpServer#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.timeouts"></a>

```csharp
public StorageFtpServerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#timeouts StorageFtpServer#timeouts}

---

### StorageFtpServerExternalConfig <a name="StorageFtpServerExternalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageFtpServerExternalConfig {
    string[] AllowedCidrBlocks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig.property.allowedCidrBlocks">AllowedCidrBlocks</a></code> | <code>string[]</code> | A list of allowed IPv4 or IPv6 CIDR block ranges that can connect to this server. |

---

##### `AllowedCidrBlocks`<sup>Optional</sup> <a name="AllowedCidrBlocks" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig.property.allowedCidrBlocks"></a>

```csharp
public string[] AllowedCidrBlocks { get; set; }
```

- *Type:* string[]

A list of allowed IPv4 or IPv6 CIDR block ranges that can connect to this server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#allowed_cidr_blocks StorageFtpServer#allowed_cidr_blocks}

---

### StorageFtpServerInternalConfig <a name="StorageFtpServerInternalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageFtpServerInternalConfig {
    IResolvable|StorageFtpServerInternalConfigConsumerAcceptListStruct[] ConsumerAcceptList = null,
    IResolvable|StorageFtpServerInternalConfigConsumerRejectListStruct[] ConsumerRejectList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig.property.consumerAcceptList">ConsumerAcceptList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>[]</code> | consumer_accept_list block. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig.property.consumerRejectList">ConsumerRejectList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>[]</code> | consumer_reject_list block. |

---

##### `ConsumerAcceptList`<sup>Optional</sup> <a name="ConsumerAcceptList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig.property.consumerAcceptList"></a>

```csharp
public IResolvable|StorageFtpServerInternalConfigConsumerAcceptListStruct[] ConsumerAcceptList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>[]

consumer_accept_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#consumer_accept_list StorageFtpServer#consumer_accept_list}

---

##### `ConsumerRejectList`<sup>Optional</sup> <a name="ConsumerRejectList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig.property.consumerRejectList"></a>

```csharp
public IResolvable|StorageFtpServerInternalConfigConsumerRejectListStruct[] ConsumerRejectList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>[]

consumer_reject_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#consumer_reject_list StorageFtpServer#consumer_reject_list}

---

### StorageFtpServerInternalConfigConsumerAcceptListStruct <a name="StorageFtpServerInternalConfigConsumerAcceptListStruct" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageFtpServerInternalConfigConsumerAcceptListStruct {
    double ConnectionLimit,
    string Project
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct.property.connectionLimit">ConnectionLimit</a></code> | <code>double</code> | The maximum number of Private Service Connect endpoints that can be created in the consumer project. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct.property.project">Project</a></code> | <code>string</code> | The project that is allowed to connect, in the format 'projects/{project}'. |

---

##### `ConnectionLimit`<sup>Required</sup> <a name="ConnectionLimit" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct.property.connectionLimit"></a>

```csharp
public double ConnectionLimit { get; set; }
```

- *Type:* double

The maximum number of Private Service Connect endpoints that can be created in the consumer project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#connection_limit StorageFtpServer#connection_limit}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project that is allowed to connect, in the format 'projects/{project}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#project StorageFtpServer#project}

---

### StorageFtpServerInternalConfigConsumerRejectListStruct <a name="StorageFtpServerInternalConfigConsumerRejectListStruct" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageFtpServerInternalConfigConsumerRejectListStruct {
    string Project
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct.property.project">Project</a></code> | <code>string</code> | The project that is rejected from connecting, in the format 'projects/{project}'. |

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project that is rejected from connecting, in the format 'projects/{project}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#project StorageFtpServer#project}

---

### StorageFtpServerTimeouts <a name="StorageFtpServerTimeouts" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageFtpServerTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#create StorageFtpServer#create}. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#delete StorageFtpServer#delete}. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#update StorageFtpServer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#create StorageFtpServer#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#delete StorageFtpServer#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#update StorageFtpServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageFtpServerExternalConfigOutputReference <a name="StorageFtpServerExternalConfigOutputReference" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageFtpServerExternalConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.resetAllowedCidrBlocks">ResetAllowedCidrBlocks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedCidrBlocks` <a name="ResetAllowedCidrBlocks" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.resetAllowedCidrBlocks"></a>

```csharp
private void ResetAllowedCidrBlocks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.allowedCidrBlocksInput">AllowedCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.allowedCidrBlocks">AllowedCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `AllowedCidrBlocksInput`<sup>Optional</sup> <a name="AllowedCidrBlocksInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.allowedCidrBlocksInput"></a>

```csharp
public string[] AllowedCidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `AllowedCidrBlocks`<sup>Required</sup> <a name="AllowedCidrBlocks" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.allowedCidrBlocks"></a>

```csharp
public string[] AllowedCidrBlocks { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.internalValue"></a>

```csharp
public StorageFtpServerExternalConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a>

---


### StorageFtpServerInternalConfigConsumerAcceptListStructList <a name="StorageFtpServerInternalConfigConsumerAcceptListStructList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageFtpServerInternalConfigConsumerAcceptListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.get"></a>

```csharp
private StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.property.internalValue"></a>

```csharp
public IResolvable|StorageFtpServerInternalConfigConsumerAcceptListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>[]

---


### StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference <a name="StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.connectionLimitInput">ConnectionLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.connectionLimit">ConnectionLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionLimitInput`<sup>Optional</sup> <a name="ConnectionLimitInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.connectionLimitInput"></a>

```csharp
public double ConnectionLimitInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ConnectionLimit`<sup>Required</sup> <a name="ConnectionLimit" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.connectionLimit"></a>

```csharp
public double ConnectionLimit { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StorageFtpServerInternalConfigConsumerAcceptListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>

---


### StorageFtpServerInternalConfigConsumerRejectListStructList <a name="StorageFtpServerInternalConfigConsumerRejectListStructList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageFtpServerInternalConfigConsumerRejectListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.get"></a>

```csharp
private StorageFtpServerInternalConfigConsumerRejectListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.property.internalValue"></a>

```csharp
public IResolvable|StorageFtpServerInternalConfigConsumerRejectListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>[]

---


### StorageFtpServerInternalConfigConsumerRejectListStructOutputReference <a name="StorageFtpServerInternalConfigConsumerRejectListStructOutputReference" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageFtpServerInternalConfigConsumerRejectListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StorageFtpServerInternalConfigConsumerRejectListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>

---


### StorageFtpServerInternalConfigOutputReference <a name="StorageFtpServerInternalConfigOutputReference" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageFtpServerInternalConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.putConsumerAcceptList">PutConsumerAcceptList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.putConsumerRejectList">PutConsumerRejectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resetConsumerAcceptList">ResetConsumerAcceptList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resetConsumerRejectList">ResetConsumerRejectList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConsumerAcceptList` <a name="PutConsumerAcceptList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.putConsumerAcceptList"></a>

```csharp
private void PutConsumerAcceptList(IResolvable|StorageFtpServerInternalConfigConsumerAcceptListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.putConsumerAcceptList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>[]

---

##### `PutConsumerRejectList` <a name="PutConsumerRejectList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.putConsumerRejectList"></a>

```csharp
private void PutConsumerRejectList(IResolvable|StorageFtpServerInternalConfigConsumerRejectListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.putConsumerRejectList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>[]

---

##### `ResetConsumerAcceptList` <a name="ResetConsumerAcceptList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resetConsumerAcceptList"></a>

```csharp
private void ResetConsumerAcceptList()
```

##### `ResetConsumerRejectList` <a name="ResetConsumerRejectList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resetConsumerRejectList"></a>

```csharp
private void ResetConsumerRejectList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerAcceptList">ConsumerAcceptList</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList">StorageFtpServerInternalConfigConsumerAcceptListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerRejectList">ConsumerRejectList</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList">StorageFtpServerInternalConfigConsumerRejectListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerAcceptListInput">ConsumerAcceptListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerRejectListInput">ConsumerRejectListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsumerAcceptList`<sup>Required</sup> <a name="ConsumerAcceptList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerAcceptList"></a>

```csharp
public StorageFtpServerInternalConfigConsumerAcceptListStructList ConsumerAcceptList { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList">StorageFtpServerInternalConfigConsumerAcceptListStructList</a>

---

##### `ConsumerRejectList`<sup>Required</sup> <a name="ConsumerRejectList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerRejectList"></a>

```csharp
public StorageFtpServerInternalConfigConsumerRejectListStructList ConsumerRejectList { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList">StorageFtpServerInternalConfigConsumerRejectListStructList</a>

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.serviceAttachment"></a>

```csharp
public string ServiceAttachment { get; }
```

- *Type:* string

---

##### `ConsumerAcceptListInput`<sup>Optional</sup> <a name="ConsumerAcceptListInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerAcceptListInput"></a>

```csharp
public IResolvable|StorageFtpServerInternalConfigConsumerAcceptListStruct[] ConsumerAcceptListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>[]

---

##### `ConsumerRejectListInput`<sup>Optional</sup> <a name="ConsumerRejectListInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerRejectListInput"></a>

```csharp
public IResolvable|StorageFtpServerInternalConfigConsumerRejectListStruct[] ConsumerRejectListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.internalValue"></a>

```csharp
public StorageFtpServerInternalConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a>

---


### StorageFtpServerTimeoutsOutputReference <a name="StorageFtpServerTimeoutsOutputReference" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageFtpServerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StorageFtpServerTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a>

---



