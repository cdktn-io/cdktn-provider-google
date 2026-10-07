# `monitoringSnooze` Submodule <a name="`monitoringSnooze` Submodule" id="@cdktn/provider-google.monitoringSnooze"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringSnooze <a name="MonitoringSnooze" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze google_monitoring_snooze}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MonitoringSnooze(Construct Scope, string Id, MonitoringSnoozeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig">MonitoringSnoozeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig">MonitoringSnoozeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putInterval">PutInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCriteria` <a name="PutCriteria" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putCriteria"></a>

```csharp
private void PutCriteria(MonitoringSnoozeCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a>

---

##### `PutInterval` <a name="PutInterval" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putInterval"></a>

```csharp
private void PutInterval(MonitoringSnoozeInterval Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putInterval.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putTimeouts"></a>

```csharp
private void PutTimeouts(MonitoringSnoozeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MonitoringSnooze resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

MonitoringSnooze.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

MonitoringSnooze.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

MonitoringSnooze.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

MonitoringSnooze.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MonitoringSnooze resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitoringSnooze to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitoringSnooze that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MonitoringSnooze to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference">MonitoringSnoozeCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.interval">Interval</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference">MonitoringSnoozeIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference">MonitoringSnoozeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.criteriaInput">CriteriaInput</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.intervalInput">IntervalInput</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.criteria"></a>

```csharp
public MonitoringSnoozeCriteriaOutputReference Criteria { get; }
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference">MonitoringSnoozeCriteriaOutputReference</a>

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.interval"></a>

```csharp
public MonitoringSnoozeIntervalOutputReference Interval { get; }
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference">MonitoringSnoozeIntervalOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.timeouts"></a>

```csharp
public MonitoringSnoozeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference">MonitoringSnoozeTimeoutsOutputReference</a>

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.criteriaInput"></a>

```csharp
public MonitoringSnoozeCriteria CriteriaInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.intervalInput"></a>

```csharp
public MonitoringSnoozeInterval IntervalInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.timeoutsInput"></a>

```csharp
public IResolvable|MonitoringSnoozeTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringSnoozeConfig <a name="MonitoringSnoozeConfig" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MonitoringSnoozeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    MonitoringSnoozeCriteria Criteria,
    string DisplayName,
    MonitoringSnoozeInterval Interval,
    string Id = null,
    string Project = null,
    MonitoringSnoozeTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a></code> | criteria block. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.displayName">DisplayName</a></code> | <code>string</code> | A display name for the Snooze. This can be, at most, 512 unicode characters. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.interval">Interval</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a></code> | interval block. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#id MonitoringSnooze#id}. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#project MonitoringSnooze#project}. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.criteria"></a>

```csharp
public MonitoringSnoozeCriteria Criteria { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#criteria MonitoringSnooze#criteria}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A display name for the Snooze. This can be, at most, 512 unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#display_name MonitoringSnooze#display_name}

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.interval"></a>

```csharp
public MonitoringSnoozeInterval Interval { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a>

interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#interval MonitoringSnooze#interval}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#id MonitoringSnooze#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#project MonitoringSnooze#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.timeouts"></a>

```csharp
public MonitoringSnoozeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#timeouts MonitoringSnooze#timeouts}

---

### MonitoringSnoozeCriteria <a name="MonitoringSnoozeCriteria" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MonitoringSnoozeCriteria {
    string Filter = null,
    string[] Policies = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria.property.filter">Filter</a></code> | <code>string</code> | When you define a snooze, you can also define a filter for that snooze. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria.property.policies">Policies</a></code> | <code>string[]</code> | The specific AlertPolicy names for the alert that should be snoozed. |

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

When you define a snooze, you can also define a filter for that snooze.

The filter is a string containing one or more key-value pairs. The string
uses the standard https://google.aip.dev/160 filter syntax. If you define
a filter for a snooze, then the snooze can only apply to one alert policy.
When the snooze is active, incidents won't be created when the incident
would have key-value pairs (labels) that match those specified by the
filter in the snooze.

Snooze filters support resource, metric, and metadata labels. If multiple
labels are used, then they must be connected with an AND operator. For
example, the following filter applies the snooze to incidents that have a
resource label with an instance ID of 1234567890, a metric label with an
instance name of test_group, a metadata user label with a key of foo and a
value of bar, and a metadata system label with a key of region and a value
of us-central1:

"filter": "resource.labels.instance_id="1234567890" AND metric.labels.instance_name="test_group" AND metadata.user_labels.foo="bar" AND metadata.system_labels.region="us-central1""

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#filter MonitoringSnooze#filter}

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria.property.policies"></a>

```csharp
public string[] Policies { get; set; }
```

- *Type:* string[]

The specific AlertPolicy names for the alert that should be snoozed.

The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[POLICY_ID]
There is a limit of 16 policies per snooze. This limit is checked during
snooze creation. Exactly 1 alert policy is required if filter is specified
at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#policies MonitoringSnooze#policies}

---

### MonitoringSnoozeInterval <a name="MonitoringSnoozeInterval" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MonitoringSnoozeInterval {
    string EndTime,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval.property.endTime">EndTime</a></code> | <code>string</code> | The end of the time interval. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval.property.startTime">StartTime</a></code> | <code>string</code> | The beginning of the time interval. |

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

The end of the time interval.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#end_time MonitoringSnooze#end_time}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

The beginning of the time interval.

The default value for the start time
is the end time. The start time must not be later than the end time.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#start_time MonitoringSnooze#start_time}

---

### MonitoringSnoozeTimeouts <a name="MonitoringSnoozeTimeouts" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MonitoringSnoozeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#create MonitoringSnooze#create}. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#delete MonitoringSnooze#delete}. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#update MonitoringSnooze#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#create MonitoringSnooze#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#delete MonitoringSnooze#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#update MonitoringSnooze#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringSnoozeCriteriaOutputReference <a name="MonitoringSnoozeCriteriaOutputReference" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MonitoringSnoozeCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resetPolicies">ResetPolicies</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resetPolicies"></a>

```csharp
private void ResetPolicies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.policiesInput">PoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.policies">Policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.policiesInput"></a>

```csharp
public string[] PoliciesInput { get; }
```

- *Type:* string[]

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.policies"></a>

```csharp
public string[] Policies { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.internalValue"></a>

```csharp
public MonitoringSnoozeCriteria InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a>

---


### MonitoringSnoozeIntervalOutputReference <a name="MonitoringSnoozeIntervalOutputReference" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MonitoringSnoozeIntervalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.internalValue"></a>

```csharp
public MonitoringSnoozeInterval InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a>

---


### MonitoringSnoozeTimeoutsOutputReference <a name="MonitoringSnoozeTimeoutsOutputReference" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MonitoringSnoozeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MonitoringSnoozeTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a>

---



