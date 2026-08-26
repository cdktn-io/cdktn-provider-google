# `discoveryEngineAssistant` Submodule <a name="`discoveryEngineAssistant` Submodule" id="@cdktn/provider-google.discoveryEngineAssistant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineAssistant <a name="DiscoveryEngineAssistant" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant google_discovery_engine_assistant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer"></a>

```typescript
import { discoveryEngineAssistant } from '@cdktn/provider-google'

new discoveryEngineAssistant.DiscoveryEngineAssistant(scope: Construct, id: string, config: DiscoveryEngineAssistantConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig">DiscoveryEngineAssistantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig">DiscoveryEngineAssistantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putCustomerPolicy">putCustomerPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putGenerationConfig">putGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetCustomerPolicy">resetCustomerPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetGenerationConfig">resetGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetWebGroundingType">resetWebGroundingType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomerPolicy` <a name="putCustomerPolicy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putCustomerPolicy"></a>

```typescript
public putCustomerPolicy(value: DiscoveryEngineAssistantCustomerPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putCustomerPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy">DiscoveryEngineAssistantCustomerPolicy</a>

---

##### `putGenerationConfig` <a name="putGenerationConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putGenerationConfig"></a>

```typescript
public putGenerationConfig(value: DiscoveryEngineAssistantGenerationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putGenerationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig">DiscoveryEngineAssistantGenerationConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putTimeouts"></a>

```typescript
public putTimeouts(value: DiscoveryEngineAssistantTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts">DiscoveryEngineAssistantTimeouts</a>

---

##### `resetCustomerPolicy` <a name="resetCustomerPolicy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetCustomerPolicy"></a>

```typescript
public resetCustomerPolicy(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGenerationConfig` <a name="resetGenerationConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetGenerationConfig"></a>

```typescript
public resetGenerationConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWebGroundingType` <a name="resetWebGroundingType" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetWebGroundingType"></a>

```typescript
public resetWebGroundingType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineAssistant resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isConstruct"></a>

```typescript
import { discoveryEngineAssistant } from '@cdktn/provider-google'

discoveryEngineAssistant.DiscoveryEngineAssistant.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isTerraformElement"></a>

```typescript
import { discoveryEngineAssistant } from '@cdktn/provider-google'

discoveryEngineAssistant.DiscoveryEngineAssistant.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isTerraformResource"></a>

```typescript
import { discoveryEngineAssistant } from '@cdktn/provider-google'

discoveryEngineAssistant.DiscoveryEngineAssistant.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.generateConfigForImport"></a>

```typescript
import { discoveryEngineAssistant } from '@cdktn/provider-google'

discoveryEngineAssistant.DiscoveryEngineAssistant.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DiscoveryEngineAssistant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DiscoveryEngineAssistant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DiscoveryEngineAssistant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineAssistant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.customerPolicy">customerPolicy</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference">DiscoveryEngineAssistantCustomerPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.generationConfig">generationConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference">DiscoveryEngineAssistantGenerationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference">DiscoveryEngineAssistantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.assistantIdInput">assistantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.collectionIdInput">collectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.customerPolicyInput">customerPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy">DiscoveryEngineAssistantCustomerPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.engineIdInput">engineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.generationConfigInput">generationConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig">DiscoveryEngineAssistantGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts">DiscoveryEngineAssistantTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.webGroundingTypeInput">webGroundingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.assistantId">assistantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.collectionId">collectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.engineId">engineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.webGroundingType">webGroundingType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `customerPolicy`<sup>Required</sup> <a name="customerPolicy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.customerPolicy"></a>

```typescript
public readonly customerPolicy: DiscoveryEngineAssistantCustomerPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference">DiscoveryEngineAssistantCustomerPolicyOutputReference</a>

---

##### `generationConfig`<sup>Required</sup> <a name="generationConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.generationConfig"></a>

```typescript
public readonly generationConfig: DiscoveryEngineAssistantGenerationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference">DiscoveryEngineAssistantGenerationConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.timeouts"></a>

```typescript
public readonly timeouts: DiscoveryEngineAssistantTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference">DiscoveryEngineAssistantTimeoutsOutputReference</a>

---

##### `assistantIdInput`<sup>Optional</sup> <a name="assistantIdInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.assistantIdInput"></a>

```typescript
public readonly assistantIdInput: string;
```

- *Type:* string

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.collectionIdInput"></a>

```typescript
public readonly collectionIdInput: string;
```

- *Type:* string

---

##### `customerPolicyInput`<sup>Optional</sup> <a name="customerPolicyInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.customerPolicyInput"></a>

```typescript
public readonly customerPolicyInput: DiscoveryEngineAssistantCustomerPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy">DiscoveryEngineAssistantCustomerPolicy</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `engineIdInput`<sup>Optional</sup> <a name="engineIdInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.engineIdInput"></a>

```typescript
public readonly engineIdInput: string;
```

- *Type:* string

---

##### `generationConfigInput`<sup>Optional</sup> <a name="generationConfigInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.generationConfigInput"></a>

```typescript
public readonly generationConfigInput: DiscoveryEngineAssistantGenerationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig">DiscoveryEngineAssistantGenerationConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DiscoveryEngineAssistantTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts">DiscoveryEngineAssistantTimeouts</a>

---

##### `webGroundingTypeInput`<sup>Optional</sup> <a name="webGroundingTypeInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.webGroundingTypeInput"></a>

```typescript
public readonly webGroundingTypeInput: string;
```

- *Type:* string

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.engineId"></a>

```typescript
public readonly engineId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `webGroundingType`<sup>Required</sup> <a name="webGroundingType" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.webGroundingType"></a>

```typescript
public readonly webGroundingType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineAssistantConfig <a name="DiscoveryEngineAssistantConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.Initializer"></a>

```typescript
import { discoveryEngineAssistant } from '@cdktn/provider-google'

const discoveryEngineAssistantConfig: discoveryEngineAssistant.DiscoveryEngineAssistantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.assistantId">assistantId</a></code> | <code>string</code> | The unique id of the assistant. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.collectionId">collectionId</a></code> | <code>string</code> | The unique id of the collection. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.displayName">displayName</a></code> | <code>string</code> | The assistant display name. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.engineId">engineId</a></code> | <code>string</code> | The unique id of the engine. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.customerPolicy">customerPolicy</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy">DiscoveryEngineAssistantCustomerPolicy</a></code> | customer_policy block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.description">description</a></code> | <code>string</code> | Description for additional information. Expected to be shown on the configuration UI, not to the users of the assistant. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.generationConfig">generationConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig">DiscoveryEngineAssistantGenerationConfig</a></code> | generation_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#id DiscoveryEngineAssistant#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#project DiscoveryEngineAssistant#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts">DiscoveryEngineAssistantTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.webGroundingType">webGroundingType</a></code> | <code>string</code> | The type of web grounding to use. The supported values: 'WEB_GROUNDING_TYPE_DISABLED', 'WEB_GROUNDING_TYPE_GOOGLE_SEARCH', 'WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

The unique id of the assistant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#assistant_id DiscoveryEngineAssistant#assistant_id}

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

The unique id of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#collection_id DiscoveryEngineAssistant#collection_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The assistant display name.

It must be a UTF-8 encoded string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#display_name DiscoveryEngineAssistant#display_name}

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.engineId"></a>

```typescript
public readonly engineId: string;
```

- *Type:* string

The unique id of the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#engine_id DiscoveryEngineAssistant#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#location DiscoveryEngineAssistant#location}

---

##### `customerPolicy`<sup>Optional</sup> <a name="customerPolicy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.customerPolicy"></a>

```typescript
public readonly customerPolicy: DiscoveryEngineAssistantCustomerPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy">DiscoveryEngineAssistantCustomerPolicy</a>

customer_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#customer_policy DiscoveryEngineAssistant#customer_policy}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#deletion_policy DiscoveryEngineAssistant#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description for additional information. Expected to be shown on the configuration UI, not to the users of the assistant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#description DiscoveryEngineAssistant#description}

---

##### `generationConfig`<sup>Optional</sup> <a name="generationConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.generationConfig"></a>

```typescript
public readonly generationConfig: DiscoveryEngineAssistantGenerationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig">DiscoveryEngineAssistantGenerationConfig</a>

generation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#generation_config DiscoveryEngineAssistant#generation_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#id DiscoveryEngineAssistant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#project DiscoveryEngineAssistant#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DiscoveryEngineAssistantTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts">DiscoveryEngineAssistantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#timeouts DiscoveryEngineAssistant#timeouts}

---

##### `webGroundingType`<sup>Optional</sup> <a name="webGroundingType" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.webGroundingType"></a>

```typescript
public readonly webGroundingType: string;
```

- *Type:* string

The type of web grounding to use. The supported values: 'WEB_GROUNDING_TYPE_DISABLED', 'WEB_GROUNDING_TYPE_GOOGLE_SEARCH', 'WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#web_grounding_type DiscoveryEngineAssistant#web_grounding_type}

---

### DiscoveryEngineAssistantCustomerPolicy <a name="DiscoveryEngineAssistantCustomerPolicy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy.Initializer"></a>

```typescript
import { discoveryEngineAssistant } from '@cdktn/provider-google'

const discoveryEngineAssistantCustomerPolicy: discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy.property.bannedPhrases">bannedPhrases</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>[]</code> | banned_phrases block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy.property.modelArmorConfig">modelArmorConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig">DiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a></code> | model_armor_config block. |

---

##### `bannedPhrases`<sup>Optional</sup> <a name="bannedPhrases" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy.property.bannedPhrases"></a>

```typescript
public readonly bannedPhrases: IResolvable | DiscoveryEngineAssistantCustomerPolicyBannedPhrases[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>[]

banned_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#banned_phrases DiscoveryEngineAssistant#banned_phrases}

---

##### `modelArmorConfig`<sup>Optional</sup> <a name="modelArmorConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy.property.modelArmorConfig"></a>

```typescript
public readonly modelArmorConfig: DiscoveryEngineAssistantCustomerPolicyModelArmorConfig;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig">DiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a>

model_armor_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#model_armor_config DiscoveryEngineAssistant#model_armor_config}

---

### DiscoveryEngineAssistantCustomerPolicyBannedPhrases <a name="DiscoveryEngineAssistantCustomerPolicyBannedPhrases" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases.Initializer"></a>

```typescript
import { discoveryEngineAssistant } from '@cdktn/provider-google'

const discoveryEngineAssistantCustomerPolicyBannedPhrases: discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.phrase">phrase</a></code> | <code>string</code> | The raw string content to be banned. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.ignoreDiacritics">ignoreDiacritics</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, diacritical marks (e.g., accents, umlauts) are ignored when matching banned phrases. For example, "cafe" would match "café". |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.matchType">matchType</a></code> | <code>string</code> | Match type for the banned phrase. The supported values: 'SIMPLE_STRING_MATCH', 'WORD_BOUNDARY_STRING_MATCH'. |

---

##### `phrase`<sup>Required</sup> <a name="phrase" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.phrase"></a>

```typescript
public readonly phrase: string;
```

- *Type:* string

The raw string content to be banned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#phrase DiscoveryEngineAssistant#phrase}

---

##### `ignoreDiacritics`<sup>Optional</sup> <a name="ignoreDiacritics" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.ignoreDiacritics"></a>

```typescript
public readonly ignoreDiacritics: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, diacritical marks (e.g., accents, umlauts) are ignored when matching banned phrases. For example, "cafe" would match "café".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#ignore_diacritics DiscoveryEngineAssistant#ignore_diacritics}

---

##### `matchType`<sup>Optional</sup> <a name="matchType" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.matchType"></a>

```typescript
public readonly matchType: string;
```

- *Type:* string

Match type for the banned phrase. The supported values: 'SIMPLE_STRING_MATCH', 'WORD_BOUNDARY_STRING_MATCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#match_type DiscoveryEngineAssistant#match_type}

---

### DiscoveryEngineAssistantCustomerPolicyModelArmorConfig <a name="DiscoveryEngineAssistantCustomerPolicyModelArmorConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig.Initializer"></a>

```typescript
import { discoveryEngineAssistant } from '@cdktn/provider-google'

const discoveryEngineAssistantCustomerPolicyModelArmorConfig: discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.responseTemplate">responseTemplate</a></code> | <code>string</code> | The resource name of the Model Armor template for sanitizing assistant responses. Format: 'projects/{project}/locations/{location}/templates/{template_id}'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.userPromptTemplate">userPromptTemplate</a></code> | <code>string</code> | The resource name of the Model Armor template for sanitizing user prompts. Format: 'projects/{project}/locations/{location}/templates/{template_id}'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.failureMode">failureMode</a></code> | <code>string</code> | Defines the failure mode for Model Armor sanitization. The supported values: 'FAIL_OPEN', 'FAIL_CLOSED'. |

---

##### `responseTemplate`<sup>Required</sup> <a name="responseTemplate" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.responseTemplate"></a>

```typescript
public readonly responseTemplate: string;
```

- *Type:* string

The resource name of the Model Armor template for sanitizing assistant responses. Format: 'projects/{project}/locations/{location}/templates/{template_id}'.

If not specified, no sanitization will be applied to the assistant
response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#response_template DiscoveryEngineAssistant#response_template}

---

##### `userPromptTemplate`<sup>Required</sup> <a name="userPromptTemplate" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.userPromptTemplate"></a>

```typescript
public readonly userPromptTemplate: string;
```

- *Type:* string

The resource name of the Model Armor template for sanitizing user prompts. Format: 'projects/{project}/locations/{location}/templates/{template_id}'.

If not specified, no sanitization will be applied to the user prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#user_prompt_template DiscoveryEngineAssistant#user_prompt_template}

---

##### `failureMode`<sup>Optional</sup> <a name="failureMode" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.failureMode"></a>

```typescript
public readonly failureMode: string;
```

- *Type:* string

Defines the failure mode for Model Armor sanitization. The supported values: 'FAIL_OPEN', 'FAIL_CLOSED'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#failure_mode DiscoveryEngineAssistant#failure_mode}

---

### DiscoveryEngineAssistantGenerationConfig <a name="DiscoveryEngineAssistantGenerationConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig.Initializer"></a>

```typescript
import { discoveryEngineAssistant } from '@cdktn/provider-google'

const discoveryEngineAssistantGenerationConfig: discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig.property.defaultLanguage">defaultLanguage</a></code> | <code>string</code> | The default language to use for the generation of the assistant response. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig.property.systemInstruction">systemInstruction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction">DiscoveryEngineAssistantGenerationConfigSystemInstruction</a></code> | system_instruction block. |

---

##### `defaultLanguage`<sup>Optional</sup> <a name="defaultLanguage" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig.property.defaultLanguage"></a>

```typescript
public readonly defaultLanguage: string;
```

- *Type:* string

The default language to use for the generation of the assistant response.

Use an ISO 639-1 language code such as 'en'.
If not specified, the language will be automatically detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#default_language DiscoveryEngineAssistant#default_language}

---

##### `systemInstruction`<sup>Optional</sup> <a name="systemInstruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig.property.systemInstruction"></a>

```typescript
public readonly systemInstruction: DiscoveryEngineAssistantGenerationConfigSystemInstruction;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction">DiscoveryEngineAssistantGenerationConfigSystemInstruction</a>

system_instruction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#system_instruction DiscoveryEngineAssistant#system_instruction}

---

### DiscoveryEngineAssistantGenerationConfigSystemInstruction <a name="DiscoveryEngineAssistantGenerationConfigSystemInstruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction.Initializer"></a>

```typescript
import { discoveryEngineAssistant } from '@cdktn/provider-google'

const discoveryEngineAssistantGenerationConfigSystemInstruction: discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction.property.additionalSystemInstruction">additionalSystemInstruction</a></code> | <code>string</code> | Additional system instruction that will be added to the default system instruction. |

---

##### `additionalSystemInstruction`<sup>Optional</sup> <a name="additionalSystemInstruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction.property.additionalSystemInstruction"></a>

```typescript
public readonly additionalSystemInstruction: string;
```

- *Type:* string

Additional system instruction that will be added to the default system instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#additional_system_instruction DiscoveryEngineAssistant#additional_system_instruction}

---

### DiscoveryEngineAssistantTimeouts <a name="DiscoveryEngineAssistantTimeouts" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts.Initializer"></a>

```typescript
import { discoveryEngineAssistant } from '@cdktn/provider-google'

const discoveryEngineAssistantTimeouts: discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#create DiscoveryEngineAssistant#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#delete DiscoveryEngineAssistant#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#update DiscoveryEngineAssistant#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#create DiscoveryEngineAssistant#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#delete DiscoveryEngineAssistant#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_assistant#update DiscoveryEngineAssistant#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList <a name="DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer"></a>

```typescript
import { discoveryEngineAssistant } from '@cdktn/provider-google'

new discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.get"></a>

```typescript
public get(index: number): DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineAssistantCustomerPolicyBannedPhrases[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>[]

---


### DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference <a name="DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer"></a>

```typescript
import { discoveryEngineAssistant } from '@cdktn/provider-google'

new discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resetIgnoreDiacritics">resetIgnoreDiacritics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resetMatchType">resetMatchType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreDiacritics` <a name="resetIgnoreDiacritics" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resetIgnoreDiacritics"></a>

```typescript
public resetIgnoreDiacritics(): void
```

##### `resetMatchType` <a name="resetMatchType" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resetMatchType"></a>

```typescript
public resetMatchType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.ignoreDiacriticsInput">ignoreDiacriticsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.matchTypeInput">matchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.phraseInput">phraseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.ignoreDiacritics">ignoreDiacritics</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.matchType">matchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.phrase">phrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ignoreDiacriticsInput`<sup>Optional</sup> <a name="ignoreDiacriticsInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.ignoreDiacriticsInput"></a>

```typescript
public readonly ignoreDiacriticsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `matchTypeInput`<sup>Optional</sup> <a name="matchTypeInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.matchTypeInput"></a>

```typescript
public readonly matchTypeInput: string;
```

- *Type:* string

---

##### `phraseInput`<sup>Optional</sup> <a name="phraseInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.phraseInput"></a>

```typescript
public readonly phraseInput: string;
```

- *Type:* string

---

##### `ignoreDiacritics`<sup>Required</sup> <a name="ignoreDiacritics" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.ignoreDiacritics"></a>

```typescript
public readonly ignoreDiacritics: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.matchType"></a>

```typescript
public readonly matchType: string;
```

- *Type:* string

---

##### `phrase`<sup>Required</sup> <a name="phrase" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.phrase"></a>

```typescript
public readonly phrase: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineAssistantCustomerPolicyBannedPhrases;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>

---


### DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference <a name="DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineAssistant } from '@cdktn/provider-google'

new discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resetFailureMode">resetFailureMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailureMode` <a name="resetFailureMode" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resetFailureMode"></a>

```typescript
public resetFailureMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.failureModeInput">failureModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.responseTemplateInput">responseTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.userPromptTemplateInput">userPromptTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.failureMode">failureMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.responseTemplate">responseTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.userPromptTemplate">userPromptTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig">DiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failureModeInput`<sup>Optional</sup> <a name="failureModeInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.failureModeInput"></a>

```typescript
public readonly failureModeInput: string;
```

- *Type:* string

---

##### `responseTemplateInput`<sup>Optional</sup> <a name="responseTemplateInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.responseTemplateInput"></a>

```typescript
public readonly responseTemplateInput: string;
```

- *Type:* string

---

##### `userPromptTemplateInput`<sup>Optional</sup> <a name="userPromptTemplateInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.userPromptTemplateInput"></a>

```typescript
public readonly userPromptTemplateInput: string;
```

- *Type:* string

---

##### `failureMode`<sup>Required</sup> <a name="failureMode" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.failureMode"></a>

```typescript
public readonly failureMode: string;
```

- *Type:* string

---

##### `responseTemplate`<sup>Required</sup> <a name="responseTemplate" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.responseTemplate"></a>

```typescript
public readonly responseTemplate: string;
```

- *Type:* string

---

##### `userPromptTemplate`<sup>Required</sup> <a name="userPromptTemplate" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.userPromptTemplate"></a>

```typescript
public readonly userPromptTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineAssistantCustomerPolicyModelArmorConfig;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig">DiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a>

---


### DiscoveryEngineAssistantCustomerPolicyOutputReference <a name="DiscoveryEngineAssistantCustomerPolicyOutputReference" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer"></a>

```typescript
import { discoveryEngineAssistant } from '@cdktn/provider-google'

new discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.putBannedPhrases">putBannedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.putModelArmorConfig">putModelArmorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.resetBannedPhrases">resetBannedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.resetModelArmorConfig">resetModelArmorConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBannedPhrases` <a name="putBannedPhrases" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.putBannedPhrases"></a>

```typescript
public putBannedPhrases(value: IResolvable | DiscoveryEngineAssistantCustomerPolicyBannedPhrases[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.putBannedPhrases.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>[]

---

##### `putModelArmorConfig` <a name="putModelArmorConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.putModelArmorConfig"></a>

```typescript
public putModelArmorConfig(value: DiscoveryEngineAssistantCustomerPolicyModelArmorConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.putModelArmorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig">DiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a>

---

##### `resetBannedPhrases` <a name="resetBannedPhrases" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.resetBannedPhrases"></a>

```typescript
public resetBannedPhrases(): void
```

##### `resetModelArmorConfig` <a name="resetModelArmorConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.resetModelArmorConfig"></a>

```typescript
public resetModelArmorConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.bannedPhrases">bannedPhrases</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList">DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.modelArmorConfig">modelArmorConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference">DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.bannedPhrasesInput">bannedPhrasesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.modelArmorConfigInput">modelArmorConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig">DiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy">DiscoveryEngineAssistantCustomerPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bannedPhrases`<sup>Required</sup> <a name="bannedPhrases" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.bannedPhrases"></a>

```typescript
public readonly bannedPhrases: DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList">DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList</a>

---

##### `modelArmorConfig`<sup>Required</sup> <a name="modelArmorConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.modelArmorConfig"></a>

```typescript
public readonly modelArmorConfig: DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference">DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference</a>

---

##### `bannedPhrasesInput`<sup>Optional</sup> <a name="bannedPhrasesInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.bannedPhrasesInput"></a>

```typescript
public readonly bannedPhrasesInput: IResolvable | DiscoveryEngineAssistantCustomerPolicyBannedPhrases[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>[]

---

##### `modelArmorConfigInput`<sup>Optional</sup> <a name="modelArmorConfigInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.modelArmorConfigInput"></a>

```typescript
public readonly modelArmorConfigInput: DiscoveryEngineAssistantCustomerPolicyModelArmorConfig;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig">DiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineAssistantCustomerPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy">DiscoveryEngineAssistantCustomerPolicy</a>

---


### DiscoveryEngineAssistantGenerationConfigOutputReference <a name="DiscoveryEngineAssistantGenerationConfigOutputReference" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineAssistant } from '@cdktn/provider-google'

new discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.putSystemInstruction">putSystemInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.resetDefaultLanguage">resetDefaultLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.resetSystemInstruction">resetSystemInstruction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSystemInstruction` <a name="putSystemInstruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.putSystemInstruction"></a>

```typescript
public putSystemInstruction(value: DiscoveryEngineAssistantGenerationConfigSystemInstruction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.putSystemInstruction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction">DiscoveryEngineAssistantGenerationConfigSystemInstruction</a>

---

##### `resetDefaultLanguage` <a name="resetDefaultLanguage" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.resetDefaultLanguage"></a>

```typescript
public resetDefaultLanguage(): void
```

##### `resetSystemInstruction` <a name="resetSystemInstruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.resetSystemInstruction"></a>

```typescript
public resetSystemInstruction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.systemInstruction">systemInstruction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference">DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.defaultLanguageInput">defaultLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.systemInstructionInput">systemInstructionInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction">DiscoveryEngineAssistantGenerationConfigSystemInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.defaultLanguage">defaultLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig">DiscoveryEngineAssistantGenerationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `systemInstruction`<sup>Required</sup> <a name="systemInstruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.systemInstruction"></a>

```typescript
public readonly systemInstruction: DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference">DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference</a>

---

##### `defaultLanguageInput`<sup>Optional</sup> <a name="defaultLanguageInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.defaultLanguageInput"></a>

```typescript
public readonly defaultLanguageInput: string;
```

- *Type:* string

---

##### `systemInstructionInput`<sup>Optional</sup> <a name="systemInstructionInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.systemInstructionInput"></a>

```typescript
public readonly systemInstructionInput: DiscoveryEngineAssistantGenerationConfigSystemInstruction;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction">DiscoveryEngineAssistantGenerationConfigSystemInstruction</a>

---

##### `defaultLanguage`<sup>Required</sup> <a name="defaultLanguage" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.defaultLanguage"></a>

```typescript
public readonly defaultLanguage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineAssistantGenerationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig">DiscoveryEngineAssistantGenerationConfig</a>

---


### DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference <a name="DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer"></a>

```typescript
import { discoveryEngineAssistant } from '@cdktn/provider-google'

new discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resetAdditionalSystemInstruction">resetAdditionalSystemInstruction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalSystemInstruction` <a name="resetAdditionalSystemInstruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resetAdditionalSystemInstruction"></a>

```typescript
public resetAdditionalSystemInstruction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.additionalSystemInstructionInput">additionalSystemInstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.additionalSystemInstruction">additionalSystemInstruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction">DiscoveryEngineAssistantGenerationConfigSystemInstruction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalSystemInstructionInput`<sup>Optional</sup> <a name="additionalSystemInstructionInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.additionalSystemInstructionInput"></a>

```typescript
public readonly additionalSystemInstructionInput: string;
```

- *Type:* string

---

##### `additionalSystemInstruction`<sup>Required</sup> <a name="additionalSystemInstruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.additionalSystemInstruction"></a>

```typescript
public readonly additionalSystemInstruction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineAssistantGenerationConfigSystemInstruction;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction">DiscoveryEngineAssistantGenerationConfigSystemInstruction</a>

---


### DiscoveryEngineAssistantTimeoutsOutputReference <a name="DiscoveryEngineAssistantTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.Initializer"></a>

```typescript
import { discoveryEngineAssistant } from '@cdktn/provider-google'

new discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts">DiscoveryEngineAssistantTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineAssistantTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts">DiscoveryEngineAssistantTimeouts</a>

---



