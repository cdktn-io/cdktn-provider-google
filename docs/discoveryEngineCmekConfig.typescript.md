# `discoveryEngineCmekConfig` Submodule <a name="`discoveryEngineCmekConfig` Submodule" id="@cdktn/provider-google.discoveryEngineCmekConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineCmekConfig <a name="DiscoveryEngineCmekConfig" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_cmek_config google_discovery_engine_cmek_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.Initializer"></a>

```typescript
import { discoveryEngineCmekConfig } from '@cdktn/provider-google'

new discoveryEngineCmekConfig.DiscoveryEngineCmekConfig(scope: Construct, id: string, config: DiscoveryEngineCmekConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig">DiscoveryEngineCmekConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig">DiscoveryEngineCmekConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.putSingleRegionKeys">putSingleRegionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.resetSetDefault">resetSetDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.resetSingleRegionKeys">resetSingleRegionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSingleRegionKeys` <a name="putSingleRegionKeys" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.putSingleRegionKeys"></a>

```typescript
public putSingleRegionKeys(value: IResolvable | DiscoveryEngineCmekConfigSingleRegionKeys[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.putSingleRegionKeys.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeys">DiscoveryEngineCmekConfigSingleRegionKeys</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: DiscoveryEngineCmekConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeouts">DiscoveryEngineCmekConfigTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSetDefault` <a name="resetSetDefault" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.resetSetDefault"></a>

```typescript
public resetSetDefault(): void
```

##### `resetSingleRegionKeys` <a name="resetSingleRegionKeys" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.resetSingleRegionKeys"></a>

```typescript
public resetSingleRegionKeys(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineCmekConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.isConstruct"></a>

```typescript
import { discoveryEngineCmekConfig } from '@cdktn/provider-google'

discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.isTerraformElement"></a>

```typescript
import { discoveryEngineCmekConfig } from '@cdktn/provider-google'

discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.isTerraformResource"></a>

```typescript
import { discoveryEngineCmekConfig } from '@cdktn/provider-google'

discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.generateConfigForImport"></a>

```typescript
import { discoveryEngineCmekConfig } from '@cdktn/provider-google'

discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DiscoveryEngineCmekConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DiscoveryEngineCmekConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DiscoveryEngineCmekConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_cmek_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineCmekConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.isDefault">isDefault</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.kmsKeyVersion">kmsKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.lastRotationTimestampMicros">lastRotationTimestampMicros</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.notebooklmState">notebooklmState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.singleRegionKeys">singleRegionKeys</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList">DiscoveryEngineCmekConfigSingleRegionKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference">DiscoveryEngineCmekConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.cmekConfigIdInput">cmekConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.setDefaultInput">setDefaultInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.singleRegionKeysInput">singleRegionKeysInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeys">DiscoveryEngineCmekConfigSingleRegionKeys</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeouts">DiscoveryEngineCmekConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.cmekConfigId">cmekConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.setDefault">setDefault</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.isDefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `kmsKeyVersion`<sup>Required</sup> <a name="kmsKeyVersion" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.kmsKeyVersion"></a>

```typescript
public readonly kmsKeyVersion: string;
```

- *Type:* string

---

##### `lastRotationTimestampMicros`<sup>Required</sup> <a name="lastRotationTimestampMicros" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.lastRotationTimestampMicros"></a>

```typescript
public readonly lastRotationTimestampMicros: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notebooklmState`<sup>Required</sup> <a name="notebooklmState" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.notebooklmState"></a>

```typescript
public readonly notebooklmState: string;
```

- *Type:* string

---

##### `singleRegionKeys`<sup>Required</sup> <a name="singleRegionKeys" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.singleRegionKeys"></a>

```typescript
public readonly singleRegionKeys: DiscoveryEngineCmekConfigSingleRegionKeysList;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList">DiscoveryEngineCmekConfigSingleRegionKeysList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DiscoveryEngineCmekConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference">DiscoveryEngineCmekConfigTimeoutsOutputReference</a>

---

##### `cmekConfigIdInput`<sup>Optional</sup> <a name="cmekConfigIdInput" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.cmekConfigIdInput"></a>

```typescript
public readonly cmekConfigIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `setDefaultInput`<sup>Optional</sup> <a name="setDefaultInput" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.setDefaultInput"></a>

```typescript
public readonly setDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `singleRegionKeysInput`<sup>Optional</sup> <a name="singleRegionKeysInput" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.singleRegionKeysInput"></a>

```typescript
public readonly singleRegionKeysInput: IResolvable | DiscoveryEngineCmekConfigSingleRegionKeys[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeys">DiscoveryEngineCmekConfigSingleRegionKeys</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DiscoveryEngineCmekConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeouts">DiscoveryEngineCmekConfigTimeouts</a>

---

##### `cmekConfigId`<sup>Required</sup> <a name="cmekConfigId" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.cmekConfigId"></a>

```typescript
public readonly cmekConfigId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `setDefault`<sup>Required</sup> <a name="setDefault" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.setDefault"></a>

```typescript
public readonly setDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineCmekConfigConfig <a name="DiscoveryEngineCmekConfigConfig" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.Initializer"></a>

```typescript
import { discoveryEngineCmekConfig } from '@cdktn/provider-google'

const discoveryEngineCmekConfigConfig: discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.cmekConfigId">cmekConfigId</a></code> | <code>string</code> | The unique id of the cmek config. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.kmsKey">kmsKey</a></code> | <code>string</code> | KMS key resource name which will be used to encrypt resources 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the CMEK config should reside. The value can only be one of "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_cmek_config#id DiscoveryEngineCmekConfig#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_cmek_config#project DiscoveryEngineCmekConfig#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.setDefault">setDefault</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set the following CmekConfig as the default to be used for child resources if one is not specified. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.singleRegionKeys">singleRegionKeys</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeys">DiscoveryEngineCmekConfigSingleRegionKeys</a>[]</code> | single_region_keys block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeouts">DiscoveryEngineCmekConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cmekConfigId`<sup>Required</sup> <a name="cmekConfigId" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.cmekConfigId"></a>

```typescript
public readonly cmekConfigId: string;
```

- *Type:* string

The unique id of the cmek config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_cmek_config#cmek_config_id DiscoveryEngineCmekConfig#cmek_config_id}

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

KMS key resource name which will be used to encrypt resources 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_cmek_config#kms_key DiscoveryEngineCmekConfig#kms_key}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the CMEK config should reside. The value can only be one of "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_cmek_config#location DiscoveryEngineCmekConfig#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_cmek_config#deletion_policy DiscoveryEngineCmekConfig#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_cmek_config#id DiscoveryEngineCmekConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_cmek_config#project DiscoveryEngineCmekConfig#project}.

---

##### `setDefault`<sup>Optional</sup> <a name="setDefault" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.setDefault"></a>

```typescript
public readonly setDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set the following CmekConfig as the default to be used for child resources if one is not specified.

The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_cmek_config#set_default DiscoveryEngineCmekConfig#set_default}

---

##### `singleRegionKeys`<sup>Optional</sup> <a name="singleRegionKeys" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.singleRegionKeys"></a>

```typescript
public readonly singleRegionKeys: IResolvable | DiscoveryEngineCmekConfigSingleRegionKeys[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeys">DiscoveryEngineCmekConfigSingleRegionKeys</a>[]

single_region_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_cmek_config#single_region_keys DiscoveryEngineCmekConfig#single_region_keys}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DiscoveryEngineCmekConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeouts">DiscoveryEngineCmekConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_cmek_config#timeouts DiscoveryEngineCmekConfig#timeouts}

---

### DiscoveryEngineCmekConfigSingleRegionKeys <a name="DiscoveryEngineCmekConfigSingleRegionKeys" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeys.Initializer"></a>

```typescript
import { discoveryEngineCmekConfig } from '@cdktn/provider-google'

const discoveryEngineCmekConfigSingleRegionKeys: discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeys = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeys.property.kmsKey">kmsKey</a></code> | <code>string</code> | Single-regional kms key resource name which will be used to encrypt resources 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}'. |

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeys.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

Single-regional kms key resource name which will be used to encrypt resources 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_cmek_config#kms_key DiscoveryEngineCmekConfig#kms_key}

---

### DiscoveryEngineCmekConfigTimeouts <a name="DiscoveryEngineCmekConfigTimeouts" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeouts.Initializer"></a>

```typescript
import { discoveryEngineCmekConfig } from '@cdktn/provider-google'

const discoveryEngineCmekConfigTimeouts: discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_cmek_config#create DiscoveryEngineCmekConfig#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_cmek_config#delete DiscoveryEngineCmekConfig#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_cmek_config#update DiscoveryEngineCmekConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_cmek_config#create DiscoveryEngineCmekConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_cmek_config#delete DiscoveryEngineCmekConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_cmek_config#update DiscoveryEngineCmekConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineCmekConfigSingleRegionKeysList <a name="DiscoveryEngineCmekConfigSingleRegionKeysList" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.Initializer"></a>

```typescript
import { discoveryEngineCmekConfig } from '@cdktn/provider-google'

new discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.get"></a>

```typescript
public get(index: number): DiscoveryEngineCmekConfigSingleRegionKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeys">DiscoveryEngineCmekConfigSingleRegionKeys</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineCmekConfigSingleRegionKeys[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeys">DiscoveryEngineCmekConfigSingleRegionKeys</a>[]

---


### DiscoveryEngineCmekConfigSingleRegionKeysOutputReference <a name="DiscoveryEngineCmekConfigSingleRegionKeysOutputReference" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer"></a>

```typescript
import { discoveryEngineCmekConfig } from '@cdktn/provider-google'

new discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeys">DiscoveryEngineCmekConfigSingleRegionKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineCmekConfigSingleRegionKeys;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigSingleRegionKeys">DiscoveryEngineCmekConfigSingleRegionKeys</a>

---


### DiscoveryEngineCmekConfigTimeoutsOutputReference <a name="DiscoveryEngineCmekConfigTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { discoveryEngineCmekConfig } from '@cdktn/provider-google'

new discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeouts">DiscoveryEngineCmekConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineCmekConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineCmekConfig.DiscoveryEngineCmekConfigTimeouts">DiscoveryEngineCmekConfigTimeouts</a>

---



