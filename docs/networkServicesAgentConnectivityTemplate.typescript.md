# `networkServicesAgentConnectivityTemplate` Submodule <a name="`networkServicesAgentConnectivityTemplate` Submodule" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesAgentConnectivityTemplate <a name="NetworkServicesAgentConnectivityTemplate" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template google_network_services_agent_connectivity_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer"></a>

```typescript
import { networkServicesAgentConnectivityTemplate } from '@cdktn/provider-google'

new networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate(scope: Construct, id: string, config: NetworkServicesAgentConnectivityTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig">NetworkServicesAgentConnectivityTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig">NetworkServicesAgentConnectivityTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig">putEgressNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetAccessTypes">resetAccessTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetEgressNetworkConfig">resetEgressNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEgressNetworkConfig` <a name="putEgressNetworkConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig"></a>

```typescript
public putEgressNetworkConfig(value: NetworkServicesAgentConnectivityTemplateEgressNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkServicesAgentConnectivityTemplateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a>

---

##### `resetAccessTypes` <a name="resetAccessTypes" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetAccessTypes"></a>

```typescript
public resetAccessTypes(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEgressNetworkConfig` <a name="resetEgressNetworkConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetEgressNetworkConfig"></a>

```typescript
public resetEgressNetworkConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesAgentConnectivityTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isConstruct"></a>

```typescript
import { networkServicesAgentConnectivityTemplate } from '@cdktn/provider-google'

networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformElement"></a>

```typescript
import { networkServicesAgentConnectivityTemplate } from '@cdktn/provider-google'

networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformResource"></a>

```typescript
import { networkServicesAgentConnectivityTemplate } from '@cdktn/provider-google'

networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport"></a>

```typescript
import { networkServicesAgentConnectivityTemplate } from '@cdktn/provider-google'

networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkServicesAgentConnectivityTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkServicesAgentConnectivityTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkServicesAgentConnectivityTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesAgentConnectivityTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.egressNetworkConfig">egressNetworkConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference">NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessPathInput">accessPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessTypesInput">accessTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateIdInput">agentConnectivityTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.egressNetworkConfigInput">egressNetworkConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessPath">accessPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessTypes">accessTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateId">agentConnectivityTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `egressNetworkConfig`<sup>Required</sup> <a name="egressNetworkConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.egressNetworkConfig"></a>

```typescript
public readonly egressNetworkConfig: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference">NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `accessPathInput`<sup>Optional</sup> <a name="accessPathInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessPathInput"></a>

```typescript
public readonly accessPathInput: string;
```

- *Type:* string

---

##### `accessTypesInput`<sup>Optional</sup> <a name="accessTypesInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessTypesInput"></a>

```typescript
public readonly accessTypesInput: string[];
```

- *Type:* string[]

---

##### `agentConnectivityTemplateIdInput`<sup>Optional</sup> <a name="agentConnectivityTemplateIdInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateIdInput"></a>

```typescript
public readonly agentConnectivityTemplateIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `egressNetworkConfigInput`<sup>Optional</sup> <a name="egressNetworkConfigInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.egressNetworkConfigInput"></a>

```typescript
public readonly egressNetworkConfigInput: NetworkServicesAgentConnectivityTemplateEgressNetworkConfig;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkServicesAgentConnectivityTemplateTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a>

---

##### `accessPath`<sup>Required</sup> <a name="accessPath" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessPath"></a>

```typescript
public readonly accessPath: string;
```

- *Type:* string

---

##### `accessTypes`<sup>Required</sup> <a name="accessTypes" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessTypes"></a>

```typescript
public readonly accessTypes: string[];
```

- *Type:* string[]

---

##### `agentConnectivityTemplateId`<sup>Required</sup> <a name="agentConnectivityTemplateId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateId"></a>

```typescript
public readonly agentConnectivityTemplateId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesAgentConnectivityTemplateConfig <a name="NetworkServicesAgentConnectivityTemplateConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.Initializer"></a>

```typescript
import { networkServicesAgentConnectivityTemplate } from '@cdktn/provider-google'

const networkServicesAgentConnectivityTemplateConfig: networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.accessPath">accessPath</a></code> | <code>string</code> | The path of the access. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.agentConnectivityTemplateId">agentConnectivityTemplateId</a></code> | <code>string</code> | Short name of the AgentConnectivityTemplate resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.location">location</a></code> | <code>string</code> | The location of the AgentConnectivityTemplate. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.accessTypes">accessTypes</a></code> | <code>string[]</code> | The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.description">description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.egressNetworkConfig">egressNetworkConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | egress_network_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#id NetworkServicesAgentConnectivityTemplate#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of label tags associated with the AgentConnectivityTemplate resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#project NetworkServicesAgentConnectivityTemplate#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessPath`<sup>Required</sup> <a name="accessPath" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.accessPath"></a>

```typescript
public readonly accessPath: string;
```

- *Type:* string

The path of the access.

The path is immutable once set. Exactly one path can be set. Possible values: ["CLIENT_TO_AGENT", "AGENT_TO_ANYWHERE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#access_path NetworkServicesAgentConnectivityTemplate#access_path}

---

##### `agentConnectivityTemplateId`<sup>Required</sup> <a name="agentConnectivityTemplateId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.agentConnectivityTemplateId"></a>

```typescript
public readonly agentConnectivityTemplateId: string;
```

- *Type:* string

Short name of the AgentConnectivityTemplate resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#agent_connectivity_template_id NetworkServicesAgentConnectivityTemplate#agent_connectivity_template_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the AgentConnectivityTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#location NetworkServicesAgentConnectivityTemplate#location}

---

##### `accessTypes`<sup>Optional</sup> <a name="accessTypes" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.accessTypes"></a>

```typescript
public readonly accessTypes: string[];
```

- *Type:* string[]

The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#access_types NetworkServicesAgentConnectivityTemplate#access_types}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#deletion_policy NetworkServicesAgentConnectivityTemplate#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#description NetworkServicesAgentConnectivityTemplate#description}

---

##### `egressNetworkConfig`<sup>Optional</sup> <a name="egressNetworkConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.egressNetworkConfig"></a>

```typescript
public readonly egressNetworkConfig: NetworkServicesAgentConnectivityTemplateEgressNetworkConfig;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

egress_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#egress_network_config NetworkServicesAgentConnectivityTemplate#egress_network_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#id NetworkServicesAgentConnectivityTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of label tags associated with the AgentConnectivityTemplate resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#labels NetworkServicesAgentConnectivityTemplate#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#project NetworkServicesAgentConnectivityTemplate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesAgentConnectivityTemplateTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#timeouts NetworkServicesAgentConnectivityTemplate#timeouts}

---

### NetworkServicesAgentConnectivityTemplateEgressNetworkConfig <a name="NetworkServicesAgentConnectivityTemplateEgressNetworkConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.Initializer"></a>

```typescript
import { networkServicesAgentConnectivityTemplate } from '@cdktn/provider-google'

const networkServicesAgentConnectivityTemplateEgressNetworkConfig: networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.dnsPeeringConfig">dnsPeeringConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a></code> | dns_peering_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | The network attachment resource name. Format: projects/{project}/regions/{region}/networkAttachments/{network_attachment_id}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a></code> | tls_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.vpcEgress">vpcEgress</a></code> | <code>string</code> | The VPC egress setting. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]. |

---

##### `dnsPeeringConfig`<sup>Optional</sup> <a name="dnsPeeringConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.dnsPeeringConfig"></a>

```typescript
public readonly dnsPeeringConfig: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

dns_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#dns_peering_config NetworkServicesAgentConnectivityTemplate#dns_peering_config}

---

##### `networkAttachment`<sup>Optional</sup> <a name="networkAttachment" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

The network attachment resource name. Format: projects/{project}/regions/{region}/networkAttachments/{network_attachment_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#network_attachment NetworkServicesAgentConnectivityTemplate#network_attachment}

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#tls_config NetworkServicesAgentConnectivityTemplate#tls_config}

---

##### `vpcEgress`<sup>Optional</sup> <a name="vpcEgress" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.vpcEgress"></a>

```typescript
public readonly vpcEgress: string;
```

- *Type:* string

The VPC egress setting. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#vpc_egress NetworkServicesAgentConnectivityTemplate#vpc_egress}

---

### NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig <a name="NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.Initializer"></a>

```typescript
import { networkServicesAgentConnectivityTemplate } from '@cdktn/provider-google'

const networkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig: networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.targetNetwork">targetNetwork</a></code> | <code>string</code> | The URI of the target VPC network for DNS peering. Must be of the form 'projects/{project}/global/networks/{network}'. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domain">domain</a></code> | <code>string</code> | The domain name to peer for DNS resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domains">domains</a></code> | <code>string[]</code> | The list of domain names to peer for DNS resolution. |

---

##### `targetNetwork`<sup>Required</sup> <a name="targetNetwork" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.targetNetwork"></a>

```typescript
public readonly targetNetwork: string;
```

- *Type:* string

The URI of the target VPC network for DNS peering. Must be of the form 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#target_network NetworkServicesAgentConnectivityTemplate#target_network}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

The domain name to peer for DNS resolution.

Must be a fully
qualified domain name ending with a dot (for example, 'example.com.').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#domain NetworkServicesAgentConnectivityTemplate#domain}

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

The list of domain names to peer for DNS resolution.

Each entry
must be a fully qualified domain name ending with a dot
(for example, 'example.com.'). At least one domain must be
specified between 'domain' and 'domains'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#domains NetworkServicesAgentConnectivityTemplate#domains}

---

### NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig <a name="NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.Initializer"></a>

```typescript
import { networkServicesAgentConnectivityTemplate } from '@cdktn/provider-google'

const networkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig: networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.additionalRoots">additionalRoots</a></code> | <code>string</code> | Defines whether additional roots should be trusted. Possible values: ["NO_ADDITIONAL_ROOTS", "PUBLICLY_TRUSTED_ROOTS"]. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.trustConfig">trustConfig</a></code> | <code>string</code> | The trust config resource name. Format: projects/{project}/locations/{location}/trustConfigs/{trust_config}. |

---

##### `additionalRoots`<sup>Required</sup> <a name="additionalRoots" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.additionalRoots"></a>

```typescript
public readonly additionalRoots: string;
```

- *Type:* string

Defines whether additional roots should be trusted. Possible values: ["NO_ADDITIONAL_ROOTS", "PUBLICLY_TRUSTED_ROOTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#additional_roots NetworkServicesAgentConnectivityTemplate#additional_roots}

---

##### `trustConfig`<sup>Optional</sup> <a name="trustConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.trustConfig"></a>

```typescript
public readonly trustConfig: string;
```

- *Type:* string

The trust config resource name. Format: projects/{project}/locations/{location}/trustConfigs/{trust_config}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#trust_config NetworkServicesAgentConnectivityTemplate#trust_config}

---

### NetworkServicesAgentConnectivityTemplateTimeouts <a name="NetworkServicesAgentConnectivityTemplateTimeouts" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.Initializer"></a>

```typescript
import { networkServicesAgentConnectivityTemplate } from '@cdktn/provider-google'

const networkServicesAgentConnectivityTemplateTimeouts: networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#create NetworkServicesAgentConnectivityTemplate#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#delete NetworkServicesAgentConnectivityTemplate#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#update NetworkServicesAgentConnectivityTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#create NetworkServicesAgentConnectivityTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#delete NetworkServicesAgentConnectivityTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#update NetworkServicesAgentConnectivityTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference <a name="NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer"></a>

```typescript
import { networkServicesAgentConnectivityTemplate } from '@cdktn/provider-google'

new networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomains">resetDomains</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetDomains` <a name="resetDomains" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomains"></a>

```typescript
public resetDomains(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainsInput">domainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetworkInput">targetNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetwork">targetNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainsInput"></a>

```typescript
public readonly domainsInput: string[];
```

- *Type:* string[]

---

##### `targetNetworkInput`<sup>Optional</sup> <a name="targetNetworkInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetworkInput"></a>

```typescript
public readonly targetNetworkInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `targetNetwork`<sup>Required</sup> <a name="targetNetwork" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetwork"></a>

```typescript
public readonly targetNetwork: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

---


### NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference <a name="NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer"></a>

```typescript
import { networkServicesAgentConnectivityTemplate } from '@cdktn/provider-google'

new networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig">putDnsPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetDnsPeeringConfig">resetDnsPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetNetworkAttachment">resetNetworkAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetVpcEgress">resetVpcEgress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDnsPeeringConfig` <a name="putDnsPeeringConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig"></a>

```typescript
public putDnsPeeringConfig(value: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig"></a>

```typescript
public putTlsConfig(value: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

---

##### `resetDnsPeeringConfig` <a name="resetDnsPeeringConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetDnsPeeringConfig"></a>

```typescript
public resetDnsPeeringConfig(): void
```

##### `resetNetworkAttachment` <a name="resetNetworkAttachment" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetNetworkAttachment"></a>

```typescript
public resetNetworkAttachment(): void
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetTlsConfig"></a>

```typescript
public resetTlsConfig(): void
```

##### `resetVpcEgress` <a name="resetVpcEgress" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetVpcEgress"></a>

```typescript
public resetVpcEgress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfig">dnsPeeringConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfigInput">dnsPeeringConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachmentInput">networkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgressInput">vpcEgressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgress">vpcEgress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsPeeringConfig`<sup>Required</sup> <a name="dnsPeeringConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfig"></a>

```typescript
public readonly dnsPeeringConfig: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference</a>

---

##### `dnsPeeringConfigInput`<sup>Optional</sup> <a name="dnsPeeringConfigInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfigInput"></a>

```typescript
public readonly dnsPeeringConfigInput: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

---

##### `networkAttachmentInput`<sup>Optional</sup> <a name="networkAttachmentInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachmentInput"></a>

```typescript
public readonly networkAttachmentInput: string;
```

- *Type:* string

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfigInput"></a>

```typescript
public readonly tlsConfigInput: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

---

##### `vpcEgressInput`<sup>Optional</sup> <a name="vpcEgressInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgressInput"></a>

```typescript
public readonly vpcEgressInput: string;
```

- *Type:* string

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

---

##### `vpcEgress`<sup>Required</sup> <a name="vpcEgress" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgress"></a>

```typescript
public readonly vpcEgress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesAgentConnectivityTemplateEgressNetworkConfig;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

---


### NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference <a name="NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer"></a>

```typescript
import { networkServicesAgentConnectivityTemplate } from '@cdktn/provider-google'

new networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resetTrustConfig">resetTrustConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTrustConfig` <a name="resetTrustConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resetTrustConfig"></a>

```typescript
public resetTrustConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRootsInput">additionalRootsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfigInput">trustConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRoots">additionalRoots</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfig">trustConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalRootsInput`<sup>Optional</sup> <a name="additionalRootsInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRootsInput"></a>

```typescript
public readonly additionalRootsInput: string;
```

- *Type:* string

---

##### `trustConfigInput`<sup>Optional</sup> <a name="trustConfigInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfigInput"></a>

```typescript
public readonly trustConfigInput: string;
```

- *Type:* string

---

##### `additionalRoots`<sup>Required</sup> <a name="additionalRoots" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRoots"></a>

```typescript
public readonly additionalRoots: string;
```

- *Type:* string

---

##### `trustConfig`<sup>Required</sup> <a name="trustConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfig"></a>

```typescript
public readonly trustConfig: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

---


### NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference <a name="NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkServicesAgentConnectivityTemplate } from '@cdktn/provider-google'

new networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesAgentConnectivityTemplateTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a>

---



