# `backupDrAutoProtectionPolicy` Submodule <a name="`backupDrAutoProtectionPolicy` Submodule" id="@cdktn/provider-google.backupDrAutoProtectionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupDrAutoProtectionPolicy <a name="BackupDrAutoProtectionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy google_backup_dr_auto_protection_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BackupDrAutoProtectionPolicy(Construct Scope, string Id, BackupDrAutoProtectionPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig">BackupDrAutoProtectionPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig">BackupDrAutoProtectionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putBackupPlanDetails">PutBackupPlanDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupPlanDetails` <a name="PutBackupPlanDetails" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putBackupPlanDetails"></a>

```csharp
private void PutBackupPlanDetails(IResolvable|BackupDrAutoProtectionPolicyBackupPlanDetails[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putBackupPlanDetails.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>[]

---

##### `PutCriteria` <a name="PutCriteria" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putCriteria"></a>

```csharp
private void PutCriteria(BackupDrAutoProtectionPolicyCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(BackupDrAutoProtectionPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BackupDrAutoProtectionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

BackupDrAutoProtectionPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

BackupDrAutoProtectionPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

BackupDrAutoProtectionPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

BackupDrAutoProtectionPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BackupDrAutoProtectionPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupDrAutoProtectionPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupDrAutoProtectionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BackupDrAutoProtectionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.backupPlanDetails">BackupPlanDetails</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList">BackupDrAutoProtectionPolicyBackupPlanDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.bindingSummary">BindingSummary</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList">BackupDrAutoProtectionPolicyBindingSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference">BackupDrAutoProtectionPolicyCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.policyEvaluationSummary">PolicyEvaluationSummary</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList">BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference">BackupDrAutoProtectionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.autoProtectionPolicyIdInput">AutoProtectionPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.backupPlanDetailsInput">BackupPlanDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.criteriaInput">CriteriaInput</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.autoProtectionPolicyId">AutoProtectionPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackupPlanDetails`<sup>Required</sup> <a name="BackupPlanDetails" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.backupPlanDetails"></a>

```csharp
public BackupDrAutoProtectionPolicyBackupPlanDetailsList BackupPlanDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList">BackupDrAutoProtectionPolicyBackupPlanDetailsList</a>

---

##### `BindingSummary`<sup>Required</sup> <a name="BindingSummary" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.bindingSummary"></a>

```csharp
public BackupDrAutoProtectionPolicyBindingSummaryList BindingSummary { get; }
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList">BackupDrAutoProtectionPolicyBindingSummaryList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.criteria"></a>

```csharp
public BackupDrAutoProtectionPolicyCriteriaOutputReference Criteria { get; }
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference">BackupDrAutoProtectionPolicyCriteriaOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyEvaluationSummary`<sup>Required</sup> <a name="PolicyEvaluationSummary" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.policyEvaluationSummary"></a>

```csharp
public BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList PolicyEvaluationSummary { get; }
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList">BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.timeouts"></a>

```csharp
public BackupDrAutoProtectionPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference">BackupDrAutoProtectionPolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AutoProtectionPolicyIdInput`<sup>Optional</sup> <a name="AutoProtectionPolicyIdInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.autoProtectionPolicyIdInput"></a>

```csharp
public string AutoProtectionPolicyIdInput { get; }
```

- *Type:* string

---

##### `BackupPlanDetailsInput`<sup>Optional</sup> <a name="BackupPlanDetailsInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.backupPlanDetailsInput"></a>

```csharp
public IResolvable|BackupDrAutoProtectionPolicyBackupPlanDetails[] BackupPlanDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>[]

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.criteriaInput"></a>

```csharp
public BackupDrAutoProtectionPolicyCriteria CriteriaInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|BackupDrAutoProtectionPolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a>

---

##### `AutoProtectionPolicyId`<sup>Required</sup> <a name="AutoProtectionPolicyId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.autoProtectionPolicyId"></a>

```csharp
public string AutoProtectionPolicyId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupDrAutoProtectionPolicyBackupPlanDetails <a name="BackupDrAutoProtectionPolicyBackupPlanDetails" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BackupDrAutoProtectionPolicyBackupPlanDetails {
    string BackupPlan,
    string ResourceType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.property.backupPlan">BackupPlan</a></code> | <code>string</code> | The resource name of the backup plan to apply to the matching resources, in the format 'projects/{project}/locations/{location}/backupPlans/{backup_plan_id}'. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.property.resourceType">ResourceType</a></code> | <code>string</code> | The type of resource that this policy automatically protects, for example 'compute.googleapis.com/Instance' or 'compute.googleapis.com/Disk'. |

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.property.backupPlan"></a>

```csharp
public string BackupPlan { get; set; }
```

- *Type:* string

The resource name of the backup plan to apply to the matching resources, in the format 'projects/{project}/locations/{location}/backupPlans/{backup_plan_id}'.

The backup plan
must be in the same location as the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#backup_plan BackupDrAutoProtectionPolicy#backup_plan}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

The type of resource that this policy automatically protects, for example 'compute.googleapis.com/Instance' or 'compute.googleapis.com/Disk'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#resource_type BackupDrAutoProtectionPolicy#resource_type}

---

### BackupDrAutoProtectionPolicyBindingSummary <a name="BackupDrAutoProtectionPolicyBindingSummary" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BackupDrAutoProtectionPolicyBindingSummary {

};
```


### BackupDrAutoProtectionPolicyConfig <a name="BackupDrAutoProtectionPolicyConfig" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BackupDrAutoProtectionPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AutoProtectionPolicyId,
    IResolvable|BackupDrAutoProtectionPolicyBackupPlanDetails[] BackupPlanDetails,
    BackupDrAutoProtectionPolicyCriteria Criteria,
    string Location,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    string Project = null,
    BackupDrAutoProtectionPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.autoProtectionPolicyId">AutoProtectionPolicyId</a></code> | <code>string</code> | The ID of the auto protection policy. This becomes the final component of the policy's resource name. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.backupPlanDetails">BackupPlanDetails</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>[]</code> | backup_plan_details block. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a></code> | criteria block. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.location">Location</a></code> | <code>string</code> | The location of the auto protection policy. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.description">Description</a></code> | <code>string</code> | A description of the auto protection policy. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#id BackupDrAutoProtectionPolicy#id}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#project BackupDrAutoProtectionPolicy#project}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutoProtectionPolicyId`<sup>Required</sup> <a name="AutoProtectionPolicyId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.autoProtectionPolicyId"></a>

```csharp
public string AutoProtectionPolicyId { get; set; }
```

- *Type:* string

The ID of the auto protection policy. This becomes the final component of the policy's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#auto_protection_policy_id BackupDrAutoProtectionPolicy#auto_protection_policy_id}

---

##### `BackupPlanDetails`<sup>Required</sup> <a name="BackupPlanDetails" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.backupPlanDetails"></a>

```csharp
public IResolvable|BackupDrAutoProtectionPolicyBackupPlanDetails[] BackupPlanDetails { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>[]

backup_plan_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#backup_plan_details BackupDrAutoProtectionPolicy#backup_plan_details}

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.criteria"></a>

```csharp
public BackupDrAutoProtectionPolicyCriteria Criteria { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#criteria BackupDrAutoProtectionPolicy#criteria}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#location BackupDrAutoProtectionPolicy#location}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#deletion_policy BackupDrAutoProtectionPolicy#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#description BackupDrAutoProtectionPolicy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#id BackupDrAutoProtectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#project BackupDrAutoProtectionPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.timeouts"></a>

```csharp
public BackupDrAutoProtectionPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#timeouts BackupDrAutoProtectionPolicy#timeouts}

---

### BackupDrAutoProtectionPolicyCriteria <a name="BackupDrAutoProtectionPolicyCriteria" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BackupDrAutoProtectionPolicyCriteria {
    IResolvable|BackupDrAutoProtectionPolicyCriteriaMatchingConditions[] MatchingConditions
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria.property.matchingConditions">MatchingConditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]</code> | matching_conditions block. |

---

##### `MatchingConditions`<sup>Required</sup> <a name="MatchingConditions" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria.property.matchingConditions"></a>

```csharp
public IResolvable|BackupDrAutoProtectionPolicyCriteriaMatchingConditions[] MatchingConditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]

matching_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#matching_conditions BackupDrAutoProtectionPolicy#matching_conditions}

---

### BackupDrAutoProtectionPolicyCriteriaMatchingConditions <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditions" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BackupDrAutoProtectionPolicyCriteriaMatchingConditions {
    BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition LabelCondition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions.property.labelCondition">LabelCondition</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a></code> | label_condition block. |

---

##### `LabelCondition`<sup>Optional</sup> <a name="LabelCondition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions.property.labelCondition"></a>

```csharp
public BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition LabelCondition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

label_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#label_condition BackupDrAutoProtectionPolicy#label_condition}

---

### BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.key">Key</a></code> | <code>string</code> | The key of the label to match. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.values">Values</a></code> | <code>string[]</code> | The values of the label to match. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the label to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#key BackupDrAutoProtectionPolicy#key}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The values of the label to match.

A resource matches the condition if its label
value is equal to any of the listed values. Currently, only one value is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#values BackupDrAutoProtectionPolicy#values}

---

### BackupDrAutoProtectionPolicyPolicyEvaluationSummary <a name="BackupDrAutoProtectionPolicyPolicyEvaluationSummary" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BackupDrAutoProtectionPolicyPolicyEvaluationSummary {

};
```


### BackupDrAutoProtectionPolicyTimeouts <a name="BackupDrAutoProtectionPolicyTimeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BackupDrAutoProtectionPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#create BackupDrAutoProtectionPolicy#create}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#delete BackupDrAutoProtectionPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#update BackupDrAutoProtectionPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#create BackupDrAutoProtectionPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#delete BackupDrAutoProtectionPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#update BackupDrAutoProtectionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupDrAutoProtectionPolicyBackupPlanDetailsList <a name="BackupDrAutoProtectionPolicyBackupPlanDetailsList" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BackupDrAutoProtectionPolicyBackupPlanDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.get"></a>

```csharp
private BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.internalValue"></a>

```csharp
public IResolvable|BackupDrAutoProtectionPolicyBackupPlanDetails[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>[]

---


### BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference <a name="BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlanInput">BackupPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlan">BackupPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupPlanInput`<sup>Optional</sup> <a name="BackupPlanInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlanInput"></a>

```csharp
public string BackupPlanInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlan"></a>

```csharp
public string BackupPlan { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupDrAutoProtectionPolicyBackupPlanDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>

---


### BackupDrAutoProtectionPolicyBindingSummaryList <a name="BackupDrAutoProtectionPolicyBindingSummaryList" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BackupDrAutoProtectionPolicyBindingSummaryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.get"></a>

```csharp
private BackupDrAutoProtectionPolicyBindingSummaryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BackupDrAutoProtectionPolicyBindingSummaryOutputReference <a name="BackupDrAutoProtectionPolicyBindingSummaryOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BackupDrAutoProtectionPolicyBindingSummaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.projectCount">ProjectCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummary">BackupDrAutoProtectionPolicyBindingSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectCount`<sup>Required</sup> <a name="ProjectCount" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.projectCount"></a>

```csharp
public string ProjectCount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.internalValue"></a>

```csharp
public BackupDrAutoProtectionPolicyBindingSummary InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummary">BackupDrAutoProtectionPolicyBindingSummary</a>

---


### BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.internalValue"></a>

```csharp
public BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

---


### BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.get"></a>

```csharp
private BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.internalValue"></a>

```csharp
public IResolvable|BackupDrAutoProtectionPolicyCriteriaMatchingConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]

---


### BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition">PutLabelCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resetLabelCondition">ResetLabelCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLabelCondition` <a name="PutLabelCondition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition"></a>

```csharp
private void PutLabelCondition(BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

---

##### `ResetLabelCondition` <a name="ResetLabelCondition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resetLabelCondition"></a>

```csharp
private void ResetLabelCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelCondition">LabelCondition</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelConditionInput">LabelConditionInput</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelCondition`<sup>Required</sup> <a name="LabelCondition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelCondition"></a>

```csharp
public BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference LabelCondition { get; }
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference</a>

---

##### `LabelConditionInput`<sup>Optional</sup> <a name="LabelConditionInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelConditionInput"></a>

```csharp
public BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition LabelConditionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupDrAutoProtectionPolicyCriteriaMatchingConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>

---


### BackupDrAutoProtectionPolicyCriteriaOutputReference <a name="BackupDrAutoProtectionPolicyCriteriaOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BackupDrAutoProtectionPolicyCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.putMatchingConditions">PutMatchingConditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchingConditions` <a name="PutMatchingConditions" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.putMatchingConditions"></a>

```csharp
private void PutMatchingConditions(IResolvable|BackupDrAutoProtectionPolicyCriteriaMatchingConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.putMatchingConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditions">MatchingConditions</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditionsInput">MatchingConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchingConditions`<sup>Required</sup> <a name="MatchingConditions" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditions"></a>

```csharp
public BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList MatchingConditions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList</a>

---

##### `MatchingConditionsInput`<sup>Optional</sup> <a name="MatchingConditionsInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditionsInput"></a>

```csharp
public IResolvable|BackupDrAutoProtectionPolicyCriteriaMatchingConditions[] MatchingConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.internalValue"></a>

```csharp
public BackupDrAutoProtectionPolicyCriteria InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a>

---


### BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList <a name="BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.get"></a>

```csharp
private BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference <a name="BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.failedResourceCount">FailedResourceCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.matchingResourceCount">MatchingResourceCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.protectedResourceCount">ProtectedResourceCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummary">BackupDrAutoProtectionPolicyPolicyEvaluationSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailedResourceCount`<sup>Required</sup> <a name="FailedResourceCount" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.failedResourceCount"></a>

```csharp
public string FailedResourceCount { get; }
```

- *Type:* string

---

##### `MatchingResourceCount`<sup>Required</sup> <a name="MatchingResourceCount" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.matchingResourceCount"></a>

```csharp
public string MatchingResourceCount { get; }
```

- *Type:* string

---

##### `ProtectedResourceCount`<sup>Required</sup> <a name="ProtectedResourceCount" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.protectedResourceCount"></a>

```csharp
public string ProtectedResourceCount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.internalValue"></a>

```csharp
public BackupDrAutoProtectionPolicyPolicyEvaluationSummary InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummary">BackupDrAutoProtectionPolicyPolicyEvaluationSummary</a>

---


### BackupDrAutoProtectionPolicyTimeoutsOutputReference <a name="BackupDrAutoProtectionPolicyTimeoutsOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BackupDrAutoProtectionPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupDrAutoProtectionPolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a>

---



