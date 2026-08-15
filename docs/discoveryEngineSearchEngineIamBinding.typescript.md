# `discoveryEngineSearchEngineIamBinding` Submodule <a name="`discoveryEngineSearchEngineIamBinding` Submodule" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineSearchEngineIamBinding <a name="DiscoveryEngineSearchEngineIamBinding" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/discovery_engine_search_engine_iam_binding google_discovery_engine_search_engine_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.Initializer"></a>

```typescript
import { discoveryEngineSearchEngineIamBinding } from '@cdktn/provider-google'

new discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding(scope: Construct, id: string, config: DiscoveryEngineSearchEngineIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig">DiscoveryEngineSearchEngineIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig">DiscoveryEngineSearchEngineIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.putCondition"></a>

```typescript
public putCondition(value: DiscoveryEngineSearchEngineIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingCondition">DiscoveryEngineSearchEngineIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineSearchEngineIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.isConstruct"></a>

```typescript
import { discoveryEngineSearchEngineIamBinding } from '@cdktn/provider-google'

discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.isTerraformElement"></a>

```typescript
import { discoveryEngineSearchEngineIamBinding } from '@cdktn/provider-google'

discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.isTerraformResource"></a>

```typescript
import { discoveryEngineSearchEngineIamBinding } from '@cdktn/provider-google'

discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.generateConfigForImport"></a>

```typescript
import { discoveryEngineSearchEngineIamBinding } from '@cdktn/provider-google'

discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DiscoveryEngineSearchEngineIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DiscoveryEngineSearchEngineIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DiscoveryEngineSearchEngineIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/discovery_engine_search_engine_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineSearchEngineIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference">DiscoveryEngineSearchEngineIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.collectionIdInput">collectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingCondition">DiscoveryEngineSearchEngineIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.engineIdInput">engineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.collectionId">collectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.engineId">engineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.condition"></a>

```typescript
public readonly condition: DiscoveryEngineSearchEngineIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference">DiscoveryEngineSearchEngineIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.collectionIdInput"></a>

```typescript
public readonly collectionIdInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: DiscoveryEngineSearchEngineIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingCondition">DiscoveryEngineSearchEngineIamBindingCondition</a>

---

##### `engineIdInput`<sup>Optional</sup> <a name="engineIdInput" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.engineIdInput"></a>

```typescript
public readonly engineIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.engineId"></a>

```typescript
public readonly engineId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineSearchEngineIamBindingCondition <a name="DiscoveryEngineSearchEngineIamBindingCondition" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingCondition.Initializer"></a>

```typescript
import { discoveryEngineSearchEngineIamBinding } from '@cdktn/provider-google'

const discoveryEngineSearchEngineIamBindingCondition: discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/discovery_engine_search_engine_iam_binding#expression DiscoveryEngineSearchEngineIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/discovery_engine_search_engine_iam_binding#title DiscoveryEngineSearchEngineIamBinding#title}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/discovery_engine_search_engine_iam_binding#description DiscoveryEngineSearchEngineIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/discovery_engine_search_engine_iam_binding#expression DiscoveryEngineSearchEngineIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/discovery_engine_search_engine_iam_binding#title DiscoveryEngineSearchEngineIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/discovery_engine_search_engine_iam_binding#description DiscoveryEngineSearchEngineIamBinding#description}.

---

### DiscoveryEngineSearchEngineIamBindingConfig <a name="DiscoveryEngineSearchEngineIamBindingConfig" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.Initializer"></a>

```typescript
import { discoveryEngineSearchEngineIamBinding } from '@cdktn/provider-google'

const discoveryEngineSearchEngineIamBindingConfig: discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.collectionId">collectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/discovery_engine_search_engine_iam_binding#collection_id DiscoveryEngineSearchEngineIamBinding#collection_id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.engineId">engineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/discovery_engine_search_engine_iam_binding#engine_id DiscoveryEngineSearchEngineIamBinding#engine_id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/discovery_engine_search_engine_iam_binding#members DiscoveryEngineSearchEngineIamBinding#members}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/discovery_engine_search_engine_iam_binding#role DiscoveryEngineSearchEngineIamBinding#role}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingCondition">DiscoveryEngineSearchEngineIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/discovery_engine_search_engine_iam_binding#id DiscoveryEngineSearchEngineIamBinding#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/discovery_engine_search_engine_iam_binding#location DiscoveryEngineSearchEngineIamBinding#location}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/discovery_engine_search_engine_iam_binding#project DiscoveryEngineSearchEngineIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/discovery_engine_search_engine_iam_binding#collection_id DiscoveryEngineSearchEngineIamBinding#collection_id}.

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.engineId"></a>

```typescript
public readonly engineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/discovery_engine_search_engine_iam_binding#engine_id DiscoveryEngineSearchEngineIamBinding#engine_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/discovery_engine_search_engine_iam_binding#members DiscoveryEngineSearchEngineIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/discovery_engine_search_engine_iam_binding#role DiscoveryEngineSearchEngineIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: DiscoveryEngineSearchEngineIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingCondition">DiscoveryEngineSearchEngineIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/discovery_engine_search_engine_iam_binding#condition DiscoveryEngineSearchEngineIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/discovery_engine_search_engine_iam_binding#id DiscoveryEngineSearchEngineIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/discovery_engine_search_engine_iam_binding#location DiscoveryEngineSearchEngineIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/discovery_engine_search_engine_iam_binding#project DiscoveryEngineSearchEngineIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineSearchEngineIamBindingConditionOutputReference <a name="DiscoveryEngineSearchEngineIamBindingConditionOutputReference" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { discoveryEngineSearchEngineIamBinding } from '@cdktn/provider-google'

new discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingCondition">DiscoveryEngineSearchEngineIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineSearchEngineIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamBinding.DiscoveryEngineSearchEngineIamBindingCondition">DiscoveryEngineSearchEngineIamBindingCondition</a>

---



