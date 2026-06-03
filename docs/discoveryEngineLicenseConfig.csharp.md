# `discoveryEngineLicenseConfig` Submodule <a name="`discoveryEngineLicenseConfig` Submodule" id="@cdktn/provider-google.discoveryEngineLicenseConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineLicenseConfig <a name="DiscoveryEngineLicenseConfig" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config google_discovery_engine_license_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineLicenseConfig(Construct Scope, string Id, DiscoveryEngineLicenseConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig">DiscoveryEngineLicenseConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig">DiscoveryEngineLicenseConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putEndDate">PutEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putStartDate">PutStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetAutoRenew">ResetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetEndDate">ResetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetFreeTrial">ResetFreeTrial</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndDate` <a name="PutEndDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putEndDate"></a>

```csharp
private void PutEndDate(DiscoveryEngineLicenseConfigEndDate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a>

---

##### `PutStartDate` <a name="PutStartDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putStartDate"></a>

```csharp
private void PutStartDate(DiscoveryEngineLicenseConfigStartDate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(DiscoveryEngineLicenseConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a>

---

##### `ResetAutoRenew` <a name="ResetAutoRenew" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetAutoRenew"></a>

```csharp
private void ResetAutoRenew()
```

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetEndDate"></a>

```csharp
private void ResetEndDate()
```

##### `ResetFreeTrial` <a name="ResetFreeTrial" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetFreeTrial"></a>

```csharp
private void ResetFreeTrial()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineLicenseConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineLicenseConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineLicenseConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineLicenseConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineLicenseConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DiscoveryEngineLicenseConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DiscoveryEngineLicenseConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DiscoveryEngineLicenseConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineLicenseConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.endDate">EndDate</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference">DiscoveryEngineLicenseConfigEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.startDate">StartDate</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference">DiscoveryEngineLicenseConfigStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference">DiscoveryEngineLicenseConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.autoRenewInput">AutoRenewInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.endDateInput">EndDateInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.freeTrialInput">FreeTrialInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseConfigIdInput">LicenseConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseCountInput">LicenseCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.startDateInput">StartDateInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTermInput">SubscriptionTermInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTierInput">SubscriptionTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.autoRenew">AutoRenew</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.freeTrial">FreeTrial</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseConfigId">LicenseConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseCount">LicenseCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTerm">SubscriptionTerm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTier">SubscriptionTier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.endDate"></a>

```csharp
public DiscoveryEngineLicenseConfigEndDateOutputReference EndDate { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference">DiscoveryEngineLicenseConfigEndDateOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.startDate"></a>

```csharp
public DiscoveryEngineLicenseConfigStartDateOutputReference StartDate { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference">DiscoveryEngineLicenseConfigStartDateOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.timeouts"></a>

```csharp
public DiscoveryEngineLicenseConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference">DiscoveryEngineLicenseConfigTimeoutsOutputReference</a>

---

##### `AutoRenewInput`<sup>Optional</sup> <a name="AutoRenewInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.autoRenewInput"></a>

```csharp
public bool|IResolvable AutoRenewInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.endDateInput"></a>

```csharp
public DiscoveryEngineLicenseConfigEndDate EndDateInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a>

---

##### `FreeTrialInput`<sup>Optional</sup> <a name="FreeTrialInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.freeTrialInput"></a>

```csharp
public bool|IResolvable FreeTrialInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LicenseConfigIdInput`<sup>Optional</sup> <a name="LicenseConfigIdInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseConfigIdInput"></a>

```csharp
public string LicenseConfigIdInput { get; }
```

- *Type:* string

---

##### `LicenseCountInput`<sup>Optional</sup> <a name="LicenseCountInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseCountInput"></a>

```csharp
public double LicenseCountInput { get; }
```

- *Type:* double

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.startDateInput"></a>

```csharp
public DiscoveryEngineLicenseConfigStartDate StartDateInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a>

---

##### `SubscriptionTermInput`<sup>Optional</sup> <a name="SubscriptionTermInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTermInput"></a>

```csharp
public string SubscriptionTermInput { get; }
```

- *Type:* string

---

##### `SubscriptionTierInput`<sup>Optional</sup> <a name="SubscriptionTierInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTierInput"></a>

```csharp
public string SubscriptionTierInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|DiscoveryEngineLicenseConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a>

---

##### `AutoRenew`<sup>Required</sup> <a name="AutoRenew" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.autoRenew"></a>

```csharp
public bool|IResolvable AutoRenew { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FreeTrial`<sup>Required</sup> <a name="FreeTrial" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.freeTrial"></a>

```csharp
public bool|IResolvable FreeTrial { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LicenseConfigId`<sup>Required</sup> <a name="LicenseConfigId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseConfigId"></a>

```csharp
public string LicenseConfigId { get; }
```

- *Type:* string

---

##### `LicenseCount`<sup>Required</sup> <a name="LicenseCount" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseCount"></a>

```csharp
public double LicenseCount { get; }
```

- *Type:* double

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SubscriptionTerm`<sup>Required</sup> <a name="SubscriptionTerm" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTerm"></a>

```csharp
public string SubscriptionTerm { get; }
```

- *Type:* string

---

##### `SubscriptionTier`<sup>Required</sup> <a name="SubscriptionTier" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTier"></a>

```csharp
public string SubscriptionTier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineLicenseConfigConfig <a name="DiscoveryEngineLicenseConfigConfig" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineLicenseConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string LicenseConfigId,
    double LicenseCount,
    string Location,
    DiscoveryEngineLicenseConfigStartDate StartDate,
    string SubscriptionTerm,
    string SubscriptionTier,
    bool|IResolvable AutoRenew = null,
    DiscoveryEngineLicenseConfigEndDate EndDate = null,
    bool|IResolvable FreeTrial = null,
    string Id = null,
    string Project = null,
    DiscoveryEngineLicenseConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.licenseConfigId">LicenseConfigId</a></code> | <code>string</code> | The unique id of the license config. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.licenseCount">LicenseCount</a></code> | <code>double</code> | Number of licenses purchased. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.location">Location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.startDate">StartDate</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a></code> | start_date block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.subscriptionTerm">SubscriptionTerm</a></code> | <code>string</code> | Subscription term. Possible values: ["SUBSCRIPTION_TERM_UNSPECIFIED", "SUBSCRIPTION_TERM_ONE_MONTH", "SUBSCRIPTION_TERM_ONE_YEAR", "SUBSCRIPTION_TERM_THREE_YEARS", "SUBSCRIPTION_TERM_THREE_MONTHS", "SUBSCRIPTION_TERM_FOURTEEN_DAYS", "SUBSCRIPTION_TERM_CUSTOM"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.subscriptionTier">SubscriptionTier</a></code> | <code>string</code> | Subscription tier information for the license config. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_NOTEBOOK_LM", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.autoRenew">AutoRenew</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the license config should be auto renewed when it reaches the end date. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.endDate">EndDate</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a></code> | end_date block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.freeTrial">FreeTrial</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the license config is for free trial. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#id DiscoveryEngineLicenseConfig#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#project DiscoveryEngineLicenseConfig#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `LicenseConfigId`<sup>Required</sup> <a name="LicenseConfigId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.licenseConfigId"></a>

```csharp
public string LicenseConfigId { get; set; }
```

- *Type:* string

The unique id of the license config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#license_config_id DiscoveryEngineLicenseConfig#license_config_id}

---

##### `LicenseCount`<sup>Required</sup> <a name="LicenseCount" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.licenseCount"></a>

```csharp
public double LicenseCount { get; set; }
```

- *Type:* double

Number of licenses purchased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#license_count DiscoveryEngineLicenseConfig#license_count}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#location DiscoveryEngineLicenseConfig#location}

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.startDate"></a>

```csharp
public DiscoveryEngineLicenseConfigStartDate StartDate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#start_date DiscoveryEngineLicenseConfig#start_date}

---

##### `SubscriptionTerm`<sup>Required</sup> <a name="SubscriptionTerm" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.subscriptionTerm"></a>

```csharp
public string SubscriptionTerm { get; set; }
```

- *Type:* string

Subscription term. Possible values: ["SUBSCRIPTION_TERM_UNSPECIFIED", "SUBSCRIPTION_TERM_ONE_MONTH", "SUBSCRIPTION_TERM_ONE_YEAR", "SUBSCRIPTION_TERM_THREE_YEARS", "SUBSCRIPTION_TERM_THREE_MONTHS", "SUBSCRIPTION_TERM_FOURTEEN_DAYS", "SUBSCRIPTION_TERM_CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#subscription_term DiscoveryEngineLicenseConfig#subscription_term}

---

##### `SubscriptionTier`<sup>Required</sup> <a name="SubscriptionTier" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.subscriptionTier"></a>

```csharp
public string SubscriptionTier { get; set; }
```

- *Type:* string

Subscription tier information for the license config. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_NOTEBOOK_LM", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#subscription_tier DiscoveryEngineLicenseConfig#subscription_tier}

---

##### `AutoRenew`<sup>Optional</sup> <a name="AutoRenew" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.autoRenew"></a>

```csharp
public bool|IResolvable AutoRenew { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the license config should be auto renewed when it reaches the end date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#auto_renew DiscoveryEngineLicenseConfig#auto_renew}

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.endDate"></a>

```csharp
public DiscoveryEngineLicenseConfigEndDate EndDate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#end_date DiscoveryEngineLicenseConfig#end_date}

---

##### `FreeTrial`<sup>Optional</sup> <a name="FreeTrial" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.freeTrial"></a>

```csharp
public bool|IResolvable FreeTrial { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the license config is for free trial.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#free_trial DiscoveryEngineLicenseConfig#free_trial}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#id DiscoveryEngineLicenseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#project DiscoveryEngineLicenseConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.timeouts"></a>

```csharp
public DiscoveryEngineLicenseConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#timeouts DiscoveryEngineLicenseConfig#timeouts}

---

### DiscoveryEngineLicenseConfigEndDate <a name="DiscoveryEngineLicenseConfigEndDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineLicenseConfigEndDate {
    double Day = null,
    double Month = null,
    double Year = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.property.day">Day</a></code> | <code>double</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.property.month">Month</a></code> | <code>double</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.property.year">Year</a></code> | <code>double</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.property.day"></a>

```csharp
public double Day { get; set; }
```

- *Type:* double

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#day DiscoveryEngineLicenseConfig#day}

---

##### `Month`<sup>Optional</sup> <a name="Month" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.property.month"></a>

```csharp
public double Month { get; set; }
```

- *Type:* double

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#month DiscoveryEngineLicenseConfig#month}

---

##### `Year`<sup>Optional</sup> <a name="Year" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.property.year"></a>

```csharp
public double Year { get; set; }
```

- *Type:* double

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#year DiscoveryEngineLicenseConfig#year}

---

### DiscoveryEngineLicenseConfigStartDate <a name="DiscoveryEngineLicenseConfigStartDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineLicenseConfigStartDate {
    double Day = null,
    double Month = null,
    double Year = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.property.day">Day</a></code> | <code>double</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.property.month">Month</a></code> | <code>double</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.property.year">Year</a></code> | <code>double</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.property.day"></a>

```csharp
public double Day { get; set; }
```

- *Type:* double

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#day DiscoveryEngineLicenseConfig#day}

---

##### `Month`<sup>Optional</sup> <a name="Month" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.property.month"></a>

```csharp
public double Month { get; set; }
```

- *Type:* double

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#month DiscoveryEngineLicenseConfig#month}

---

##### `Year`<sup>Optional</sup> <a name="Year" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.property.year"></a>

```csharp
public double Year { get; set; }
```

- *Type:* double

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#year DiscoveryEngineLicenseConfig#year}

---

### DiscoveryEngineLicenseConfigTimeouts <a name="DiscoveryEngineLicenseConfigTimeouts" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineLicenseConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#create DiscoveryEngineLicenseConfig#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#delete DiscoveryEngineLicenseConfig#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#update DiscoveryEngineLicenseConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#create DiscoveryEngineLicenseConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#delete DiscoveryEngineLicenseConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_license_config#update DiscoveryEngineLicenseConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineLicenseConfigEndDateOutputReference <a name="DiscoveryEngineLicenseConfigEndDateOutputReference" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineLicenseConfigEndDateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resetMonth">ResetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resetYear">ResetYear</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resetDay"></a>

```csharp
private void ResetDay()
```

##### `ResetMonth` <a name="ResetMonth" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resetMonth"></a>

```csharp
private void ResetMonth()
```

##### `ResetYear` <a name="ResetYear" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resetYear"></a>

```csharp
private void ResetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.dayInput">DayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.monthInput">MonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.yearInput">YearInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.day">Day</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.month">Month</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.year">Year</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.dayInput"></a>

```csharp
public double DayInput { get; }
```

- *Type:* double

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.monthInput"></a>

```csharp
public double MonthInput { get; }
```

- *Type:* double

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.yearInput"></a>

```csharp
public double YearInput { get; }
```

- *Type:* double

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.day"></a>

```csharp
public double Day { get; }
```

- *Type:* double

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.month"></a>

```csharp
public double Month { get; }
```

- *Type:* double

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.year"></a>

```csharp
public double Year { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineLicenseConfigEndDate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a>

---


### DiscoveryEngineLicenseConfigStartDateOutputReference <a name="DiscoveryEngineLicenseConfigStartDateOutputReference" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineLicenseConfigStartDateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resetMonth">ResetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resetYear">ResetYear</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resetDay"></a>

```csharp
private void ResetDay()
```

##### `ResetMonth` <a name="ResetMonth" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resetMonth"></a>

```csharp
private void ResetMonth()
```

##### `ResetYear` <a name="ResetYear" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resetYear"></a>

```csharp
private void ResetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.dayInput">DayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.monthInput">MonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.yearInput">YearInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.day">Day</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.month">Month</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.year">Year</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.dayInput"></a>

```csharp
public double DayInput { get; }
```

- *Type:* double

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.monthInput"></a>

```csharp
public double MonthInput { get; }
```

- *Type:* double

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.yearInput"></a>

```csharp
public double YearInput { get; }
```

- *Type:* double

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.day"></a>

```csharp
public double Day { get; }
```

- *Type:* double

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.month"></a>

```csharp
public double Month { get; }
```

- *Type:* double

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.year"></a>

```csharp
public double Year { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineLicenseConfigStartDate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a>

---


### DiscoveryEngineLicenseConfigTimeoutsOutputReference <a name="DiscoveryEngineLicenseConfigTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineLicenseConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DiscoveryEngineLicenseConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a>

---



