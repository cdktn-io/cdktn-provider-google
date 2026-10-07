# `sccNotificationServiceAccount` Submodule <a name="`sccNotificationServiceAccount` Submodule" id="@cdktn/provider-google.sccNotificationServiceAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccNotificationServiceAccount <a name="SccNotificationServiceAccount" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/scc_notification_service_account google_scc_notification_service_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SccNotificationServiceAccount(Construct Scope, string Id, SccNotificationServiceAccountConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig">SccNotificationServiceAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig">SccNotificationServiceAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.putTimeouts"></a>

```csharp
private void PutTimeouts(SccNotificationServiceAccountTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeouts">SccNotificationServiceAccountTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SccNotificationServiceAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

SccNotificationServiceAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

SccNotificationServiceAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

SccNotificationServiceAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

SccNotificationServiceAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SccNotificationServiceAccount resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SccNotificationServiceAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SccNotificationServiceAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/scc_notification_service_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SccNotificationServiceAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference">SccNotificationServiceAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeouts">SccNotificationServiceAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.timeouts"></a>

```csharp
public SccNotificationServiceAccountTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference">SccNotificationServiceAccountTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.timeoutsInput"></a>

```csharp
public IResolvable|SccNotificationServiceAccountTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeouts">SccNotificationServiceAccountTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SccNotificationServiceAccountConfig <a name="SccNotificationServiceAccountConfig" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SccNotificationServiceAccountConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    string Organization = null,
    string Project = null,
    SccNotificationServiceAccountTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/scc_notification_service_account#id SccNotificationServiceAccount#id}. |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig.property.organization">Organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/scc_notification_service_account#organization SccNotificationServiceAccount#organization}. |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/scc_notification_service_account#project SccNotificationServiceAccount#project}. |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeouts">SccNotificationServiceAccountTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/scc_notification_service_account#id SccNotificationServiceAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/scc_notification_service_account#organization SccNotificationServiceAccount#organization}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/scc_notification_service_account#project SccNotificationServiceAccount#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountConfig.property.timeouts"></a>

```csharp
public SccNotificationServiceAccountTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeouts">SccNotificationServiceAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/scc_notification_service_account#timeouts SccNotificationServiceAccount#timeouts}

---

### SccNotificationServiceAccountTimeouts <a name="SccNotificationServiceAccountTimeouts" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SccNotificationServiceAccountTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/scc_notification_service_account#create SccNotificationServiceAccount#create}. |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/scc_notification_service_account#delete SccNotificationServiceAccount#delete}. |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/scc_notification_service_account#read SccNotificationServiceAccount#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/scc_notification_service_account#create SccNotificationServiceAccount#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/scc_notification_service_account#delete SccNotificationServiceAccount#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/scc_notification_service_account#read SccNotificationServiceAccount#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccNotificationServiceAccountTimeoutsOutputReference <a name="SccNotificationServiceAccountTimeoutsOutputReference" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SccNotificationServiceAccountTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeouts">SccNotificationServiceAccountTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SccNotificationServiceAccountTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.sccNotificationServiceAccount.SccNotificationServiceAccountTimeouts">SccNotificationServiceAccountTimeouts</a>

---



