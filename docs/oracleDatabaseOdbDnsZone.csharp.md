# `oracleDatabaseOdbDnsZone` Submodule <a name="`oracleDatabaseOdbDnsZone` Submodule" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseOdbDnsZone <a name="OracleDatabaseOdbDnsZone" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone google_oracle_database_odb_dns_zone}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseOdbDnsZone(Construct Scope, string Id, OracleDatabaseOdbDnsZoneConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig">OracleDatabaseOdbDnsZoneConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig">OracleDatabaseOdbDnsZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.putTimeouts"></a>

```csharp
private void PutTimeouts(OracleDatabaseOdbDnsZoneTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OracleDatabaseOdbDnsZone resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

OracleDatabaseOdbDnsZone.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

OracleDatabaseOdbDnsZone.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

OracleDatabaseOdbDnsZone.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

OracleDatabaseOdbDnsZone.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OracleDatabaseOdbDnsZone resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OracleDatabaseOdbDnsZone to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OracleDatabaseOdbDnsZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OracleDatabaseOdbDnsZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference">OracleDatabaseOdbDnsZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbDnsZoneIdInput">OdbDnsZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbnetworkInput">OdbnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbDnsZoneId">OdbDnsZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbnetwork">Odbnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.timeouts"></a>

```csharp
public OracleDatabaseOdbDnsZoneTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference">OracleDatabaseOdbDnsZoneTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionProtectionInput"></a>

```csharp
public bool|IResolvable DeletionProtectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OdbDnsZoneIdInput`<sup>Optional</sup> <a name="OdbDnsZoneIdInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbDnsZoneIdInput"></a>

```csharp
public string OdbDnsZoneIdInput { get; }
```

- *Type:* string

---

##### `OdbnetworkInput`<sup>Optional</sup> <a name="OdbnetworkInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbnetworkInput"></a>

```csharp
public string OdbnetworkInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.timeoutsInput"></a>

```csharp
public IResolvable|OracleDatabaseOdbDnsZoneTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `OdbDnsZoneId`<sup>Required</sup> <a name="OdbDnsZoneId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbDnsZoneId"></a>

```csharp
public string OdbDnsZoneId { get; }
```

- *Type:* string

---

##### `Odbnetwork`<sup>Required</sup> <a name="Odbnetwork" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbnetwork"></a>

```csharp
public string Odbnetwork { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseOdbDnsZoneConfig <a name="OracleDatabaseOdbDnsZoneConfig" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseOdbDnsZoneConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Domain,
    string Location,
    string OdbDnsZoneId,
    string Odbnetwork,
    string DeletionPolicy = null,
    bool|IResolvable DeletionProtection = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    OracleDatabaseOdbDnsZoneTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.domain">Domain</a></code> | <code>string</code> | The DNS suffix for the zone. Ex: abc.example.com. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.odbDnsZoneId">OdbDnsZoneId</a></code> | <code>string</code> | The ID of the OdbDnsZone to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.odbnetwork">Odbnetwork</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#id OracleDatabaseOdbDnsZone#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#project OracleDatabaseOdbDnsZone#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

The DNS suffix for the zone. Ex: abc.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#domain OracleDatabaseOdbDnsZone#domain}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#location OracleDatabaseOdbDnsZone#location}

---

##### `OdbDnsZoneId`<sup>Required</sup> <a name="OdbDnsZoneId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.odbDnsZoneId"></a>

```csharp
public string OdbDnsZoneId { get; set; }
```

- *Type:* string

The ID of the OdbDnsZone to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#odb_dns_zone_id OracleDatabaseOdbDnsZone#odb_dns_zone_id}

---

##### `Odbnetwork`<sup>Required</sup> <a name="Odbnetwork" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.odbnetwork"></a>

```csharp
public string Odbnetwork { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#odbnetwork OracleDatabaseOdbDnsZone#odbnetwork}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#deletion_policy OracleDatabaseOdbDnsZone#deletion_policy}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#deletion_protection OracleDatabaseOdbDnsZone#deletion_protection}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#id OracleDatabaseOdbDnsZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#labels OracleDatabaseOdbDnsZone#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#project OracleDatabaseOdbDnsZone#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.timeouts"></a>

```csharp
public OracleDatabaseOdbDnsZoneTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#timeouts OracleDatabaseOdbDnsZone#timeouts}

---

### OracleDatabaseOdbDnsZoneTimeouts <a name="OracleDatabaseOdbDnsZoneTimeouts" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseOdbDnsZoneTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#create OracleDatabaseOdbDnsZone#create}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#delete OracleDatabaseOdbDnsZone#delete}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#update OracleDatabaseOdbDnsZone#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#create OracleDatabaseOdbDnsZone#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#delete OracleDatabaseOdbDnsZone#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#update OracleDatabaseOdbDnsZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseOdbDnsZoneTimeoutsOutputReference <a name="OracleDatabaseOdbDnsZoneTimeoutsOutputReference" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseOdbDnsZoneTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OracleDatabaseOdbDnsZoneTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a>

---



