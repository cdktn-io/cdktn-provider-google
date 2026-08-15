# `migrationCenterDiscoveryClient` Submodule <a name="`migrationCenterDiscoveryClient` Submodule" id="@cdktn/provider-google.migrationCenterDiscoveryClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MigrationCenterDiscoveryClient <a name="MigrationCenterDiscoveryClient" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/migration_center_discovery_client google_migration_center_discovery_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterDiscoveryClient(Construct Scope, string Id, MigrationCenterDiscoveryClientConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig">MigrationCenterDiscoveryClientConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig">MigrationCenterDiscoveryClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetExpireTime">ResetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.putTimeouts"></a>

```csharp
private void PutTimeouts(MigrationCenterDiscoveryClientTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts">MigrationCenterDiscoveryClientTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetExpireTime` <a name="ResetExpireTime" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetExpireTime"></a>

```csharp
private void ResetExpireTime()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetTtl"></a>

```csharp
private void ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MigrationCenterDiscoveryClient resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

MigrationCenterDiscoveryClient.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

MigrationCenterDiscoveryClient.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

MigrationCenterDiscoveryClient.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

MigrationCenterDiscoveryClient.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MigrationCenterDiscoveryClient resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MigrationCenterDiscoveryClient to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MigrationCenterDiscoveryClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/migration_center_discovery_client#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MigrationCenterDiscoveryClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.errors">Errors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList">MigrationCenterDiscoveryClientErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.heartbeatTime">HeartbeatTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.signalsEndpoint">SignalsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference">MigrationCenterDiscoveryClientTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.discoveryClientIdInput">DiscoveryClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.expireTimeInput">ExpireTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts">MigrationCenterDiscoveryClientTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.discoveryClientId">DiscoveryClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.errors"></a>

```csharp
public MigrationCenterDiscoveryClientErrorsList Errors { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList">MigrationCenterDiscoveryClientErrorsList</a>

---

##### `HeartbeatTime`<sup>Required</sup> <a name="HeartbeatTime" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.heartbeatTime"></a>

```csharp
public string HeartbeatTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SignalsEndpoint`<sup>Required</sup> <a name="SignalsEndpoint" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.signalsEndpoint"></a>

```csharp
public string SignalsEndpoint { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.timeouts"></a>

```csharp
public MigrationCenterDiscoveryClientTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference">MigrationCenterDiscoveryClientTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DiscoveryClientIdInput`<sup>Optional</sup> <a name="DiscoveryClientIdInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.discoveryClientIdInput"></a>

```csharp
public string DiscoveryClientIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExpireTimeInput`<sup>Optional</sup> <a name="ExpireTimeInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.expireTimeInput"></a>

```csharp
public string ExpireTimeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.timeoutsInput"></a>

```csharp
public IResolvable|MigrationCenterDiscoveryClientTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts">MigrationCenterDiscoveryClientTimeouts</a>

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DiscoveryClientId`<sup>Required</sup> <a name="DiscoveryClientId" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.discoveryClientId"></a>

```csharp
public string DiscoveryClientId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MigrationCenterDiscoveryClientConfig <a name="MigrationCenterDiscoveryClientConfig" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterDiscoveryClientConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DiscoveryClientId,
    string Location,
    string ServiceAccount,
    string Source,
    string DeletionPolicy = null,
    string Description = null,
    string DisplayName = null,
    string ExpireTime = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    MigrationCenterDiscoveryClientTimeouts Timeouts = null,
    string Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.discoveryClientId">DiscoveryClientId</a></code> | <code>string</code> | User specified ID for the discovery client. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Service account used by the discovery client for various operation. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.source">Source</a></code> | <code>string</code> | Full name of the source object associated with this discovery client. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.description">Description</a></code> | <code>string</code> | Free text description. Maximum length is 1000 characters. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Free text display name. Maximum length is 63 characters. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.expireTime">ExpireTime</a></code> | <code>string</code> | Client expiration time in UTC. If specified, the backend will not accept new frames after this time. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/migration_center_discovery_client#id MigrationCenterDiscoveryClient#id}. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/migration_center_discovery_client#project MigrationCenterDiscoveryClient#project}. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts">MigrationCenterDiscoveryClientTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.ttl">Ttl</a></code> | <code>string</code> | Input only. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DiscoveryClientId`<sup>Required</sup> <a name="DiscoveryClientId" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.discoveryClientId"></a>

```csharp
public string DiscoveryClientId { get; set; }
```

- *Type:* string

User specified ID for the discovery client.

It will become the last
component of the discovery client name. The ID must be unique within the
project, is restricted to lower-cased letters and has a maximum length of
63 characters. The ID must match the regular expression:
'[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/migration_center_discovery_client#discovery_client_id MigrationCenterDiscoveryClient#discovery_client_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/migration_center_discovery_client#location MigrationCenterDiscoveryClient#location}

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Service account used by the discovery client for various operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/migration_center_discovery_client#service_account MigrationCenterDiscoveryClient#service_account}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Full name of the source object associated with this discovery client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/migration_center_discovery_client#source MigrationCenterDiscoveryClient#source}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/migration_center_discovery_client#deletion_policy MigrationCenterDiscoveryClient#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Free text description. Maximum length is 1000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/migration_center_discovery_client#description MigrationCenterDiscoveryClient#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Free text display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/migration_center_discovery_client#display_name MigrationCenterDiscoveryClient#display_name}

---

##### `ExpireTime`<sup>Optional</sup> <a name="ExpireTime" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.expireTime"></a>

```csharp
public string ExpireTime { get; set; }
```

- *Type:* string

Client expiration time in UTC. If specified, the backend will not accept new frames after this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/migration_center_discovery_client#expire_time MigrationCenterDiscoveryClient#expire_time}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/migration_center_discovery_client#id MigrationCenterDiscoveryClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/migration_center_discovery_client#labels MigrationCenterDiscoveryClient#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/migration_center_discovery_client#project MigrationCenterDiscoveryClient#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.timeouts"></a>

```csharp
public MigrationCenterDiscoveryClientTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts">MigrationCenterDiscoveryClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/migration_center_discovery_client#timeouts MigrationCenterDiscoveryClient#timeouts}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

Input only.

Client time-to-live. If specified, the backend will not accept new
frames after this time.
This field is input only. The derived expiration time is provided as
output through the 'expire_time' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/migration_center_discovery_client#ttl MigrationCenterDiscoveryClient#ttl}

---

### MigrationCenterDiscoveryClientErrors <a name="MigrationCenterDiscoveryClientErrors" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterDiscoveryClientErrors {

};
```


### MigrationCenterDiscoveryClientErrorsDetails <a name="MigrationCenterDiscoveryClientErrorsDetails" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterDiscoveryClientErrorsDetails {

};
```


### MigrationCenterDiscoveryClientTimeouts <a name="MigrationCenterDiscoveryClientTimeouts" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterDiscoveryClientTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/migration_center_discovery_client#create MigrationCenterDiscoveryClient#create}. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/migration_center_discovery_client#delete MigrationCenterDiscoveryClient#delete}. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/migration_center_discovery_client#update MigrationCenterDiscoveryClient#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/migration_center_discovery_client#create MigrationCenterDiscoveryClient#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/migration_center_discovery_client#delete MigrationCenterDiscoveryClient#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/migration_center_discovery_client#update MigrationCenterDiscoveryClient#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MigrationCenterDiscoveryClientErrorsDetailsList <a name="MigrationCenterDiscoveryClientErrorsDetailsList" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterDiscoveryClientErrorsDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.get"></a>

```csharp
private MigrationCenterDiscoveryClientErrorsDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterDiscoveryClientErrorsDetailsOutputReference <a name="MigrationCenterDiscoveryClientErrorsDetailsOutputReference" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterDiscoveryClientErrorsDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetails">MigrationCenterDiscoveryClientErrorsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterDiscoveryClientErrorsDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetails">MigrationCenterDiscoveryClientErrorsDetails</a>

---


### MigrationCenterDiscoveryClientErrorsList <a name="MigrationCenterDiscoveryClientErrorsList" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterDiscoveryClientErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.get"></a>

```csharp
private MigrationCenterDiscoveryClientErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterDiscoveryClientErrorsOutputReference <a name="MigrationCenterDiscoveryClientErrorsOutputReference" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterDiscoveryClientErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.details">Details</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList">MigrationCenterDiscoveryClientErrorsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrors">MigrationCenterDiscoveryClientErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.details"></a>

```csharp
public MigrationCenterDiscoveryClientErrorsDetailsList Details { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList">MigrationCenterDiscoveryClientErrorsDetailsList</a>

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterDiscoveryClientErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrors">MigrationCenterDiscoveryClientErrors</a>

---


### MigrationCenterDiscoveryClientTimeoutsOutputReference <a name="MigrationCenterDiscoveryClientTimeoutsOutputReference" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterDiscoveryClientTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts">MigrationCenterDiscoveryClientTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MigrationCenterDiscoveryClientTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts">MigrationCenterDiscoveryClientTimeouts</a>

---



