# `resourceManagerCapabilityConfig` Submodule <a name="`resourceManagerCapabilityConfig` Submodule" id="@cdktn/provider-google.resourceManagerCapabilityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceManagerCapabilityConfigA <a name="ResourceManagerCapabilityConfigA" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config google_resource_manager_capability_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer"></a>

```typescript
import { resourceManagerCapabilityConfig } from '@cdktn/provider-google'

new resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA(scope: Construct, id: string, config: ResourceManagerCapabilityConfigAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig">ResourceManagerCapabilityConfigAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig">ResourceManagerCapabilityConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetManagementProject">resetManagementProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.putTimeouts"></a>

```typescript
public putTimeouts(value: ResourceManagerCapabilityConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetId"></a>

```typescript
public resetId(): void
```

##### `resetManagementProject` <a name="resetManagementProject" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetManagementProject"></a>

```typescript
public resetManagementProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ResourceManagerCapabilityConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isConstruct"></a>

```typescript
import { resourceManagerCapabilityConfig } from '@cdktn/provider-google'

resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformElement"></a>

```typescript
import { resourceManagerCapabilityConfig } from '@cdktn/provider-google'

resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformResource"></a>

```typescript
import { resourceManagerCapabilityConfig } from '@cdktn/provider-google'

resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport"></a>

```typescript
import { resourceManagerCapabilityConfig } from '@cdktn/provider-google'

resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ResourceManagerCapabilityConfigA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ResourceManagerCapabilityConfigA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ResourceManagerCapabilityConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ResourceManagerCapabilityConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference">ResourceManagerCapabilityConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.capabilityConfigIdInput">capabilityConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.managementProjectInput">managementProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.typesInput">typesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.capabilityConfigId">capabilityConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.managementProject">managementProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.types">types</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.timeouts"></a>

```typescript
public readonly timeouts: ResourceManagerCapabilityConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference">ResourceManagerCapabilityConfigTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `capabilityConfigIdInput`<sup>Optional</sup> <a name="capabilityConfigIdInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.capabilityConfigIdInput"></a>

```typescript
public readonly capabilityConfigIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managementProjectInput`<sup>Optional</sup> <a name="managementProjectInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.managementProjectInput"></a>

```typescript
public readonly managementProjectInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ResourceManagerCapabilityConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a>

---

##### `typesInput`<sup>Optional</sup> <a name="typesInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.typesInput"></a>

```typescript
public readonly typesInput: string[];
```

- *Type:* string[]

---

##### `capabilityConfigId`<sup>Required</sup> <a name="capabilityConfigId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.capabilityConfigId"></a>

```typescript
public readonly capabilityConfigId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managementProject`<sup>Required</sup> <a name="managementProject" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.managementProject"></a>

```typescript
public readonly managementProject: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceManagerCapabilityConfigAConfig <a name="ResourceManagerCapabilityConfigAConfig" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.Initializer"></a>

```typescript
import { resourceManagerCapabilityConfig } from '@cdktn/provider-google'

const resourceManagerCapabilityConfigAConfig: resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.capabilityConfigId">capabilityConfigId</a></code> | <code>string</code> | User-specified identifier of the capability config. Must be 6 to 30 characters, and contain only lowercase letters, numbers, and hyphens. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.parent">parent</a></code> | <code>string</code> | The parent resource in which to create the capability config. Format: 'folders/{folder_id}', 'organizations/{organization_id}', or 'projects/{project_number}'. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.types">types</a></code> | <code>string[]</code> | The capabilities enabled for the resource and its sub-tree. Possible values: "AGENT_MANAGEMENT". |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.displayName">displayName</a></code> | <code>string</code> | User-defined name for the capability config. Must be between 4 and 30 characters. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#id ResourceManagerCapabilityConfigA#id}. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.managementProject">managementProject</a></code> | <code>string</code> | The management project for the capability config. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `capabilityConfigId`<sup>Required</sup> <a name="capabilityConfigId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.capabilityConfigId"></a>

```typescript
public readonly capabilityConfigId: string;
```

- *Type:* string

User-specified identifier of the capability config. Must be 6 to 30 characters, and contain only lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#capability_config_id ResourceManagerCapabilityConfigA#capability_config_id}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The parent resource in which to create the capability config. Format: 'folders/{folder_id}', 'organizations/{organization_id}', or 'projects/{project_number}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#parent ResourceManagerCapabilityConfigA#parent}

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

The capabilities enabled for the resource and its sub-tree. Possible values: "AGENT_MANAGEMENT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#types ResourceManagerCapabilityConfigA#types}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#deletion_policy ResourceManagerCapabilityConfigA#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User-defined name for the capability config. Must be between 4 and 30 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#display_name ResourceManagerCapabilityConfigA#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#id ResourceManagerCapabilityConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managementProject`<sup>Optional</sup> <a name="managementProject" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.managementProject"></a>

```typescript
public readonly managementProject: string;
```

- *Type:* string

The management project for the capability config.

If unspecified, a project will be created automatically.
Must be specified for project-scoped capability config.
Format: 'projects/{project_number}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#management_project ResourceManagerCapabilityConfigA#management_project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ResourceManagerCapabilityConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#timeouts ResourceManagerCapabilityConfigA#timeouts}

---

### ResourceManagerCapabilityConfigTimeouts <a name="ResourceManagerCapabilityConfigTimeouts" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.Initializer"></a>

```typescript
import { resourceManagerCapabilityConfig } from '@cdktn/provider-google'

const resourceManagerCapabilityConfigTimeouts: resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#create ResourceManagerCapabilityConfigA#create}. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#delete ResourceManagerCapabilityConfigA#delete}. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#update ResourceManagerCapabilityConfigA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#create ResourceManagerCapabilityConfigA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#delete ResourceManagerCapabilityConfigA#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#update ResourceManagerCapabilityConfigA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceManagerCapabilityConfigTimeoutsOutputReference <a name="ResourceManagerCapabilityConfigTimeoutsOutputReference" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { resourceManagerCapabilityConfig } from '@cdktn/provider-google'

new resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceManagerCapabilityConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a>

---



