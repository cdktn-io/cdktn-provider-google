# `osLoginSshPublicKey` Submodule <a name="`osLoginSshPublicKey` Submodule" id="@cdktn/provider-google.osLoginSshPublicKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsLoginSshPublicKey <a name="OsLoginSshPublicKey" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/os_login_ssh_public_key google_os_login_ssh_public_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OsLoginSshPublicKey(Construct Scope, string Id, OsLoginSshPublicKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig">OsLoginSshPublicKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig">OsLoginSshPublicKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetExpirationTimeUsec">ResetExpirationTimeUsec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.putTimeouts"></a>

```csharp
private void PutTimeouts(OsLoginSshPublicKeyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetExpirationTimeUsec` <a name="ResetExpirationTimeUsec" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetExpirationTimeUsec"></a>

```csharp
private void ResetExpirationTimeUsec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OsLoginSshPublicKey resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

OsLoginSshPublicKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

OsLoginSshPublicKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

OsLoginSshPublicKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

OsLoginSshPublicKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OsLoginSshPublicKey resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsLoginSshPublicKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsLoginSshPublicKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/os_login_ssh_public_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OsLoginSshPublicKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference">OsLoginSshPublicKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.expirationTimeUsecInput">ExpirationTimeUsecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.expirationTimeUsec">ExpirationTimeUsec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.user">User</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.timeouts"></a>

```csharp
public OsLoginSshPublicKeyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference">OsLoginSshPublicKeyTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `ExpirationTimeUsecInput`<sup>Optional</sup> <a name="ExpirationTimeUsecInput" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.expirationTimeUsecInput"></a>

```csharp
public string ExpirationTimeUsecInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.timeoutsInput"></a>

```csharp
public IResolvable|OsLoginSshPublicKeyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a>

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `ExpirationTimeUsec`<sup>Required</sup> <a name="ExpirationTimeUsec" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.expirationTimeUsec"></a>

```csharp
public string ExpirationTimeUsec { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsLoginSshPublicKeyConfig <a name="OsLoginSshPublicKeyConfig" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OsLoginSshPublicKeyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Key,
    string User,
    string DeletionPolicy = null,
    string ExpirationTimeUsec = null,
    string Id = null,
    string Project = null,
    OsLoginSshPublicKeyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.key">Key</a></code> | <code>string</code> | Public key text in SSH format, defined by RFC4253 section 6.6. |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.user">User</a></code> | <code>string</code> | The user email. |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.expirationTimeUsec">ExpirationTimeUsec</a></code> | <code>string</code> | An expiration time in microseconds since epoch. |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/os_login_ssh_public_key#id OsLoginSshPublicKey#id}. |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.project">Project</a></code> | <code>string</code> | The project ID of the Google Cloud Platform project. |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Public key text in SSH format, defined by RFC4253 section 6.6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/os_login_ssh_public_key#key OsLoginSshPublicKey#key}

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

The user email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/os_login_ssh_public_key#user OsLoginSshPublicKey#user}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/os_login_ssh_public_key#deletion_policy OsLoginSshPublicKey#deletion_policy}

---

##### `ExpirationTimeUsec`<sup>Optional</sup> <a name="ExpirationTimeUsec" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.expirationTimeUsec"></a>

```csharp
public string ExpirationTimeUsec { get; set; }
```

- *Type:* string

An expiration time in microseconds since epoch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/os_login_ssh_public_key#expiration_time_usec OsLoginSshPublicKey#expiration_time_usec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/os_login_ssh_public_key#id OsLoginSshPublicKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project ID of the Google Cloud Platform project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/os_login_ssh_public_key#project OsLoginSshPublicKey#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyConfig.property.timeouts"></a>

```csharp
public OsLoginSshPublicKeyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/os_login_ssh_public_key#timeouts OsLoginSshPublicKey#timeouts}

---

### OsLoginSshPublicKeyTimeouts <a name="OsLoginSshPublicKeyTimeouts" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OsLoginSshPublicKeyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/os_login_ssh_public_key#create OsLoginSshPublicKey#create}. |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/os_login_ssh_public_key#delete OsLoginSshPublicKey#delete}. |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/os_login_ssh_public_key#update OsLoginSshPublicKey#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/os_login_ssh_public_key#create OsLoginSshPublicKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/os_login_ssh_public_key#delete OsLoginSshPublicKey#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/os_login_ssh_public_key#update OsLoginSshPublicKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsLoginSshPublicKeyTimeoutsOutputReference <a name="OsLoginSshPublicKeyTimeoutsOutputReference" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OsLoginSshPublicKeyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OsLoginSshPublicKeyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.osLoginSshPublicKey.OsLoginSshPublicKeyTimeouts">OsLoginSshPublicKeyTimeouts</a>

---



