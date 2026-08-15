# `networkServicesMulticastDomain` Submodule <a name="`networkServicesMulticastDomain` Submodule" id="@cdktn/provider-google.networkServicesMulticastDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesMulticastDomain <a name="NetworkServicesMulticastDomain" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain google_network_services_multicast_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastDomain(Construct Scope, string Id, NetworkServicesMulticastDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig">NetworkServicesMulticastDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig">NetworkServicesMulticastDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.putConnectionConfig">PutConnectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.putUllMulticastDomain">PutUllMulticastDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetMulticastDomainGroup">ResetMulticastDomainGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetUllMulticastDomain">ResetUllMulticastDomain</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectionConfig` <a name="PutConnectionConfig" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.putConnectionConfig"></a>

```csharp
private void PutConnectionConfig(NetworkServicesMulticastDomainConnectionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.putConnectionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig">NetworkServicesMulticastDomainConnectionConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkServicesMulticastDomainTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts">NetworkServicesMulticastDomainTimeouts</a>

---

##### `PutUllMulticastDomain` <a name="PutUllMulticastDomain" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.putUllMulticastDomain"></a>

```csharp
private void PutUllMulticastDomain(NetworkServicesMulticastDomainUllMulticastDomain Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.putUllMulticastDomain.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomain">NetworkServicesMulticastDomainUllMulticastDomain</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMulticastDomainGroup` <a name="ResetMulticastDomainGroup" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetMulticastDomainGroup"></a>

```csharp
private void ResetMulticastDomainGroup()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUllMulticastDomain` <a name="ResetUllMulticastDomain" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetUllMulticastDomain"></a>

```csharp
private void ResetUllMulticastDomain()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesMulticastDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkServicesMulticastDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkServicesMulticastDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkServicesMulticastDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkServicesMulticastDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkServicesMulticastDomain resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkServicesMulticastDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkServicesMulticastDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesMulticastDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.connectionConfig">ConnectionConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference">NetworkServicesMulticastDomainConnectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.state">State</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList">NetworkServicesMulticastDomainStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference">NetworkServicesMulticastDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.ullMulticastDomain">UllMulticastDomain</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference">NetworkServicesMulticastDomainUllMulticastDomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.uniqueId">UniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.adminNetworkInput">AdminNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.connectionConfigInput">ConnectionConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig">NetworkServicesMulticastDomainConnectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.multicastDomainGroupInput">MulticastDomainGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.multicastDomainIdInput">MulticastDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts">NetworkServicesMulticastDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.ullMulticastDomainInput">UllMulticastDomainInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomain">NetworkServicesMulticastDomainUllMulticastDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.adminNetwork">AdminNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.multicastDomainGroup">MulticastDomainGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.multicastDomainId">MulticastDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConnectionConfig`<sup>Required</sup> <a name="ConnectionConfig" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.connectionConfig"></a>

```csharp
public NetworkServicesMulticastDomainConnectionConfigOutputReference ConnectionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference">NetworkServicesMulticastDomainConnectionConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.state"></a>

```csharp
public NetworkServicesMulticastDomainStateList State { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList">NetworkServicesMulticastDomainStateList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.timeouts"></a>

```csharp
public NetworkServicesMulticastDomainTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference">NetworkServicesMulticastDomainTimeoutsOutputReference</a>

---

##### `UllMulticastDomain`<sup>Required</sup> <a name="UllMulticastDomain" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.ullMulticastDomain"></a>

```csharp
public NetworkServicesMulticastDomainUllMulticastDomainOutputReference UllMulticastDomain { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference">NetworkServicesMulticastDomainUllMulticastDomainOutputReference</a>

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.uniqueId"></a>

```csharp
public string UniqueId { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AdminNetworkInput`<sup>Optional</sup> <a name="AdminNetworkInput" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.adminNetworkInput"></a>

```csharp
public string AdminNetworkInput { get; }
```

- *Type:* string

---

##### `ConnectionConfigInput`<sup>Optional</sup> <a name="ConnectionConfigInput" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.connectionConfigInput"></a>

```csharp
public NetworkServicesMulticastDomainConnectionConfig ConnectionConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig">NetworkServicesMulticastDomainConnectionConfig</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MulticastDomainGroupInput`<sup>Optional</sup> <a name="MulticastDomainGroupInput" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.multicastDomainGroupInput"></a>

```csharp
public string MulticastDomainGroupInput { get; }
```

- *Type:* string

---

##### `MulticastDomainIdInput`<sup>Optional</sup> <a name="MulticastDomainIdInput" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.multicastDomainIdInput"></a>

```csharp
public string MulticastDomainIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworkServicesMulticastDomainTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts">NetworkServicesMulticastDomainTimeouts</a>

---

##### `UllMulticastDomainInput`<sup>Optional</sup> <a name="UllMulticastDomainInput" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.ullMulticastDomainInput"></a>

```csharp
public NetworkServicesMulticastDomainUllMulticastDomain UllMulticastDomainInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomain">NetworkServicesMulticastDomainUllMulticastDomain</a>

---

##### `AdminNetwork`<sup>Required</sup> <a name="AdminNetwork" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.adminNetwork"></a>

```csharp
public string AdminNetwork { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MulticastDomainGroup`<sup>Required</sup> <a name="MulticastDomainGroup" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.multicastDomainGroup"></a>

```csharp
public string MulticastDomainGroup { get; }
```

- *Type:* string

---

##### `MulticastDomainId`<sup>Required</sup> <a name="MulticastDomainId" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.multicastDomainId"></a>

```csharp
public string MulticastDomainId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesMulticastDomainConfig <a name="NetworkServicesMulticastDomainConfig" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastDomainConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AdminNetwork,
    NetworkServicesMulticastDomainConnectionConfig ConnectionConfig,
    string Location,
    string MulticastDomainId,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string MulticastDomainGroup = null,
    string Project = null,
    NetworkServicesMulticastDomainTimeouts Timeouts = null,
    NetworkServicesMulticastDomainUllMulticastDomain UllMulticastDomain = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.adminNetwork">AdminNetwork</a></code> | <code>string</code> | The resource name of the multicast admin VPC network. Use the following format: 'projects/{project}/locations/global/networks/{network}'. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.connectionConfig">ConnectionConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig">NetworkServicesMulticastDomainConnectionConfig</a></code> | connection_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.multicastDomainId">MulticastDomainId</a></code> | <code>string</code> | A unique name for the multicast domain. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.description">Description</a></code> | <code>string</code> | An optional text description of the multicast domain. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain#id NetworkServicesMulticastDomain#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.multicastDomainGroup">MulticastDomainGroup</a></code> | <code>string</code> | The multicast domain group this domain should be associated with. Use the following format: 'projects/{project}/locations/global/multicastDomainGroups/{multicast_domain_group}'. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain#project NetworkServicesMulticastDomain#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts">NetworkServicesMulticastDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.ullMulticastDomain">UllMulticastDomain</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomain">NetworkServicesMulticastDomainUllMulticastDomain</a></code> | ull_multicast_domain block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AdminNetwork`<sup>Required</sup> <a name="AdminNetwork" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.adminNetwork"></a>

```csharp
public string AdminNetwork { get; set; }
```

- *Type:* string

The resource name of the multicast admin VPC network. Use the following format: 'projects/{project}/locations/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain#admin_network NetworkServicesMulticastDomain#admin_network}

---

##### `ConnectionConfig`<sup>Required</sup> <a name="ConnectionConfig" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.connectionConfig"></a>

```csharp
public NetworkServicesMulticastDomainConnectionConfig ConnectionConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig">NetworkServicesMulticastDomainConnectionConfig</a>

connection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain#connection_config NetworkServicesMulticastDomain#connection_config}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain#location NetworkServicesMulticastDomain#location}

---

##### `MulticastDomainId`<sup>Required</sup> <a name="MulticastDomainId" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.multicastDomainId"></a>

```csharp
public string MulticastDomainId { get; set; }
```

- *Type:* string

A unique name for the multicast domain.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain#multicast_domain_id NetworkServicesMulticastDomain#multicast_domain_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain#deletion_policy NetworkServicesMulticastDomain#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional text description of the multicast domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain#description NetworkServicesMulticastDomain#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain#id NetworkServicesMulticastDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain#labels NetworkServicesMulticastDomain#labels}

---

##### `MulticastDomainGroup`<sup>Optional</sup> <a name="MulticastDomainGroup" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.multicastDomainGroup"></a>

```csharp
public string MulticastDomainGroup { get; set; }
```

- *Type:* string

The multicast domain group this domain should be associated with. Use the following format: 'projects/{project}/locations/global/multicastDomainGroups/{multicast_domain_group}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain#multicast_domain_group NetworkServicesMulticastDomain#multicast_domain_group}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain#project NetworkServicesMulticastDomain#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.timeouts"></a>

```csharp
public NetworkServicesMulticastDomainTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts">NetworkServicesMulticastDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain#timeouts NetworkServicesMulticastDomain#timeouts}

---

##### `UllMulticastDomain`<sup>Optional</sup> <a name="UllMulticastDomain" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.ullMulticastDomain"></a>

```csharp
public NetworkServicesMulticastDomainUllMulticastDomain UllMulticastDomain { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomain">NetworkServicesMulticastDomainUllMulticastDomain</a>

ull_multicast_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain#ull_multicast_domain NetworkServicesMulticastDomain#ull_multicast_domain}

---

### NetworkServicesMulticastDomainConnectionConfig <a name="NetworkServicesMulticastDomainConnectionConfig" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastDomainConnectionConfig {
    string ConnectionType,
    string NccHub = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig.property.connectionType">ConnectionType</a></code> | <code>string</code> | The VPC connection type. Possible values: NCC SAME_VPC. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig.property.nccHub">NccHub</a></code> | <code>string</code> | The resource name of the [NCC](https://cloud.google.com/network-connectivity-center) hub. Use the following format: 'projects/{project}/locations/global/hubs/{hub}'. |

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig.property.connectionType"></a>

```csharp
public string ConnectionType { get; set; }
```

- *Type:* string

The VPC connection type. Possible values: NCC SAME_VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain#connection_type NetworkServicesMulticastDomain#connection_type}

---

##### `NccHub`<sup>Optional</sup> <a name="NccHub" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig.property.nccHub"></a>

```csharp
public string NccHub { get; set; }
```

- *Type:* string

The resource name of the [NCC](https://cloud.google.com/network-connectivity-center) hub. Use the following format: 'projects/{project}/locations/global/hubs/{hub}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain#ncc_hub NetworkServicesMulticastDomain#ncc_hub}

---

### NetworkServicesMulticastDomainState <a name="NetworkServicesMulticastDomainState" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainState.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastDomainState {

};
```


### NetworkServicesMulticastDomainTimeouts <a name="NetworkServicesMulticastDomainTimeouts" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastDomainTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain#create NetworkServicesMulticastDomain#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain#delete NetworkServicesMulticastDomain#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain#update NetworkServicesMulticastDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain#create NetworkServicesMulticastDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain#delete NetworkServicesMulticastDomain#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain#update NetworkServicesMulticastDomain#update}.

---

### NetworkServicesMulticastDomainUllMulticastDomain <a name="NetworkServicesMulticastDomainUllMulticastDomain" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomain"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomain.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastDomainUllMulticastDomain {
    string PreconfiguredUllDomain = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomain.property.preconfiguredUllDomain">PreconfiguredUllDomain</a></code> | <code>string</code> | The preconfigured Ultra-Low-Latency domain name. |

---

##### `PreconfiguredUllDomain`<sup>Optional</sup> <a name="PreconfiguredUllDomain" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomain.property.preconfiguredUllDomain"></a>

```csharp
public string PreconfiguredUllDomain { get; set; }
```

- *Type:* string

The preconfigured Ultra-Low-Latency domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_multicast_domain#preconfigured_ull_domain NetworkServicesMulticastDomain#preconfigured_ull_domain}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesMulticastDomainConnectionConfigOutputReference <a name="NetworkServicesMulticastDomainConnectionConfigOutputReference" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastDomainConnectionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.resetNccHub">ResetNccHub</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNccHub` <a name="ResetNccHub" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.resetNccHub"></a>

```csharp
private void ResetNccHub()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.connectionTypeInput">ConnectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.nccHubInput">NccHubInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.nccHub">NccHub</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig">NetworkServicesMulticastDomainConnectionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionTypeInput`<sup>Optional</sup> <a name="ConnectionTypeInput" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.connectionTypeInput"></a>

```csharp
public string ConnectionTypeInput { get; }
```

- *Type:* string

---

##### `NccHubInput`<sup>Optional</sup> <a name="NccHubInput" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.nccHubInput"></a>

```csharp
public string NccHubInput { get; }
```

- *Type:* string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `NccHub`<sup>Required</sup> <a name="NccHub" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.nccHub"></a>

```csharp
public string NccHub { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesMulticastDomainConnectionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig">NetworkServicesMulticastDomainConnectionConfig</a>

---


### NetworkServicesMulticastDomainStateList <a name="NetworkServicesMulticastDomainStateList" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastDomainStateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.get"></a>

```csharp
private NetworkServicesMulticastDomainStateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NetworkServicesMulticastDomainStateOutputReference <a name="NetworkServicesMulticastDomainStateOutputReference" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastDomainStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainState">NetworkServicesMulticastDomainState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesMulticastDomainState InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainState">NetworkServicesMulticastDomainState</a>

---


### NetworkServicesMulticastDomainTimeoutsOutputReference <a name="NetworkServicesMulticastDomainTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastDomainTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts">NetworkServicesMulticastDomainTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkServicesMulticastDomainTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts">NetworkServicesMulticastDomainTimeouts</a>

---


### NetworkServicesMulticastDomainUllMulticastDomainOutputReference <a name="NetworkServicesMulticastDomainUllMulticastDomainOutputReference" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastDomainUllMulticastDomainOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.resetPreconfiguredUllDomain">ResetPreconfiguredUllDomain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreconfiguredUllDomain` <a name="ResetPreconfiguredUllDomain" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.resetPreconfiguredUllDomain"></a>

```csharp
private void ResetPreconfiguredUllDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.preconfiguredUllDomainInput">PreconfiguredUllDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.preconfiguredUllDomain">PreconfiguredUllDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomain">NetworkServicesMulticastDomainUllMulticastDomain</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PreconfiguredUllDomainInput`<sup>Optional</sup> <a name="PreconfiguredUllDomainInput" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.preconfiguredUllDomainInput"></a>

```csharp
public string PreconfiguredUllDomainInput { get; }
```

- *Type:* string

---

##### `PreconfiguredUllDomain`<sup>Required</sup> <a name="PreconfiguredUllDomain" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.preconfiguredUllDomain"></a>

```csharp
public string PreconfiguredUllDomain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesMulticastDomainUllMulticastDomain InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomain">NetworkServicesMulticastDomainUllMulticastDomain</a>

---



