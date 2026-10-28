# `networkSecurityFirewallEndpoint` Submodule <a name="`networkSecurityFirewallEndpoint` Submodule" id="@cdktn/provider-google.networkSecurityFirewallEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityFirewallEndpoint <a name="NetworkSecurityFirewallEndpoint" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint google_network_security_firewall_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer"></a>

```typescript
import { networkSecurityFirewallEndpoint } from '@cdktn/provider-google'

new networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint(scope: Construct, id: string, config: NetworkSecurityFirewallEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig">NetworkSecurityFirewallEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig">NetworkSecurityFirewallEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putEndpointSettings">putEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putWildfireSettings">putWildfireSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetBillingProjectId">resetBillingProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetEndpointSettings">resetEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetWildfireSettings">resetWildfireSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpointSettings` <a name="putEndpointSettings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putEndpointSettings"></a>

```typescript
public putEndpointSettings(value: NetworkSecurityFirewallEndpointEndpointSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putEndpointSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings">NetworkSecurityFirewallEndpointEndpointSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkSecurityFirewallEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts">NetworkSecurityFirewallEndpointTimeouts</a>

---

##### `putWildfireSettings` <a name="putWildfireSettings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putWildfireSettings"></a>

```typescript
public putWildfireSettings(value: NetworkSecurityFirewallEndpointWildfireSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putWildfireSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings">NetworkSecurityFirewallEndpointWildfireSettings</a>

---

##### `resetBillingProjectId` <a name="resetBillingProjectId" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetBillingProjectId"></a>

```typescript
public resetBillingProjectId(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetEndpointSettings` <a name="resetEndpointSettings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetEndpointSettings"></a>

```typescript
public resetEndpointSettings(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWildfireSettings` <a name="resetWildfireSettings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetWildfireSettings"></a>

```typescript
public resetWildfireSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkSecurityFirewallEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isConstruct"></a>

```typescript
import { networkSecurityFirewallEndpoint } from '@cdktn/provider-google'

networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformElement"></a>

```typescript
import { networkSecurityFirewallEndpoint } from '@cdktn/provider-google'

networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformResource"></a>

```typescript
import { networkSecurityFirewallEndpoint } from '@cdktn/provider-google'

networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport"></a>

```typescript
import { networkSecurityFirewallEndpoint } from '@cdktn/provider-google'

networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkSecurityFirewallEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkSecurityFirewallEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkSecurityFirewallEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkSecurityFirewallEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.associatedNetworks">associatedNetworks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.endpointSettings">endpointSettings</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference">NetworkSecurityFirewallEndpointEndpointSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.reconciling">reconciling</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference">NetworkSecurityFirewallEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.wildfireSettings">wildfireSettings</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference">NetworkSecurityFirewallEndpointWildfireSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.billingProjectIdInput">billingProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.endpointSettingsInput">endpointSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings">NetworkSecurityFirewallEndpointEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts">NetworkSecurityFirewallEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.wildfireSettingsInput">wildfireSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings">NetworkSecurityFirewallEndpointWildfireSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.billingProjectId">billingProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `associatedNetworks`<sup>Required</sup> <a name="associatedNetworks" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.associatedNetworks"></a>

```typescript
public readonly associatedNetworks: string[];
```

- *Type:* string[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `endpointSettings`<sup>Required</sup> <a name="endpointSettings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.endpointSettings"></a>

```typescript
public readonly endpointSettings: NetworkSecurityFirewallEndpointEndpointSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference">NetworkSecurityFirewallEndpointEndpointSettingsOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkSecurityFirewallEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference">NetworkSecurityFirewallEndpointTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `wildfireSettings`<sup>Required</sup> <a name="wildfireSettings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.wildfireSettings"></a>

```typescript
public readonly wildfireSettings: NetworkSecurityFirewallEndpointWildfireSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference">NetworkSecurityFirewallEndpointWildfireSettingsOutputReference</a>

---

##### `billingProjectIdInput`<sup>Optional</sup> <a name="billingProjectIdInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.billingProjectIdInput"></a>

```typescript
public readonly billingProjectIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `endpointSettingsInput`<sup>Optional</sup> <a name="endpointSettingsInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.endpointSettingsInput"></a>

```typescript
public readonly endpointSettingsInput: NetworkSecurityFirewallEndpointEndpointSettings;
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings">NetworkSecurityFirewallEndpointEndpointSettings</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkSecurityFirewallEndpointTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts">NetworkSecurityFirewallEndpointTimeouts</a>

---

##### `wildfireSettingsInput`<sup>Optional</sup> <a name="wildfireSettingsInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.wildfireSettingsInput"></a>

```typescript
public readonly wildfireSettingsInput: NetworkSecurityFirewallEndpointWildfireSettings;
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings">NetworkSecurityFirewallEndpointWildfireSettings</a>

---

##### `billingProjectId`<sup>Required</sup> <a name="billingProjectId" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.billingProjectId"></a>

```typescript
public readonly billingProjectId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityFirewallEndpointConfig <a name="NetworkSecurityFirewallEndpointConfig" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.Initializer"></a>

```typescript
import { networkSecurityFirewallEndpoint } from '@cdktn/provider-google'

const networkSecurityFirewallEndpointConfig: networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.location">location</a></code> | <code>string</code> | The location (zone) of the firewall endpoint. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.name">name</a></code> | <code>string</code> | The name of the firewall endpoint resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.parent">parent</a></code> | <code>string</code> | The name of the parent this firewall endpoint belongs to. Format: 'organizations/{organization_id}' or 'projects/{project_id}'. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.billingProjectId">billingProjectId</a></code> | <code>string</code> | Project to charge for the deployed firewall endpoint. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.endpointSettings">endpointSettings</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings">NetworkSecurityFirewallEndpointEndpointSettings</a></code> | endpoint_settings block. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#id NetworkSecurityFirewallEndpoint#id}. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts">NetworkSecurityFirewallEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.wildfireSettings">wildfireSettings</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings">NetworkSecurityFirewallEndpointWildfireSettings</a></code> | wildfire_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location (zone) of the firewall endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#location NetworkSecurityFirewallEndpoint#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the firewall endpoint resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#name NetworkSecurityFirewallEndpoint#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The name of the parent this firewall endpoint belongs to. Format: 'organizations/{organization_id}' or 'projects/{project_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#parent NetworkSecurityFirewallEndpoint#parent}

---

##### `billingProjectId`<sup>Optional</sup> <a name="billingProjectId" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.billingProjectId"></a>

```typescript
public readonly billingProjectId: string;
```

- *Type:* string

Project to charge for the deployed firewall endpoint.

This field is required for organization-scoped endpoints.
For project-scoped endpoints, it is optional but must match the
endpoint's project if specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#billing_project_id NetworkSecurityFirewallEndpoint#billing_project_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#deletion_policy NetworkSecurityFirewallEndpoint#deletion_policy}

---

##### `endpointSettings`<sup>Optional</sup> <a name="endpointSettings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.endpointSettings"></a>

```typescript
public readonly endpointSettings: NetworkSecurityFirewallEndpointEndpointSettings;
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings">NetworkSecurityFirewallEndpointEndpointSettings</a>

endpoint_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#endpoint_settings NetworkSecurityFirewallEndpoint#endpoint_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#id NetworkSecurityFirewallEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#labels NetworkSecurityFirewallEndpoint#labels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkSecurityFirewallEndpointTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts">NetworkSecurityFirewallEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#timeouts NetworkSecurityFirewallEndpoint#timeouts}

---

##### `wildfireSettings`<sup>Optional</sup> <a name="wildfireSettings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.wildfireSettings"></a>

```typescript
public readonly wildfireSettings: NetworkSecurityFirewallEndpointWildfireSettings;
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings">NetworkSecurityFirewallEndpointWildfireSettings</a>

wildfire_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#wildfire_settings NetworkSecurityFirewallEndpoint#wildfire_settings}

---

### NetworkSecurityFirewallEndpointEndpointSettings <a name="NetworkSecurityFirewallEndpointEndpointSettings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings.Initializer"></a>

```typescript
import { networkSecurityFirewallEndpoint } from '@cdktn/provider-google'

const networkSecurityFirewallEndpointEndpointSettings: networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings.property.contentCloudRegion">contentCloudRegion</a></code> | <code>string</code> | The Palo Alto Networks content cloud region of the firewall endpoint, for example 'US_CENTRAL' or 'CANADA'. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings.property.httpPartialResponseBlocked">httpPartialResponseBlocked</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to block HTTP partial responses for the firewall endpoint. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings.property.jumboFramesEnabled">jumboFramesEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether Jumbo Frames are enabled for the firewall endpoint. |

---

##### `contentCloudRegion`<sup>Optional</sup> <a name="contentCloudRegion" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings.property.contentCloudRegion"></a>

```typescript
public readonly contentCloudRegion: string;
```

- *Type:* string

The Palo Alto Networks content cloud region of the firewall endpoint, for example 'US_CENTRAL' or 'CANADA'.

See
[API docs](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1beta1/organizations.locations.firewallEndpoints#contentcloudregion)
for the list of supported regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#content_cloud_region NetworkSecurityFirewallEndpoint#content_cloud_region}

---

##### `httpPartialResponseBlocked`<sup>Optional</sup> <a name="httpPartialResponseBlocked" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings.property.httpPartialResponseBlocked"></a>

```typescript
public readonly httpPartialResponseBlocked: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to block HTTP partial responses for the firewall endpoint.

When 'true', resumption of blocked malicious HTTP file downloads is
blocked by the firewall. 'false' provides maximum availability, 'true'
provides maximum security.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#http_partial_response_blocked NetworkSecurityFirewallEndpoint#http_partial_response_blocked}

---

##### `jumboFramesEnabled`<sup>Optional</sup> <a name="jumboFramesEnabled" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings.property.jumboFramesEnabled"></a>

```typescript
public readonly jumboFramesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether Jumbo Frames are enabled for the firewall endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#jumbo_frames_enabled NetworkSecurityFirewallEndpoint#jumbo_frames_enabled}

---

### NetworkSecurityFirewallEndpointTimeouts <a name="NetworkSecurityFirewallEndpointTimeouts" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.Initializer"></a>

```typescript
import { networkSecurityFirewallEndpoint } from '@cdktn/provider-google'

const networkSecurityFirewallEndpointTimeouts: networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#create NetworkSecurityFirewallEndpoint#create}. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#delete NetworkSecurityFirewallEndpoint#delete}. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#update NetworkSecurityFirewallEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#create NetworkSecurityFirewallEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#delete NetworkSecurityFirewallEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#update NetworkSecurityFirewallEndpoint#update}.

---

### NetworkSecurityFirewallEndpointWildfireSettings <a name="NetworkSecurityFirewallEndpointWildfireSettings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings.Initializer"></a>

```typescript
import { networkSecurityFirewallEndpoint } from '@cdktn/provider-google'

const networkSecurityFirewallEndpointWildfireSettings: networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether WildFire is enabled for the firewall endpoint. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings.property.wildfireInlineCloudAnalysisSettings">wildfireInlineCloudAnalysisSettings</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings">NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings</a></code> | wildfire_inline_cloud_analysis_settings block. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings.property.wildfireRealtimeLookupDuration">wildfireRealtimeLookupDuration</a></code> | <code>string</code> | The duration for which the firewall endpoint waits for a real-time signature lookup response from the WildFire cloud before taking the configured timeout action (1ms to 5000ms, default 1000ms). |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings.property.wildfireRealtimeLookupTimeoutAction">wildfireRealtimeLookupTimeoutAction</a></code> | <code>string</code> | The action to take when a WildFire real-time signature lookup times out. Possible values: ["ALLOW", "DENY"]. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings.property.wildfireRegion">wildfireRegion</a></code> | <code>string</code> | The WildFire region for the firewall endpoint, for example 'UNITED_STATES' or 'CANADA'. See [API docs](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1beta1/organizations.locations.firewallEndpoints#wildfireregion) for the list of supported regions. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether WildFire is enabled for the firewall endpoint.

Enabling WildFire requires accepting the WildFire end-user license
agreement (EULA) for the endpoint's billing project; see
[Configure WildFire](https://docs.cloud.google.com/firewall/docs/configure-wildfire).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#enabled NetworkSecurityFirewallEndpoint#enabled}

---

##### `wildfireInlineCloudAnalysisSettings`<sup>Optional</sup> <a name="wildfireInlineCloudAnalysisSettings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings.property.wildfireInlineCloudAnalysisSettings"></a>

```typescript
public readonly wildfireInlineCloudAnalysisSettings: NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings;
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings">NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings</a>

wildfire_inline_cloud_analysis_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#wildfire_inline_cloud_analysis_settings NetworkSecurityFirewallEndpoint#wildfire_inline_cloud_analysis_settings}

---

##### `wildfireRealtimeLookupDuration`<sup>Optional</sup> <a name="wildfireRealtimeLookupDuration" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings.property.wildfireRealtimeLookupDuration"></a>

```typescript
public readonly wildfireRealtimeLookupDuration: string;
```

- *Type:* string

The duration for which the firewall endpoint waits for a real-time signature lookup response from the WildFire cloud before taking the configured timeout action (1ms to 5000ms, default 1000ms).

A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "1s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#wildfire_realtime_lookup_duration NetworkSecurityFirewallEndpoint#wildfire_realtime_lookup_duration}

---

##### `wildfireRealtimeLookupTimeoutAction`<sup>Optional</sup> <a name="wildfireRealtimeLookupTimeoutAction" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings.property.wildfireRealtimeLookupTimeoutAction"></a>

```typescript
public readonly wildfireRealtimeLookupTimeoutAction: string;
```

- *Type:* string

The action to take when a WildFire real-time signature lookup times out. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#wildfire_realtime_lookup_timeout_action NetworkSecurityFirewallEndpoint#wildfire_realtime_lookup_timeout_action}

---

##### `wildfireRegion`<sup>Optional</sup> <a name="wildfireRegion" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings.property.wildfireRegion"></a>

```typescript
public readonly wildfireRegion: string;
```

- *Type:* string

The WildFire region for the firewall endpoint, for example 'UNITED_STATES' or 'CANADA'. See [API docs](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1beta1/organizations.locations.firewallEndpoints#wildfireregion) for the list of supported regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#wildfire_region NetworkSecurityFirewallEndpoint#wildfire_region}

---

### NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings <a name="NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings.Initializer"></a>

```typescript
import { networkSecurityFirewallEndpoint } from '@cdktn/provider-google'

const networkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings: networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings.property.maxAnalysisDuration">maxAnalysisDuration</a></code> | <code>string</code> | The maximum duration for which the firewall endpoint holds a file while waiting for an inline cloud analysis verdict before taking the configured timeout action (1ms to 240000ms, default 30000ms). |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings.property.submissionTimeoutLoggingDisabled">submissionTimeoutLoggingDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether logging is disabled when a WildFire inline cloud analysis submission times out. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings.property.timeoutAction">timeoutAction</a></code> | <code>string</code> | The action to take when WildFire inline cloud analysis times out. Possible values: ["ALLOW", "DENY"]. |

---

##### `maxAnalysisDuration`<sup>Optional</sup> <a name="maxAnalysisDuration" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings.property.maxAnalysisDuration"></a>

```typescript
public readonly maxAnalysisDuration: string;
```

- *Type:* string

The maximum duration for which the firewall endpoint holds a file while waiting for an inline cloud analysis verdict before taking the configured timeout action (1ms to 240000ms, default 30000ms).

A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "30s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#max_analysis_duration NetworkSecurityFirewallEndpoint#max_analysis_duration}

---

##### `submissionTimeoutLoggingDisabled`<sup>Optional</sup> <a name="submissionTimeoutLoggingDisabled" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings.property.submissionTimeoutLoggingDisabled"></a>

```typescript
public readonly submissionTimeoutLoggingDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether logging is disabled when a WildFire inline cloud analysis submission times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#submission_timeout_logging_disabled NetworkSecurityFirewallEndpoint#submission_timeout_logging_disabled}

---

##### `timeoutAction`<sup>Optional</sup> <a name="timeoutAction" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings.property.timeoutAction"></a>

```typescript
public readonly timeoutAction: string;
```

- *Type:* string

The action to take when WildFire inline cloud analysis times out. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#timeout_action NetworkSecurityFirewallEndpoint#timeout_action}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityFirewallEndpointEndpointSettingsOutputReference <a name="NetworkSecurityFirewallEndpointEndpointSettingsOutputReference" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer"></a>

```typescript
import { networkSecurityFirewallEndpoint } from '@cdktn/provider-google'

new networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resetContentCloudRegion">resetContentCloudRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resetHttpPartialResponseBlocked">resetHttpPartialResponseBlocked</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resetJumboFramesEnabled">resetJumboFramesEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentCloudRegion` <a name="resetContentCloudRegion" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resetContentCloudRegion"></a>

```typescript
public resetContentCloudRegion(): void
```

##### `resetHttpPartialResponseBlocked` <a name="resetHttpPartialResponseBlocked" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resetHttpPartialResponseBlocked"></a>

```typescript
public resetHttpPartialResponseBlocked(): void
```

##### `resetJumboFramesEnabled` <a name="resetJumboFramesEnabled" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resetJumboFramesEnabled"></a>

```typescript
public resetJumboFramesEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.contentCloudRegionInput">contentCloudRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.httpPartialResponseBlockedInput">httpPartialResponseBlockedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.jumboFramesEnabledInput">jumboFramesEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.contentCloudRegion">contentCloudRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.httpPartialResponseBlocked">httpPartialResponseBlocked</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.jumboFramesEnabled">jumboFramesEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings">NetworkSecurityFirewallEndpointEndpointSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentCloudRegionInput`<sup>Optional</sup> <a name="contentCloudRegionInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.contentCloudRegionInput"></a>

```typescript
public readonly contentCloudRegionInput: string;
```

- *Type:* string

---

##### `httpPartialResponseBlockedInput`<sup>Optional</sup> <a name="httpPartialResponseBlockedInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.httpPartialResponseBlockedInput"></a>

```typescript
public readonly httpPartialResponseBlockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `jumboFramesEnabledInput`<sup>Optional</sup> <a name="jumboFramesEnabledInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.jumboFramesEnabledInput"></a>

```typescript
public readonly jumboFramesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `contentCloudRegion`<sup>Required</sup> <a name="contentCloudRegion" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.contentCloudRegion"></a>

```typescript
public readonly contentCloudRegion: string;
```

- *Type:* string

---

##### `httpPartialResponseBlocked`<sup>Required</sup> <a name="httpPartialResponseBlocked" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.httpPartialResponseBlocked"></a>

```typescript
public readonly httpPartialResponseBlocked: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `jumboFramesEnabled`<sup>Required</sup> <a name="jumboFramesEnabled" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.jumboFramesEnabled"></a>

```typescript
public readonly jumboFramesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkSecurityFirewallEndpointEndpointSettings;
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings">NetworkSecurityFirewallEndpointEndpointSettings</a>

---


### NetworkSecurityFirewallEndpointTimeoutsOutputReference <a name="NetworkSecurityFirewallEndpointTimeoutsOutputReference" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkSecurityFirewallEndpoint } from '@cdktn/provider-google'

new networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts">NetworkSecurityFirewallEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkSecurityFirewallEndpointTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts">NetworkSecurityFirewallEndpointTimeouts</a>

---


### NetworkSecurityFirewallEndpointWildfireSettingsOutputReference <a name="NetworkSecurityFirewallEndpointWildfireSettingsOutputReference" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.Initializer"></a>

```typescript
import { networkSecurityFirewallEndpoint } from '@cdktn/provider-google'

new networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.putWildfireInlineCloudAnalysisSettings">putWildfireInlineCloudAnalysisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetWildfireInlineCloudAnalysisSettings">resetWildfireInlineCloudAnalysisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetWildfireRealtimeLookupDuration">resetWildfireRealtimeLookupDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetWildfireRealtimeLookupTimeoutAction">resetWildfireRealtimeLookupTimeoutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetWildfireRegion">resetWildfireRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWildfireInlineCloudAnalysisSettings` <a name="putWildfireInlineCloudAnalysisSettings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.putWildfireInlineCloudAnalysisSettings"></a>

```typescript
public putWildfireInlineCloudAnalysisSettings(value: NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.putWildfireInlineCloudAnalysisSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings">NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetWildfireInlineCloudAnalysisSettings` <a name="resetWildfireInlineCloudAnalysisSettings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetWildfireInlineCloudAnalysisSettings"></a>

```typescript
public resetWildfireInlineCloudAnalysisSettings(): void
```

##### `resetWildfireRealtimeLookupDuration` <a name="resetWildfireRealtimeLookupDuration" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetWildfireRealtimeLookupDuration"></a>

```typescript
public resetWildfireRealtimeLookupDuration(): void
```

##### `resetWildfireRealtimeLookupTimeoutAction` <a name="resetWildfireRealtimeLookupTimeoutAction" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetWildfireRealtimeLookupTimeoutAction"></a>

```typescript
public resetWildfireRealtimeLookupTimeoutAction(): void
```

##### `resetWildfireRegion` <a name="resetWildfireRegion" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetWildfireRegion"></a>

```typescript
public resetWildfireRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireInlineCloudAnalysisSettings">wildfireInlineCloudAnalysisSettings</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference">NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireInlineCloudAnalysisSettingsInput">wildfireInlineCloudAnalysisSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings">NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRealtimeLookupDurationInput">wildfireRealtimeLookupDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRealtimeLookupTimeoutActionInput">wildfireRealtimeLookupTimeoutActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRegionInput">wildfireRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRealtimeLookupDuration">wildfireRealtimeLookupDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRealtimeLookupTimeoutAction">wildfireRealtimeLookupTimeoutAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRegion">wildfireRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings">NetworkSecurityFirewallEndpointWildfireSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `wildfireInlineCloudAnalysisSettings`<sup>Required</sup> <a name="wildfireInlineCloudAnalysisSettings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireInlineCloudAnalysisSettings"></a>

```typescript
public readonly wildfireInlineCloudAnalysisSettings: NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference">NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `wildfireInlineCloudAnalysisSettingsInput`<sup>Optional</sup> <a name="wildfireInlineCloudAnalysisSettingsInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireInlineCloudAnalysisSettingsInput"></a>

```typescript
public readonly wildfireInlineCloudAnalysisSettingsInput: NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings;
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings">NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings</a>

---

##### `wildfireRealtimeLookupDurationInput`<sup>Optional</sup> <a name="wildfireRealtimeLookupDurationInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRealtimeLookupDurationInput"></a>

```typescript
public readonly wildfireRealtimeLookupDurationInput: string;
```

- *Type:* string

---

##### `wildfireRealtimeLookupTimeoutActionInput`<sup>Optional</sup> <a name="wildfireRealtimeLookupTimeoutActionInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRealtimeLookupTimeoutActionInput"></a>

```typescript
public readonly wildfireRealtimeLookupTimeoutActionInput: string;
```

- *Type:* string

---

##### `wildfireRegionInput`<sup>Optional</sup> <a name="wildfireRegionInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRegionInput"></a>

```typescript
public readonly wildfireRegionInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `wildfireRealtimeLookupDuration`<sup>Required</sup> <a name="wildfireRealtimeLookupDuration" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRealtimeLookupDuration"></a>

```typescript
public readonly wildfireRealtimeLookupDuration: string;
```

- *Type:* string

---

##### `wildfireRealtimeLookupTimeoutAction`<sup>Required</sup> <a name="wildfireRealtimeLookupTimeoutAction" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRealtimeLookupTimeoutAction"></a>

```typescript
public readonly wildfireRealtimeLookupTimeoutAction: string;
```

- *Type:* string

---

##### `wildfireRegion`<sup>Required</sup> <a name="wildfireRegion" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRegion"></a>

```typescript
public readonly wildfireRegion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkSecurityFirewallEndpointWildfireSettings;
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings">NetworkSecurityFirewallEndpointWildfireSettings</a>

---


### NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference <a name="NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.Initializer"></a>

```typescript
import { networkSecurityFirewallEndpoint } from '@cdktn/provider-google'

new networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resetMaxAnalysisDuration">resetMaxAnalysisDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resetSubmissionTimeoutLoggingDisabled">resetSubmissionTimeoutLoggingDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resetTimeoutAction">resetTimeoutAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxAnalysisDuration` <a name="resetMaxAnalysisDuration" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resetMaxAnalysisDuration"></a>

```typescript
public resetMaxAnalysisDuration(): void
```

##### `resetSubmissionTimeoutLoggingDisabled` <a name="resetSubmissionTimeoutLoggingDisabled" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resetSubmissionTimeoutLoggingDisabled"></a>

```typescript
public resetSubmissionTimeoutLoggingDisabled(): void
```

##### `resetTimeoutAction` <a name="resetTimeoutAction" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resetTimeoutAction"></a>

```typescript
public resetTimeoutAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.maxAnalysisDurationInput">maxAnalysisDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.submissionTimeoutLoggingDisabledInput">submissionTimeoutLoggingDisabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.timeoutActionInput">timeoutActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.maxAnalysisDuration">maxAnalysisDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.submissionTimeoutLoggingDisabled">submissionTimeoutLoggingDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.timeoutAction">timeoutAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings">NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxAnalysisDurationInput`<sup>Optional</sup> <a name="maxAnalysisDurationInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.maxAnalysisDurationInput"></a>

```typescript
public readonly maxAnalysisDurationInput: string;
```

- *Type:* string

---

##### `submissionTimeoutLoggingDisabledInput`<sup>Optional</sup> <a name="submissionTimeoutLoggingDisabledInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.submissionTimeoutLoggingDisabledInput"></a>

```typescript
public readonly submissionTimeoutLoggingDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeoutActionInput`<sup>Optional</sup> <a name="timeoutActionInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.timeoutActionInput"></a>

```typescript
public readonly timeoutActionInput: string;
```

- *Type:* string

---

##### `maxAnalysisDuration`<sup>Required</sup> <a name="maxAnalysisDuration" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.maxAnalysisDuration"></a>

```typescript
public readonly maxAnalysisDuration: string;
```

- *Type:* string

---

##### `submissionTimeoutLoggingDisabled`<sup>Required</sup> <a name="submissionTimeoutLoggingDisabled" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.submissionTimeoutLoggingDisabled"></a>

```typescript
public readonly submissionTimeoutLoggingDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeoutAction`<sup>Required</sup> <a name="timeoutAction" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.timeoutAction"></a>

```typescript
public readonly timeoutAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings;
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings">NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings</a>

---



